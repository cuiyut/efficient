// const { defineConfig } = require('@vue/cli-service')
// const path = require('path')
// const resolve = (dir) => path.join(__dirname, '.', dir)
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://jsonplaceholder.typicode.com/',
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': ''
//         }
//       }
//     },
//     port: 8089,
//     host: '0.0.0.0',
//     https: false,
//     open: false
//   },
//   productionSourceMap: false,
//   publicPath: './',
//   outputDir: 'dist',
//   assetsDir: 'static',
//   chainWebpack: (config) => {
//     config.module
//       .rule('vue')
//       .use('vue-loader')
//       .tap((options) => {
//         return options
//       })
//       .end()
//   },
//   configureWebpack: {
//     resolve: {
//       alias: {
//         '@': resolve('src'),
//         vue$: 'vue/dist/vue.esm.js'
//       }
//     }
//   }
// })

const { defineConfig } = require('@vue/cli-service')
let port = 8090

module.exports = defineConfig({
  //第三方依赖是否需要转移,避免出现第三方的转移
  transpileDependencies: true,
  //是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  lintOnSave: false,
  //代理端口配置
  devServer: {
    // 代理的地址
    port,

    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_MOCK_ENABLE === 'true' ? `http://localhost:9999` : process.env.VUE_APP_CONSOLE_URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
})

// const { defineConfig } = require('@vue/cli-service')
// let port = 8088
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,
//   devServer: {
//     port,
//     proxy: {
//       [process.env.VUE_APP_BASE_API]: {
//         target:
//           process.env.VUE_APP_MOCK_ENABLE === true
//             ? `http://localhost:${port}/mock`
//             : 'process.env.VUE_APP_CONSOLE_URL',
//         changeOrigin: true,
//         pathRewrite: {
//           ['^' + process.env.VUE_APP_BASE_API]: ''
//         }
//       }
//     }
//   }
// })

// pro -> production (生产环境，全量，真机、线上)
// stage (灰度、备机)
// test (测试)
// dev (开发)可以自己使用

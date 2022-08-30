import Cookie from 'js-cookie'

const TokenKey = 'token'

// 获取token
export function getToken() {
  return Cookie.get(TokenKey)
}

// 设置token
export function setToken(token) {
  return Cookie.get(TokenKey, token)
}

// 删除token
export function removeToken() {
  return Cookie.get(TokenKey)
}

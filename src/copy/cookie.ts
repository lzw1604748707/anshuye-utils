import moment from 'moment'
import {ojbectUtils} from '..'
/**
 * 设置 cookie
 * @param {string} domain  作用域名
 * @param {string} path    作用路径
 * @param {string} expires 过期时间
 */
interface Attributes {
  domain?: string
  expires?: string | number
  path?: string
}
export default class Cookie {
  /**
   * 设置cookie。
   *
   * @param  {string} key     键名
   * @param  {string} value   键值
   * @param  {Attributes} attr  可选 cookie的配置项
   */
  public set(key: string, value: string, attr: Attributes = {}): Error | void {
    if (!key) return new Error('key is invalid')
    document.cookie = `${key}=${value};domain=${attr.domain ||
      ''};expires=${attr.expires || ''};path=${attr.path || '/'};`
  }

  /**
   * 根据key 获取cookie值
   * @param  {string} key     键名
   * @return {string}        cookie值
   */

  public get(key: string): string {
    const cookieList = document.cookie.split(';')
    let value = ''
    cookieList.some(cookie => {
      const [cookieKey, cookieValue] = cookie.split('=')
      if (cookieKey.trim() === key) value = cookieValue
      return cookieKey === key
    })
    return value
  }

  /**
   * 根据 key 查询是否有该 cookie
   * @param {string} key cookie 的键值
   *
   */
  public includes(key: string): boolean {
    const cookieList = document.cookie.split(';')
    return cookieList.some(cookie => {
      const [cookieKey, cookieValue] = cookie.split('=')
      return cookieKey.trim() === key
    })
  }

  /**
   * 删除的cookie的域和路径，Cookie域和路径要一样才能被覆盖。否则无法清除
   * @param {string} key cookie 的键值
   * @param {Attributes} attr 可选 cookie的配置项
   */
  public clear(key: string, attr?: Attributes): void {
    let option = {
      domain: '',
      path: '/',
      expires: moment()
        .subtract(1, 'days')
        .toDate()
        .toUTCString()
    }
    option = {...ojbectUtils.safeObject(attr), ...option}
    this.set(key, '', option)
  }
}

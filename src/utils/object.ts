import {arrayUtils} from '../index'

export default class OjbectUtils {
  /**
   *检测对象是否为一个安全对象，不是则返回空对象
   * @param obj  检测对象
   */
  public safeObject(obj: any): object {
    return this.isVaildObject(obj) ? obj : {}
  }
  /**
   *检测对象是否为空
   * true条件(一定为对象，且是空对象)
   * @param obj  检测对象
   */
  public isEmptyObject(obj: any): boolean {
    return typeof obj === 'object' && !Array.isArray(obj) && !Object.keys(obj).length
  }
  /**
   * 检验一个数组是否为有效对象。
   * true条件(一定为对象，且不是空对象)
   * @param  {any} obj   数据源
   */
  public isVaildObject(obj: any): boolean {
    return typeof obj === 'object' && !Array.isArray(obj) && !!Object.keys(obj).length
  }
  /**
   *初始化单层对象的属性
   * @param obj  源对象
   */
  public initPropertyValue(obj: Record<string, any>): Record<string, any> {
    obj = this.safeObject(obj)
    const typeInitMap: Record<string, any> = {object: {}, string: '', number: 0}
    for (let key in obj) {
      obj[key] = Array.isArray(obj[key]) ? [] : typeInitMap[typeof obj[key]]
    }
    return obj
  }
  /**
   *清空单层对象的无有效值的属性
   * @param obj  源对象
   */
  public clearInvalidProperty(obj: Record<string, any>): Record<string, any> {
    obj = this.safeObject(obj)
    for (let key in obj) {
      if (
        (typeof obj[key] !== 'boolean' && !obj[key] && obj[key] !== 0) ||
        this.isEmptyObject(obj[key]) ||
        arrayUtils.isEmptyArray(obj[key])
      ) {
        delete obj[key]
      }
    }
    return obj
  }

  /**
   * 根据 keys 筛选对象
   * @param obj 原对象
   * @param keys 字符串时以空格隔开，也可以直接传字符串数组
   * @returns ret 过滤后的字符串
   */
  public only(obj: Record<string, any>, keys: string | string[]) {
    obj = obj || {}
    if ('string' == typeof keys) keys = keys.split(/ +/)
    return keys.reduce(function(ret: Record<string, any>, key) {
      if (null == obj[key]) return ret
      ret[key] = obj[key]
      return ret
    }, {})
  }
}

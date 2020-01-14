export default class ArrayUtils {
  /**
   * 检测是否为一个安全数组,若不是返回空数组
   * @param  {any} array   数据源
   */
  public safeArray(array: any): any[] {
    return Array.isArray(array) ? array : []
  }
  /**
   * 检验一个数组是非为空。
   * true条件(一定为数组，且是空数组)
   * @param  {any} array   数据源
   */
  public isEmptyArray(array: any): boolean {
    return Array.isArray(array) && !array.length
  }
  /**
   * 检验一个数组是否为有效数组。
   * true条件(一定为数组，且数组内有值)
   * @param  {any} array   数据源
   */
  public isValidArray(array: any): boolean {
    return Array.isArray(array) && !!array.length
  }

  /**
   * 按间隔分割数组，返回的结果是二维数组，包含拆分后生成的数组。
   * @param  {Array} array   数据源
   * @param  {Number} length 拆分间隔
   */
  public splitArray(array: any[], length: number): any[] {
    let resultList: any[] = []
    for (var i = 0, len = array.length; i < len; i += length) {
      resultList.push(array.slice(i, i + length))
    }
    return resultList
  }

  /**
   * 将根据key值获取对象数组中的对应的键值组成数组，若key是数组，则根据key中的值重新组装对象数组
   * @param  {T[]} list   原对象数组
   * @param  {K|K[]} key key值或key数组
   */
  public getKeysList<T, K extends keyof T>(list: T[], key: K | K[]): any[] {
    const result: T | any[] = []
    list.forEach(item => {
      let temp: any = {}
      if (Array.isArray(key)) {
        key.forEach(key => {
          temp[key] = item[key]
        })
        result.push(temp)
      } else {
        result.push(item[key])
      }
    })
    return result
  }

  /**
   *按下标交换数组项
   * @param {Array} array 需要修改的数组
   * @param {Number} indexFirst 第一个下标
   * @param {Number} indexLast  第二个下标
   */
  public arrayItemSwap(array: any[], sourceIndex: number, targetIndex: number) {
    if (!array[sourceIndex]) return new Error('源下标不存在！')
    if (!array[targetIndex]) return new Error('目标下标不存在！')
    const flag = array.splice(targetIndex, 1, array[sourceIndex])
    array.splice(sourceIndex, 1, flag[0])
    return array
  }

  /**
   * 数组去重,如果传key则根据对应key的value值去除重复,不支持直接对比引用类型
   * @param {Array<T>} list 需要判断的数组
   * @param {K} key 需要对比的键名
   */
  public filterDuplicate<T, K extends keyof T>(list: T[] | any[], key?: K) {
    const length = list.length
    const listSet: Set<any> = new Set()
    for (let item of list) {
      listSet.add(item[key] || item)
    }
    if (key) {
      return list.filter(item => {
        let flag = listSet.has(item[key])
        listSet.delete(item[key])
        return flag
      })
    } else {
      return Array.from(listSet)
    }
  }

  /**
   * 树形重组，将树形结构的所有节点平行重组成普通数组
   * @param {Array} tree 需要重组的树状结构
   */
  public treeToList(tree: any[]): any[] {
    let queen: any[] = []
    const out = []
    queen = queen.concat(tree)
    while (queen.length) {
      let first = queen.shift()
      if (first.children) {
        queen = queen.concat(first.children)
        delete first['children']
      }
      out.push(first)
    }
    return out
  }
}

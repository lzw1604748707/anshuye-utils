export default class ArrayUtils {
    /**
     * 检测是否为一个安全数组,若不是返回空数组
     * @param  {any} array   数据源
     */
    safeArray(array: any): any[];
    /**
     * 检验一个数组是非为空。
     * true条件(一定为数组，且是空数组)
     * @param  {any} array   数据源
     */
    isEmptyArray(array: any): boolean;
    /**
     * 检验一个数组是否为有效数组。
     * true条件(一定为数组，且数组内有值)
     * @param  {any} array   数据源
     */
    isValidArray(array: any): boolean;
    /**
     * 按间隔分割数组，返回的结果是二维数组，包含拆分后生成的数组。
     * @param  {Array} array   数据源
     * @param  {Number} length 拆分间隔
     */
    splitArray(array: any[], length: number): any[];
    /**
     * 将根据key值获取对象数组中的对应的键值组成数组，若key是数组，则根据key中的值重新组装对象数组
     * @param  {T[]} list   原对象数组
     * @param  {K|K[]} key key值或key数组
     */
    getKeysList<T, K extends keyof T>(list: T[], key: K | K[]): any[];
    /**
     *按下标交换数组项
     * @param {Array} array 需要修改的数组
     * @param {Number} indexFirst 第一个下标
     * @param {Number} indexLast  第二个下标
     */
    arrayItemSwap(array: any[], sourceIndex: number, targetIndex: number): any[] | Error;
    /**
     * 数组去重,如果传key则根据对应key的value值去除重复,不支持直接对比引用类型
     * @param {Array<T>} list 需要判断的数组
     * @param {K} key 需要对比的键名
     */
    filterDuplicate<T, K extends keyof T>(list: T[] | any[], key?: K): any[];
    /**
     * 树形重组，将树形结构的所有节点平行重组成普通数组
     * @param {Array} tree 需要重组的树状结构
     */
    treeToList(tree: any[]): any[];
}

export default class OjbectUtils {
    /**
     *检测对象是否为一个安全对象，不是则返回空对象
     * @param obj  检测对象
     */
    safeObject(obj: any): object;
    /**
     *检测对象是否为空
     * true条件(一定为对象，且是空对象)
     * @param obj  检测对象
     */
    isEmptyObject(obj: any): boolean;
    /**
     * 检验一个数组是否为有效对象。
     * true条件(一定为对象，且不是空对象)
     * @param  {any} obj   数据源
     */
    isVaildObject(obj: any): boolean;
    /**
     *初始化单层对象的属性
     * @param obj  源对象
     */
    initPropertyValue(obj: Record<string, any>): Record<string, any>;
    /**
     *清空单层对象的无有效值的属性
     * @param obj  源对象
     */
    clearInvalidProperty(obj: Record<string, any>): Record<string, any>;
    /**
     * 根据 keys 筛选对象
     * @param obj 原对象
     * @param keys 字符串时以空格隔开，也可以直接传字符串数组
     * @returns ret 过滤后的字符串
     */
    only(obj: Record<string, any>, keys: string | string[]): Record<string, any>;
}

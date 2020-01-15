/**
 * 设置 cookie
 * @param {string} domain  作用域名
 * @param {string} path    作用路径
 * @param {string} expires 过期时间
 */
interface Attributes {
    domain?: string;
    expires?: string | number;
    path?: string;
}
export default class Cookie {
    /**
     * 设置cookie。
     *
     * @param  {string} key     键名
     * @param  {string} value   键值
     * @param  {Attributes} attr  可选 cookie的配置项
     */
    set(key: string, value: string, attr?: Attributes): Error | void;
    /**
     * 根据key 获取cookie值
     * @param  {string} key     键名
     * @return {string}        cookie值
     */
    get(key: string): string;
    /**
     * 根据 key 查询是否有该 cookie
     * @param {string} key cookie 的键值
     *
     */
    includes(key: string): boolean;
    /**
     * 删除的cookie的域和路径，Cookie域和路径要一样才能被覆盖。否则无法清除
     * @param {string} key cookie 的键值
     * @param {Attributes} attr 可选 cookie的配置项
     */
    clear(key: string, attr?: Attributes): void;
}
export {};

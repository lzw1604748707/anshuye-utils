"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var array_1 = __importDefault(require("./array"));
var arrayUtils = new array_1.default();
var OjbectUtils = /** @class */ (function () {
    function OjbectUtils() {
    }
    /**
     *检测对象是否为一个安全对象，不是则返回空对象
     * @param obj  检测对象
     */
    OjbectUtils.prototype.safeObject = function (obj) {
        return this.isVaildObject(obj) ? obj : {};
    };
    /**
     *检测对象是否为空
     * true条件(一定为对象，且是空对象)
     * @param obj  检测对象
     */
    OjbectUtils.prototype.isEmptyObject = function (obj) {
        return typeof obj === 'object' && !Array.isArray(obj) && !Object.keys(obj).length;
    };
    /**
     * 检验一个数组是否为有效对象。
     * true条件(一定为对象，且不是空对象)
     * @param  {any} obj   数据源
     */
    OjbectUtils.prototype.isVaildObject = function (obj) {
        return typeof obj === 'object' && !Array.isArray(obj) && !!Object.keys(obj).length;
    };
    /**
     *初始化单层对象的属性
     * @param obj  源对象
     */
    OjbectUtils.prototype.initPropertyValue = function (obj) {
        obj = this.safeObject(obj);
        var typeInitMap = { object: {}, string: '', number: 0 };
        for (var key in obj) {
            obj[key] = Array.isArray(obj[key]) ? [] : typeInitMap[typeof obj[key]];
        }
        return obj;
    };
    /**
     *清空单层对象的无有效值的属性
     * @param obj  源对象
     */
    OjbectUtils.prototype.clearInvalidProperty = function (obj) {
        obj = this.safeObject(obj);
        for (var key in obj) {
            if ((typeof obj[key] !== 'boolean' && !obj[key] && obj[key] !== 0) ||
                this.isEmptyObject(obj[key]) ||
                arrayUtils.isEmptyArray(obj[key])) {
                delete obj[key];
            }
        }
        return obj;
    };
    /**
     * 根据 keys 筛选对象
     * @param obj 原对象
     * @param keys 字符串时以空格隔开，也可以直接传字符串数组
     * @returns ret 过滤后的字符串
     */
    OjbectUtils.prototype.only = function (obj, keys) {
        obj = obj || {};
        if ('string' == typeof keys)
            keys = keys.split(/ +/);
        return keys.reduce(function (ret, key) {
            if (null == obj[key])
                return ret;
            ret[key] = obj[key];
            return ret;
        }, {});
    };
    return OjbectUtils;
}());
exports.default = OjbectUtils;

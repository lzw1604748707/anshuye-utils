"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var object_1 = __importDefault(require("./object"));
var ojbectUtils = new object_1.default();
var Cookie = /** @class */ (function () {
    function Cookie() {
    }
    /**
     * 设置cookie。
     *
     * @param  {string} key     键名
     * @param  {string} value   键值
     * @param  {Attributes} attr  可选 cookie的配置项
     */
    Cookie.prototype.set = function (key, value, attr) {
        if (attr === void 0) { attr = {}; }
        if (!key)
            return new Error('key is invalid');
        document.cookie = key + "=" + value + ";domain=" + (attr.domain ||
            '') + ";expires=" + (attr.expires || '') + ";path=" + (attr.path || '/') + ";";
    };
    /**
     * 根据key 获取cookie值
     * @param  {string} key     键名
     * @return {string}        cookie值
     */
    Cookie.prototype.get = function (key) {
        var cookieList = document.cookie.split(';');
        var value = '';
        cookieList.some(function (cookie) {
            var _a = cookie.split('='), cookieKey = _a[0], cookieValue = _a[1];
            if (cookieKey.trim() === key)
                value = cookieValue;
            return cookieKey === key;
        });
        return value;
    };
    /**
     * 根据 key 查询是否有该 cookie
     * @param {string} key cookie 的键值
     *
     */
    Cookie.prototype.includes = function (key) {
        var cookieList = document.cookie.split(';');
        return cookieList.some(function (cookie) {
            var _a = cookie.split('='), cookieKey = _a[0], cookieValue = _a[1];
            return cookieKey.trim() === key;
        });
    };
    /**
     * 删除的cookie的域和路径，Cookie域和路径要一样才能被覆盖。否则无法清除
     * @param {string} key cookie 的键值
     * @param {Attributes} attr 可选 cookie的配置项
     */
    Cookie.prototype.clear = function (key, attr) {
        var option = {
            domain: '',
            path: '/',
            expires: moment_1.default()
                .subtract(1, 'days')
                .toDate()
                .toUTCString()
        };
        option = __assign(__assign({}, ojbectUtils.safeObject(attr)), option);
        this.set(key, '', option);
    };
    return Cookie;
}());
exports.default = Cookie;

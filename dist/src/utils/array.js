"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    /**
     * 检测是否为一个安全数组,若不是返回空数组
     * @param  {any} array   数据源
     */
    ArrayUtils.prototype.safeArray = function (array) {
        return Array.isArray(array) ? array : [];
    };
    /**
     * 检验一个数组是非为空。
     * true条件(一定为数组，且是空数组)
     * @param  {any} array   数据源
     */
    ArrayUtils.prototype.isEmptyArray = function (array) {
        return Array.isArray(array) && !array.length;
    };
    /**
     * 检验一个数组是否为有效数组。
     * true条件(一定为数组，且数组内有值)
     * @param  {any} array   数据源
     */
    ArrayUtils.prototype.isValidArray = function (array) {
        return Array.isArray(array) && !!array.length;
    };
    /**
     * 按间隔分割数组，返回的结果是二维数组，包含拆分后生成的数组。
     * @param  {Array} array   数据源
     * @param  {Number} length 拆分间隔
     */
    ArrayUtils.prototype.splitArray = function (array, length) {
        var resultList = [];
        for (var i = 0, len = array.length; i < len; i += length) {
            resultList.push(array.slice(i, i + length));
        }
        return resultList;
    };
    /**
     * 将根据key值获取对象数组中的对应的键值组成数组，若key是数组，则根据key中的值重新组装对象数组
     * @param  {T[]} list   原对象数组
     * @param  {K|K[]} key key值或key数组
     */
    ArrayUtils.prototype.getKeysList = function (list, key) {
        var result = [];
        list.forEach(function (item) {
            var temp = {};
            if (Array.isArray(key)) {
                key.forEach(function (key) {
                    temp[key] = item[key];
                });
                result.push(temp);
            }
            else {
                result.push(item[key]);
            }
        });
        return result;
    };
    /**
     *按下标交换数组项
     * @param {Array} array 需要修改的数组
     * @param {Number} indexFirst 第一个下标
     * @param {Number} indexLast  第二个下标
     */
    ArrayUtils.prototype.arrayItemSwap = function (array, sourceIndex, targetIndex) {
        if (!array[sourceIndex])
            return new Error('源下标不存在！');
        if (!array[targetIndex])
            return new Error('目标下标不存在！');
        var flag = array.splice(targetIndex, 1, array[sourceIndex]);
        array.splice(sourceIndex, 1, flag[0]);
        return array;
    };
    /**
     * 数组去重,如果传key则根据对应key的value值去除重复,不支持直接对比引用类型
     * @param {Array<T>} list 需要判断的数组
     * @param {K} key 需要对比的键名
     */
    ArrayUtils.prototype.filterDuplicate = function (list, key) {
        var length = list.length;
        var listSet = new Set();
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            listSet.add(item[key] || item);
        }
        if (key) {
            return list.filter(function (item) {
                var flag = listSet.has(item[key]);
                listSet.delete(item[key]);
                return flag;
            });
        }
        else {
            return Array.from(listSet);
        }
    };
    /**
     * 树形重组，将树形结构的所有节点平行重组成普通数组
     * @param {Array} tree 需要重组的树状结构
     */
    ArrayUtils.prototype.treeToList = function (tree) {
        var queen = [];
        var out = [];
        queen = queen.concat(tree);
        while (queen.length) {
            var first = queen.shift();
            if (first.children) {
                queen = queen.concat(first.children);
                delete first['children'];
            }
            out.push(first);
        }
        return out;
    };
    return ArrayUtils;
}());
exports.default = ArrayUtils;

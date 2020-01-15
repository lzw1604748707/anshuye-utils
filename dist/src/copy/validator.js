"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidatorUtils = /** @class */ (function () {
    function ValidatorUtils() {
    }
    /**
     * 验证是否为手机号码
     * @param phoneNumber 检测的字符串
     */
    ValidatorUtils.prototype.isMobilePhone = function (phoneNumber) {
        return ValidatorUtils.REGEXP_PHONE_NUMBER.test(phoneNumber);
    };
    /**
     * 车牌号验证
     * @param  license  检测的字符串
     */
    ValidatorUtils.prototype.isLicense = function (license) {
        return ValidatorUtils.REGEXP_LICENSE_PLATE.test(license);
    };
    /**
     * 判断身份证号是否有效
     * @param {String} id 身份证号
     */
    ValidatorUtils.prototype.isValidID = function (id) {
        console.log('in isValidID code=' + id);
        var city = {
            11: '北京',
            12: '天津',
            13: '河北',
            14: '山西',
            15: '内蒙古',
            21: '辽宁',
            22: '吉林',
            23: '黑龙江 ',
            31: '上海',
            32: '江苏',
            33: '浙江',
            34: '安徽',
            35: '福建',
            36: '江西',
            37: '山东',
            41: '河南',
            42: '湖北 ',
            43: '湖南',
            44: '广东',
            45: '广西',
            46: '海南',
            50: '重庆',
            51: '四川',
            52: '贵州',
            53: '云南',
            54: '西藏 ',
            61: '陕西',
            62: '甘肃',
            63: '青海',
            64: '宁夏',
            65: '新疆',
            71: '台湾',
            81: '香港',
            82: '澳门',
            91: '国外'
        };
        if (city[id.substring(0, 2)]) {
            if (ValidatorUtils.REGEXP_ID_CARD.test(id)) {
                // 18位身份证需要验证最后一位校验位
                var idWordsList = id.split('');
                // ∑(ai×Wi)(mod 11)
                // 加权因子
                var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                // 校验位
                var parity = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
                var sum = 0;
                for (var i = 0; i < 17; i++) {
                    sum += idWordsList[i] * factor[i];
                }
                if (parity[sum % 11] === idWordsList[17]) {
                    return true;
                }
                else {
                    // tip = '校验位错误'
                    console.log('in isValidID 校验位错误');
                    return false;
                }
            }
            else {
                console.log('身份证号格式错误');
                return false;
            }
        }
        else {
            console.log('in isValidID 地址编码错误');
            return false;
        }
    };
    /**
     * 经纬度验证
     * @param  coords 经纬度
     */
    ValidatorUtils.prototype.isCoords = function (coords) {
        var list = coords.split(',');
        return (ValidatorUtils.REGEXP_LONGITUDE.test(list[0]) &&
            ValidatorUtils.REGEXP_LATITUDE.test(list[1]));
    };
    // 手机号正则
    ValidatorUtils.REGEXP_PHONE_NUMBER = /^(\+?0?86-?)?1[3456789]\d{9}$/;
    // 车牌正则
    ValidatorUtils.REGEXP_LICENSE_PLATE = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
    // 身份证正则
    ValidatorUtils.REGEXP_ID_CARD = /^\d{6}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i;
    // 经度正则
    ValidatorUtils.REGEXP_LONGITUDE = /^-?(((1?[0-7]?[0-9]?)|(0?[0-9]?[0-9]))(([.][0-9]{3,6})?)|180(([.][0]{3,6})?))$/;
    // 维度正则
    ValidatorUtils.REGEXP_LATITUDE = /^-?((0|[1-8]?[0-9]?)(([.][0-9]{3,6})?)|90(([.][0]{3,6})?))$/;
    return ValidatorUtils;
}());
exports.default = ValidatorUtils;

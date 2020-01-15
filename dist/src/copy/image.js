"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageUtils = /** @class */ (function () {
    function ImageUtils() {
        this.oscdnDomain = 'static.weixiaotong.com.cn';
        this.imgThumbnailParam80 = '?x-oss-process=image/resize,m_fill,h_80,w_80';
        this.imgThumbnailParam120 = '@120w_120h_1e_0c_0i_60Q_1x_1o.src';
        this.imgThumbnailParam160 = '?x-oss-process=image/resize,m_fill,h_160,w_160';
        this.imgThumbnailParam320 = '@320w_320h_1e_0c_0i_70Q_1x_1o.src';
        this.imgThumbnailParam375 = '@375w_375h_1e_0c_0i_60Q_1x_1o.src';
        this.imgThumbnailParamRadius50 = '@100-1ci.src';
    }
    /**
     * 检验url是否包含公司域名
     * @param {string} url 检测的url
     * @return {Boolean}   是否包含
     */
    ImageUtils.prototype.checkUrl = function (url) {
        return !!url && url.includes(this.oscdnDomain) && !url.includes('@');
    };
    /**
     * 检验image 对象的分辨率
     * @param {Image} img 传入image 对象
     * @param {Array} resolution 分辨率数组 [长度(width),宽度(height)]
     */
    ImageUtils.prototype.checkResolution = function (img, resolution) {
        return (!!img &&
            !!img.src &&
            resolution.length === 2 &&
            img.width === resolution[0] &&
            img.height === resolution[1]);
    };
    /**
     * 检测图片地址是否支持压缩
     * @param {string} url 图片地址
     */
    ImageUtils.prototype.isSupportCompress = function (url) {
        return ['svg', 'webp'].some(function (unit) { return url.endsWith(unit); });
    };
    /**
     * 阿里云 OSS 图片处理服务
     * @param {string} url 图片地址
     * @param {w宽,g高,q质量(0-100)}
     */
    ImageUtils.prototype.compressImage = function (url, _a) {
        var _b = _a.w, w = _b === void 0 ? 320 : _b, _c = _a.h, h = _c === void 0 ? 320 : _c, _d = _a.q, q = _d === void 0 ? 70 : _d;
        var flag = this.isSupportCompress(url) && this.checkUrl(url);
        return url + (flag ? "@" + w + "w_" + h + "h_1e_0c_0i_" + q + "Q_1x_1o.src" : '');
    };
    /**
     * 图片压缩相对比
     * @param {string} url 要压缩的图片地址
     * @param {number} aspectValue 压缩比值
     * @return {string} 预压缩地址
     */
    ImageUtils.prototype.compressImageByImgParam = function (url, aspectValue) {
        if (aspectValue === void 0) { aspectValue = 120; }
        var imgParam = 'imgThumbnailParam' + aspectValue;
        var flag = this.isSupportCompress(url) && this.checkUrl(url);
        return url + (flag ? this[imgParam] : '');
    };
    /**
     * 图片加水印
     * @param {string} url 要加水印的图片地址
     * @param {string} watermark 阿里云特定水印代码（需要后台配置）
     */
    ImageUtils.prototype.addWatermark = function (url, watermark) {
        return watermark ? "" + url + (url.includes('@') ? '|' : '@') + watermark : url;
    };
    return ImageUtils;
}());
exports.default = ImageUtils;

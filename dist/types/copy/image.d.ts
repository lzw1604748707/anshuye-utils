export default class ImageUtils {
    private oscdnDomain;
    imgThumbnailParam80: string;
    imgThumbnailParam120: string;
    imgThumbnailParam160: string;
    imgThumbnailParam320: string;
    imgThumbnailParam375: string;
    imgThumbnailParamRadius50: string;
    /**
     * 检验url是否包含公司域名
     * @param {string} url 检测的url
     * @return {Boolean}   是否包含
     */
    private checkUrl;
    /**
     * 检验image 对象的分辨率
     * @param {Image} img 传入image 对象
     * @param {Array} resolution 分辨率数组 [长度(width),宽度(height)]
     */
    checkResolution(img: HTMLImageElement, resolution: number[] | string[]): boolean;
    /**
     * 检测图片地址是否支持压缩
     * @param {string} url 图片地址
     */
    isSupportCompress(url: string): boolean;
    /**
     * 阿里云 OSS 图片处理服务
     * @param {string} url 图片地址
     * @param {w宽,g高,q质量(0-100)}
     */
    compressImage(url: string, { w, h, q }: {
        w?: number | undefined;
        h?: number | undefined;
        q?: number | undefined;
    }): string;
    /**
     * 图片压缩相对比
     * @param {string} url 要压缩的图片地址
     * @param {number} aspectValue 压缩比值
     * @return {string} 预压缩地址
     */
    compressImageByImgParam(url: string, aspectValue?: 80 | 120 | 160 | 320 | 375 | 'Radius50'): string;
    /**
     * 图片加水印
     * @param {string} url 要加水印的图片地址
     * @param {string} watermark 阿里云特定水印代码（需要后台配置）
     */
    addWatermark(url: string, watermark: string): string;
}

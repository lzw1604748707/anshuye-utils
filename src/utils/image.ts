export default class ImageUtils {
  private oscdnDomain = 'static.weixiaotong.com.cn'
  public imgThumbnailParam80 = '?x-oss-process=image/resize,m_fill,h_80,w_80'
  public imgThumbnailParam120 = '@120w_120h_1e_0c_0i_60Q_1x_1o.src'
  public imgThumbnailParam160 = '?x-oss-process=image/resize,m_fill,h_160,w_160'
  public imgThumbnailParam320 = '@320w_320h_1e_0c_0i_70Q_1x_1o.src'
  public imgThumbnailParam375 = '@375w_375h_1e_0c_0i_60Q_1x_1o.src'
  public imgThumbnailParamRadius50 = '@100-1ci.src'

  /**
   * 检验url是否包含公司域名
   * @param {string} url 检测的url
   * @return {Boolean}   是否包含
   */
  private checkUrl(url: string): boolean {
    return !!url && url.includes(this.oscdnDomain) && !url.includes('@')
  }

  /**
   * 检验image 对象的分辨率
   * @param {Image} img 传入image 对象
   * @param {Array} resolution 分辨率数组 [长度(width),宽度(height)]
   */
  public checkResolution(
    img: HTMLImageElement,
    resolution: number[] | string[]
  ): boolean {
    return (
      !!img &&
      !!img.src &&
      resolution.length === 2 &&
      img.width === resolution[0] &&
      img.height === resolution[1]
    )
  }
  /**
   * 检测图片地址是否支持压缩
   * @param {string} url 图片地址
   */
  public isSupportCompress(url: string): boolean {
    return ['svg', 'webp'].some(unit => url.endsWith(unit))
  }
  /**
   * 阿里云 OSS 图片处理服务
   * @param {string} url 图片地址
   * @param {w宽,g高,q质量(0-100)}
   */
  public compressImage(url: string, {w = 320, h = 320, q = 70}): string {
    const flag = this.isSupportCompress(url) && this.checkUrl(url)
    return url + (flag ? `@${w}w_${h}h_1e_0c_0i_${q}Q_1x_1o.src` : '')
  }
  /**
   * 图片压缩相对比
   * @param {string} url 要压缩的图片地址
   * @param {number} aspectValue 压缩比值
   * @return {string} 预压缩地址
   */
  public compressImageByImgParam(
    url: string,
    aspectValue: 80 | 120 | 160 | 320 | 375 | 'Radius50' = 120
  ): string {
    const imgParam = 'imgThumbnailParam' + aspectValue
    const flag = this.isSupportCompress(url) && this.checkUrl(url)
    return url + (flag ? this[imgParam as ImgParamType] : '')
  }

  /**
   * 图片加水印
   * @param {string} url 要加水印的图片地址
   * @param {string} watermark 阿里云特定水印代码（需要后台配置）
   */
  public addWatermark(url: string, watermark: string): string {
    return watermark ? `${url}${url.includes('@') ? '|' : '@'}${watermark}` : url
  }
}

type ImgParamType =
  | 'imgThumbnailParam80'
  | 'imgThumbnailParam120'
  | 'imgThumbnailParam160'
  | 'imgThumbnailParam320'
  | 'imgThumbnailParam375'
  | 'imgThumbnailParamRadius50'

export default class ValidatorUtils {
    private static REGEXP_PHONE_NUMBER;
    private static REGEXP_LICENSE_PLATE;
    private static REGEXP_ID_CARD;
    private static REGEXP_LONGITUDE;
    private static REGEXP_LATITUDE;
    /**
     * 验证是否为手机号码
     * @param phoneNumber 检测的字符串
     */
    isMobilePhone(phoneNumber: string): boolean;
    /**
     * 车牌号验证
     * @param  license  检测的字符串
     */
    isLicense(license: string): boolean;
    /**
     * 判断身份证号是否有效
     * @param {String} id 身份证号
     */
    isValidID(id: string): boolean;
    /**
     * 经纬度验证
     * @param  coords 经纬度
     */
    isCoords(coords: string): boolean;
}

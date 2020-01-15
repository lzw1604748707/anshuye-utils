export default class FileUtils {
    /**
     * file 对象转 image 对象
     * @param {Blob} file 文件对象
     * @return {Promise}  一个携带返回值的promise对象
     */
    fileToImage(file: Blob): Promise<any>;
    /**
     * base64转 Uint8Array对象
     * @param {string} dataUrl base64字符串
     */
    dataUrlToUint8Array(dataUrl: string): {
        uint8arr: Uint8Array;
        type: string;
    };
    /**
     * base64转 Blob对象
     * @param {string} dataUrl base64字符串
     */
    dataUrlToBlob(dataUrl: string): Blob;
    /**
     * base64转 File对象
     * @param {string} dataUrl base64字符串
     * @param {string} fileName 文件名称
     */
    dataUrlToFile(dataUrl: string, fileName?: string): File;
    /**
     * 根据url地址下载，并指定文件名
     * @param {string} url 下载源地址
     * @param {string} name 保存名称
     */
    download(url: string, name: string): void;
}

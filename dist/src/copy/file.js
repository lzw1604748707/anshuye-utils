"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var file_saver_1 = __importDefault(require("file-saver"));
var FileUtils = /** @class */ (function () {
    function FileUtils() {
    }
    /**
     * file 对象转 image 对象
     * @param {Blob} file 文件对象
     * @return {Promise}  一个携带返回值的promise对象
     */
    FileUtils.prototype.fileToImage = function (file) {
        return new Promise(function (resolve, reject) {
            var read = new FileReader();
            read.readAsDataURL(file);
            read.onload = function () {
                var url = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    url[_i] = arguments[_i];
                }
                var img = new Image();
                img.src = url[0].target.result;
                img.onload = function () {
                    var param = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        param[_i] = arguments[_i];
                    }
                    resolve(param[0].path[0]);
                };
                img.onerror = function () {
                    var error = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        error[_i] = arguments[_i];
                    }
                    console.log('图片读取失败');
                    reject(error);
                };
            };
            read.onerror = function () {
                var res = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    res[_i] = arguments[_i];
                }
                console.log('文件读取失败');
                reject(res);
            };
        });
    };
    /**
     * base64转 Uint8Array对象
     * @param {string} dataUrl base64字符串
     */
    FileUtils.prototype.dataUrlToUint8Array = function (dataUrl) {
        var array = dataUrl.split(',');
        var mime = array[0].match(/:(.*?);/)[1];
        //对base-64编码字符串解码
        var decodedData = atob(array[1]);
        var length = decodedData.length;
        var u8arr = new Uint8Array(length);
        while (length--) {
            u8arr[length] = decodedData.charCodeAt(length);
        }
        return { uint8arr: u8arr, type: mime };
    };
    /**
     * base64转 Blob对象
     * @param {string} dataUrl base64字符串
     */
    FileUtils.prototype.dataUrlToBlob = function (dataUrl) {
        var _a = this.dataUrlToUint8Array(dataUrl), uint8arr = _a.uint8arr, type = _a.type;
        return new Blob([uint8arr], { type: type });
    };
    /**
     * base64转 File对象
     * @param {string} dataUrl base64字符串
     * @param {string} fileName 文件名称
     */
    FileUtils.prototype.dataUrlToFile = function (dataUrl, fileName) {
        if (fileName === void 0) { fileName = 'file'; }
        var _a = this.dataUrlToUint8Array(dataUrl), uint8arr = _a.uint8arr, type = _a.type;
        return new File([uint8arr], fileName, { type: type });
    };
    /**
     * 根据url地址下载，并指定文件名
     * @param {string} url 下载源地址
     * @param {string} name 保存名称
     */
    FileUtils.prototype.download = function (url, name) {
        var xhr = new XMLHttpRequest();
        url = url.replace('http:', '');
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.setRequestHeader('Authorization', 'Basic a2VybWl0Omtlcm1pdA==');
        xhr.onload = function () {
            if (xhr.status === 200) {
                // 将图片文件用浏览器中下载
                file_saver_1.default.saveAs(xhr.response, name || '');
                // 将图片信息放到Img中
                console.log(window.URL.createObjectURL(xhr.response));
            }
        };
        xhr.send();
    };
    return FileUtils;
}());
exports.default = FileUtils;

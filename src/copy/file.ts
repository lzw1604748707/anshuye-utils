import FileSaver from 'file-saver'
export default class FileUtils {
  /**
   * file 对象转 image 对象
   * @param {Blob} file 文件对象
   * @return {Promise}  一个携带返回值的promise对象
   */
  public fileToImage(file: Blob): Promise<any> {
    return new Promise((resolve, reject) => {
      const read = new FileReader()
      read.readAsDataURL(file)
      read.onload = (...url: any[]) => {
        const img = new Image()
        img.src = url[0].target.result
        img.onload = (...param: any[]) => {
          resolve(param[0].path[0])
        }
        img.onerror = (...error) => {
          console.log('图片读取失败')
          reject(error)
        }
      }
      read.onerror = (...res) => {
        console.log('文件读取失败')
        reject(res)
      }
    })
  }

  /**
   * base64转 Uint8Array对象
   * @param {string} dataUrl base64字符串
   */
  public dataUrlToUint8Array(dataUrl: string): {uint8arr: Uint8Array; type: string} {
    const array: any[] = dataUrl.split(',')
    const mime = array[0].match(/:(.*?);/)[1]
    //对base-64编码字符串解码
    const decodedData = atob(array[1])
    let length = decodedData.length
    const u8arr = new Uint8Array(length)
    while (length--) {
      u8arr[length] = decodedData.charCodeAt(length)
    }
    return {uint8arr: u8arr, type: mime}
  }

  /**
   * base64转 Blob对象
   * @param {string} dataUrl base64字符串
   */
  public dataUrlToBlob(dataUrl: string): Blob {
    const {uint8arr, type} = this.dataUrlToUint8Array(dataUrl)
    return new Blob([uint8arr], {type: type})
  }

  /**
   * base64转 File对象
   * @param {string} dataUrl base64字符串
   * @param {string} fileName 文件名称
   */
  public dataUrlToFile(dataUrl: string, fileName: string = 'file'): File {
    const {uint8arr, type} = this.dataUrlToUint8Array(dataUrl)
    return new File([uint8arr], fileName, {type: type})
  }

  /**
   * 根据url地址下载，并指定文件名
   * @param {string} url 下载源地址
   * @param {string} name 保存名称
   */
  public download(url: string, name: string) {
    const xhr = new XMLHttpRequest()
    url = url.replace('http:', '')
    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
    xhr.setRequestHeader('Authorization', 'Basic a2VybWl0Omtlcm1pdA==')
    xhr.onload = () => {
      if (xhr.status === 200) {
        // 将图片文件用浏览器中下载
        FileSaver.saveAs(xhr.response, name || '')
        // 将图片信息放到Img中
        console.log(window.URL.createObjectURL(xhr.response))
      }
    }
    xhr.send()
  }
}

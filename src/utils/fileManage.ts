import fs from 'fs'
import path from 'path'
export default class FileManageUtils {
  /**
   * 扁平化文件目录
   * @param dir  文件目录地址
   * @param encode  文件目录编码
   */
  public flatDirList(dir: fs.PathLike, encode = 'utf-8'): string[] {
    let fileUrlList: string[] = []
    const fileList = fs.readdirSync(dir, encode)
    fileList.forEach((file: string | Buffer) => {
      const fileUrl = dir + '' + file
      const stats = fs.lstatSync(fileUrl)
      if (stats.isDirectory()) {
        const childrenFileUrlList = this.flatDirList(fileUrl + '/')
        fileUrlList = [...fileUrlList, ...childrenFileUrlList]
      } else {
        fileUrlList.push(fileUrl)
      }
    })
    return fileUrlList
  }
  /**
   * 根据文件地址动态加载模块
   * @param fileUrl  文件地址
   */
  public async loadSingleModule(fileUrl: string) {
    const name = path.basename(fileUrl).split('.')[0]
    const module = await import(fileUrl)
    return {name, module}
  }

  /**
   * 读取文件目录中的所有模块
   * @param dir  文件目录
   * @param encode  目录编码
   */
  public async loadMultipleModule(dir: fs.PathLike, encode = 'utf-8') {
    let moduleList = []
    const fileUrlList = this.flatDirList(dir, encode)
    for (const url of fileUrlList) {
      const module = await this.loadSingleModule(url)
      moduleList.push(module)
    }
    return moduleList
  }
}

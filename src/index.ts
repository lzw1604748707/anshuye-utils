// 工具类引入
import FileManageUtils from './utils/fileManage'
export const fileManageUtils = new FileManageUtils()
const utilsMap: Record<string, any> = {}
fileManageUtils.loadMultipleModule(__dirname + 'utils/').then(utilsList => {
  utilsList.forEach(utils => {
    utilsMap[utils[name]] = new utils.module()
  })
})
export default utilsMap

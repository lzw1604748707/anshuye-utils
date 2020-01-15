import utilsMap from '../src/index'

function change(str: string | any[]): any[] | any {
  return str
}
export function add() {
  const {arrayUtils} = utilsMap
  console.log('是否为空', arrayUtils.isEmptyArray([]))
  return false
}

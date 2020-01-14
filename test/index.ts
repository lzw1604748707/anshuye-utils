import {arrayUtils, assistUtils} from '../src/index'

function change(str: string | any[]): any[] | any {
  return str
}
export function add() {
  let tree = [
    {
      id: 1,
      name: 'A',
      children: [
        {id: 11, name: 'AA'},
        {id: 12, name: 'AB'},
        {id: 13, name: 'AC'}
      ]
    },
    {
      id: 2,
      name: 'B',
      children: [
        {id: 21, name: 'BA'},
        {id: 22, name: 'BB'},
        {id: 23, name: 'BC'}
      ]
    }
  ]
  console.log(arrayUtils.treeToList(tree))
  return arrayUtils.isEmptyArray([])
}

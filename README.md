# 自用项目使用,公用度有限

# Installing

## yarn

`$ yarn add eucalyptus-utils`

# Using

- commonjs

`const {arrayUtils,...className} = require('eucalyptus-utils');`

- es6、ts

`import {arrayUtils,...className} from 'eucalyptus-utils'`

# Utils

- [arrayUtils 类 **（数组操作）**](#arrayutils-类)
- [objectUtils 类 **（对象操作）**](#objectutils-类)
- [assistUtils 类 **（辅助开发）** ](#assistutils-类)
- [cookie 类 **（cookie）**](#cookie-类)
- [fileUtils 类 **（文件处理）**](#fileutils-类)
- [randomUtils 类 **（随机生成）**](#randomutils-类)
- [transformUtils 类 **（转换处理）**](#transformutils-类)
- [validatorUtils 类 **（验证器）**](#validatorutils-类)

## arrayUtils 类

| 方法                                    | 描述                                                                                              |
| --------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [**safeArray**](#safearray)             | 检测是否为一个安全数组,若不是返回空数组                                                           |
| [**isEmptyArray**](#isemptyarray)       | 检验一个数组是否为空数组。                                                                        |
| [**isVaildArray**](#isvaildarray)       | 检验一个数组是否为有效数组（非空数组）。                                                          |
| [**splitArray**](#splitarray)           | 将根据设置的 length 将一个数组拆分成多个数组。                                                    |
| [**getKeysList**](#getkeyslist)         | 将根据 key 值获取对象数组中的对应的键值组成数组，若 key 是数组，则根据 key 中的值重新组装对象数组 |
| [**arrayItemSwap**](#arrayitemswap)     | 按下标交换数组项位置                                                                              |
| [**filterDuplicate**](#filterduplicate) | 数组去重,如果传 key 则根据对应 key 的 value 值去除重复,不支持直接对比引用类型                     |
| [**treeToList**](#treetolist)           | 树形重组，将树形结构的所有节点平行重组成普通数组                                                  |

<hr>

### safeArray

`safeArray()` 检测是否为一个安全数组,若不是返回空数组。

```javascript
arrayUtils.safeArray(['1']) // expected output: ['1']
arrayUtils.safeArray('') // expected output: []
arrayUtils.safeArray(null) // expected output: []
arrayUtils.safeArray(undefined) // expected output: []
arrayUtils.safeArray({}) // expected output: []
```

**语法**

> **let newArray=arrayUtils.safeArray(value)**

**参数**

`value` : `必选` <br>
要检测的对象

**返回值**

如果对象是一个非空数组，则原数据返回; 否则为返回`[]` 。

<hr>

### isEmptyArray

`isEmptyArray()` 用于检验一个数组是否为空数组。

```javascript
arrayUtils.isEmptyArray(['1']) // expected output: false
arrayUtils.isEmptyArray('') // expected output: false
arrayUtils.isEmptyArray(null) // expected output: false
arrayUtils.isEmptyArray(undefined) // expected output: false
arrayUtils.isEmptyArray([]) // expected output: true
```

**语法**

> **let isEmptyArray=arrayUtils.isEmptyArray(value)**

**参数**

`value` : `必选` <br>
要检测的对象

**返回值**

如果对象是一个空数组，则返回 true; 否则返回 false。

<hr>

### isVaildArray

`isVaildArray()` 用于检验一个数组是否为有效数组（非空数组）。

```javascript
arrayUtils.isVaildArray(['1']) // expected output: true
arrayUtils.isVaildArray('') // expected output: false
arrayUtils.isVaildArray(null) // expected output: false
arrayUtils.isVaildArray(undefined) // expected output: false
arrayUtils.isVaildArray([]) // expected output: false
```

**语法**

> **let isVaildArray=arrayUtils.isVaildArray(value)**

**参数**

`value` : `必选` <br>
要检测的对象

**返回值**

如果对象是一个非空数组，则返回 true; 否则为 false。

<hr>

### splitArray

`splitArray()` 将根据设置的 length 将一个数组拆分成多个数组。

```javascript
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(arrayUtils.splitArray(array, 3))
//expected output:[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 0 ] ]
```

**语法**

> **let newList=arrayUtils.splitArray(array,length)**

**参数**

`array` : `必选` <br>
要分割的数组

`length` : `必选` <br>
要分割的间距

**返回值**

返回的结果是二维数组，包含拆分后生成的数组。

<hr>

### getKeysList

`getKeysList()` 将根据 key 值获取对象数组中的对应的键值组成数组，若 key 是数组，则根据 key 中的值重新组装对象

```javascript
let array = [
  {name: '张三', age: '18', weight: 140},
  {name: '李四', age: '20', weight: 160}
]
console.log(arrayUtils.getKeysList(array, 'name'))
//expected output:[ '张三', '李四' ]

console.log(arrayUtils.getKeysList(array, ['name', 'age']))
//expected output:[ { name: '张三', age: '18' }, { name: '李四', age: '20' } ]
```

**语法**

> **let newList=arrayUtils.getKeysList(list,key)**

**参数**

`list` : `必选` <br>
要分割的对象数组

`length` : `必选` <br>
要获取的 key 值，支持字符串和字符串数组

**返回值**

若 key 是字符串，返回由对应 key 的 value 值所组成的简单数组
若 key 是字符串数组，返回过滤掉不匹配 key 的对象数组

<hr>

### arrayItemSwap

`arrayItemSwap()` 按下标交换数组项

```javascript
let array = [1, 2, 3]
console.log(arrayUtils.arrayItemSwap(array, 0, 1))
//expected output:[ 2, 1, 3 ]
console.log(arrayUtils.arrayItemSwap(array, 3, 0))
//expected error:  源下标不存在！
console.log(arrayUtils.arrayItemSwap(array, 1, 3))
//expected error:目标下标不存在！
```

**语法**

> **let newList=arrayUtils.arrayItemSwap(array,sourceIndex,targetIndex)**

**参数**

`array` : `必选` <br>
要交换位置的数组

`sourceIndex` : `必选` <br>
源数据的索引

`targetIndex` : `必选` <br>
要替换数据的索引

**返回值**

交换位置后的数组

<hr>

### filterDuplicate

`filterDuplicate()` 数组去重,如果是对象类型可以传 key 将会根据对象对应 key 的 value 值去除重复,只会返回第一次出现的对象，不支持直接对比引用类型

```javascript
let array1 = [1, 2, 2, 3, 3]
let array2 = [
  {id: 1, name: '张三'},
  {id: 2, name: '李四'},
  {id: 2, name: '王二'},
  {id: 1, name: '赵五'}
]
console.log(arrayUtils.filterDuplicate(array1))
//expected error:[ 1, 2, 3 ]
console.log(arrayUtils.filterDuplicate(array2, 'id'))
//expected error:[ { id: 1, name: '张三' }, { id: 2, name: '李四' } ]
```

**语法**

> **let newList=arrayUtils.filterDuplicate(array,[key])**

**参数**

`array` : `必选` <br>
要去重的数组

`key` : `可选` <br>
为对象数组时有效，根据 key 值来过滤重复

**返回值**

去重后的数组

<hr>

### treeToList

`treeToList()` 树形重组，将树形结构的所有节点平行重组成普通数组

```javascript
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
/*expected output:
  [{ id: 1, name: 'A' },{ id: 2, name: 'B' },
  { id: 11, name: 'AA' },{ id: 12, name: 'AB' },
  { id: 13, name: 'AC' },{ id: 21, name: 'BA' },
  { id: 22, name: 'BB' },{ id: 23, name: 'BC' }]
*/
```

**语法**

> **let newList=arrayUtils.treeToList(tree)**

**参数**

`tree` : `必选` <br>
要重组的树结构数据

**返回值**

平铺后的树结构数组

## assistUtils 类

| 方法                          | 描述                           |
| ----------------------------- | ------------------------------ |
| [**typeOf**](#typeof)         | 检验详细类型                   |
| [**deepCopy**](#deepcopy)     | 深拷贝                         |
| [**delHtmlTag**](#delhtmltag) | 过滤所有 html 标签和占位符标记 |
| [**debounce**](#debounce)     | 防抖                           |
| [**throttle**](#throttle)     | 节流                           |

<hr>

### typeOf

`typeOf()` 检验详细类型

```javascript
console.log(assistUtils.typeOf('')) // expected output: string
console.log(assistUtils.typeOf(1)) // expected output: number
console.log(assistUtils.typeOf([])) // expected output: array
console.log(assistUtils.typeOf({})) // expected output: object
console.log(assistUtils.typeOf(null)) // expected output: null
console.log(assistUtils.typeOf(undefined)) // expected output: undefined
console.log(assistUtils.typeOf(true)) // expected output: boolean
console.log(assistUtils.typeOf(new Date())) // expected output: date
console.log(assistUtils.typeOf(() => {})) // expected output: function
console.log(assistUtils.typeOf(new RegExp(''))) // expected output: regExp
console.log(assistUtils.typeOf(new Error())) // expected output: error
```

**语法**

> **let isArray=assistUtils.typeOf(value)**

**参数**

`value` : `必选` <br>
要检测的对象

**返回值**

返回一个表示数据对应类型的字符串

<hr>

### deepCopy

`deepCopy()` 深拷贝

```javascript
let arraylist = [
  {id: 1, name: '哈哈'},
  {id: 2, name: '嘻嘻'}
]
let copylist = assistUtils.deepCopy(arraylist)
arraylist.shift()
console.log(arraylist)
// expected output: [ { id: 2, name: '嘻嘻' } ]
console.log(copylist)
// expected output: [ { id: 1, name: '哈哈' }, { id: 2, name: '嘻嘻' } ]
```

**语法**

> **let copylist=assistUtils.deepCopy(value)**

**参数**

`value` : `必选` <br>
要拷贝的对象

**返回值**

返回一个同 value 数据的数据，不受引用类型

<hr>

### delHtmlTag

`delHtmlTag()` 过滤所有 html 标签和占位符标记

```javascript
let textHtml = `<div style="margin:0;">&nbsp；王大锤</div>小锤子`
console.log(assistUtils.delHtmlTag(textHtml)) // expected output: 王大锤小锤子
```

**语法**

> **let isArray=assistUtils.delHtmlTag(value)**

**参数**

`value` : `必选` <br>
要过滤的对象

**返回值**

返回一个过滤后的文本

<hr>

### debounce

`debounce()` 防抖封装方法，传入一个方法，根据配置参数，给这个方法配置相应的防抖属性

```javascript
let nameList = []
let times = 0
const writeMyName = assistsUtils.debounce(() => {
  nameList.push('a')
}, 200)
let myNameInterval = setInterval(() => {
  times++
  writeMyName()
  if (times > 4) {
    clearInterval(myNameInterval)
    myNameInterval = setTimeout(() => {
      times++
      writeMyName()
    }, 210)
    console.log(times)
    //expected output:6
    console.log(nameList)
    //expected output:['a']
  }
}, 50)
```

**语法**

> **const someMethods=assistUtils.debounce(func,wait,option)**

**参数**

`func` : `必选` <br>
要附加防抖功能的方法

`wait` : `可选` <br>
防抖的延时时间（单位:毫秒） 默认为 0

`option` : `可选` 配置项 <br>

- `leading` : `可选` <br>
  指定是否在延迟开始前调用
- `maxWait` : `可选` <br>
  设置被延迟的最大值
- `trailing` : `可选` <br>
  指定是否在延迟开始后调用

**返回值**

返回一个被防抖功能包裹的原方法

<hr>

### throttle

`throttle()` 节流封装方法 传入一个方法，根据配置参数，给这个方法配置相应的防抖属性

```javascript
let nameList = []
let times = 0
const writeMyName = assistsUtils.throttle(() => {
  nameList.push('a')
}, 200)
const myNameInterval = setInterval(() => {
  times++
  writeMyName()
  if (times > 4) {
    clearInterval(myNameInterval)
    console.log(times)
    //expected output:5
    console.log(nameList)
    //expected output:['a']
  }
}, 50)
```

**语法**

> **const someMethods=assistUtils.throttle(func,wait,option)**

**参数**

`func` : `必选` <br>
要附加节流功能的方法

`wait` : `可选` <br>
节流的等待时间（单位:毫秒） 默认为 0

`option` : `可选` 配置项 <br>

- `leading` : `可选` <br>
  指定是否在延迟开始前调用
- `trailing` : `可选` <br>
  指定是否在延迟开始后调用

**返回值**

返回一个被节流功能包裹的原方法

<hr>

## cookie 类

| 方法                      | 描述                                                                    |
| ------------------------- | ----------------------------------------------------------------------- |
| [**set**](#set)           | 设置 cookie                                                             |
| [**get**](#get)           | 根据 key 获取 cookie 值                                                 |
| [**includes**](#includes) | 根据 key 查询 cookie 是否存在                                           |
| [**clear**](#clear)       | 删除的 cookie 的域和路径，Cookie 域和路径要一样才能被覆盖。否则无法清除 |

<hr>

### set

`set()` 设置 cookie

```javascript
cookie.set('UUID', 'abscd', {
  path: '/bugu',
  domain: 'wextong.com',
  expires: 1000
})
let value = cookie.get('UUID')
console.log(value) //expected output:abscd
```

**语法**

> **cookie.set(key,value,[{path,domain,expires})**

**参数**

`key` : `必选` <br>
要绑定 cookie 的 key 值

`value` : `必选` <br>
要绑定 cookie 的 value 值

`path` : `可选` <br>
要绑定 cookie 的作用路径

`domain` : `可选` <br>
要绑定 cookie 的作用域

`expires` : `可选` <br>
要绑定 cookie 的过期时间

<hr>

### get

`get()` 根据 key 获取 cookie 值

```javascript
cookie.set('UUID', 'abscd', {
  path: '/bugu',
  domain: 'wextong.com',
  expires: 1000
})
let value = cookie.get('UUID')
console.log(value) //expected output:abscd
```

**语法**

> **cookie.get(key)**

**参数**

`key` : `必选` <br>
要绑定 cookie 的 key 值

**返回值**

返回 cookie 中对应 key 的 value 值

<hr>

### includes

`includes()` 根据 key 查询是否有该 cookie

```javascript
cookie.set('UUID', 'abscd')
console.log(cookie.includes('UUID')) //expected output:true
cookie.clear('UUID')
console.log(cookie.includes('UUID')) //expected output:false
```

**语法**

> **cookie.includes(key)**

**参数**

`key` : `必选` <br>
要绑定 cookie 的 key 值

**返回值**

如果 cookie 存在则返回 true,否则 false

<hr>

### clear

`clear()` 删除的 cookie 的域和路径，Cookie 域和路径要一样才能被覆盖。否则无法清除

```javascript
cookie.set('UUID', 'abscd')
console.log(cookie.includes('UUID')) //expected output:true
cookie.clear('UUID')
console.log(cookie.includes('UUID')) //expected output:false
```

**语法**

> **cookie.clear(key,[{path,domain,expires}])**

**参数**

`key` : `必选` <br>
要清除 cookie 的 key 值

`path` : `可选` <br>
要清除 cookie 的作用路径

`domain` : `可选` <br>
要清除 cookie 的作用域

`expires` : `可选` <br>
要清除 cookie 的过期时间

<hr>

## objectUtils 类

| 方法                                              | 描述                                         |
| ------------------------------------------------- | -------------------------------------------- |
| [**safeObject**](#safeobject)                     | 检测对象是否为一个安全对象，不是则返回空对象 |
| [**isEmptyObject**](#isemptyobject)               | 检测对象是否为空对象                         |
| [**isVaildObject**](#isvaildobject)               | 检测对象是否为有效对象                       |
| [**initPropertyValue**](#initpropertyvalue)       | 初始化单层对象的属性值                       |
| [**clearInvalidProperty**](#clearinvalidproperty) | 清空单层对象的无有效值的属性                 |

<hr>

### safeObject

`safeObject()` 检测对象是否为一个安全对象，不是则返回空对象

```javascript
ojbectUtils.safeObject(['1']) // expected output: {}
ojbectUtils.safeObject('') // expected output: {}
ojbectUtils.safeObject(null) // expected output: {}
ojbectUtils.safeObject(undefined) // expected output: {}
ojbectUtils.safeObject({name: '张三'}) // expected output: {name:'张三'}
```

**语法**

> **let newObject=ojbectUtils.safeObject(value)**

**参数**

`value` : `必选` <br>
要检测的对象

**返回值**

如果 value 是一个非空对象，则返回原数据，否则返回空对象

<hr>

### isEmptyObject

`isEmptyObject()` 检测是否是空对象

```javascript
ojbectUtils.isEmptyObject({}) // expected output: true
ojbectUtils.isEmptyObject(['1']) // expected output: false
ojbectUtils.isEmptyObject('') // expected output: false
ojbectUtils.isEmptyObject(null) // expected output: false
ojbectUtils.isEmptyObject(undefined) // expected output: false
ojbectUtils.isEmptyObject({name: '张三'}) // expected output: false
```

**语法**

> **let isEmptyObject=ojbectUtils.isEmptyObject(value)**

**参数**

`value` : `必选` <br>
要检测的对象

**返回值**

如果 value 是一个空对象，返回 true,否则返回 false

<hr>

### isValidObject

`isValidObject()` 检测是否是有效对象

```javascript
ojbectUtils.isValidObject({}) // expected output: false
ojbectUtils.isValidObject(['1']) // expected output: false
ojbectUtils.isValidObject('') // expected output: false
ojbectUtils.isValidObject(null) // expected output: false
ojbectUtils.isValidObject(undefined) // expected output: false
ojbectUtils.isValidObject({name: '张三'}) // expected output: true
```

**语法**

> **let isVaildObject=ojbectUtils.isValidObject(value)**

**参数**

`value` : `必选` <br>
要检测的对象

**返回值**

如果 value 是一个有效对象，返回 true,否则返回 false

<hr>

### initPropertyValue

`initPropertyValue()` 初始化单层对象的属性值

```javascript
let object = {name: '张三', age: 18, children: ['baobao'], attr: {a: '1'}}
console.log(ojbectUtils.initPropertyValue(object)) // expected output: { name: '', age: 0, children: [], attr: {} }
console.log(ojbectUtils.initPropertyValue('')) // expected output: {}}
```

**语法**

> **let initObject=ojbectUtils.initPropertyValue(value)**

**参数**

`value` : `必选` <br>
要初始化的对象

**返回值**

返回单层数据清空后的对象

<hr>

### clearInvalidProperty

`clearInvalidProperty()` 清空单层对象的非有效值的属性

```javascript
let object = {name: '张三', age: 0, children: [], attr: {}}
console.log(ojbectUtils.clearInvalidProperty(object)) // expected output: { name: '张三'，age: 0 }
// 清空
// String型: ''
// Number型: NAN
// Array型: []
// Object型: {},undefined,null
```

**语法**

> **let initObject=ojbectUtils.clearInvalidProperty(value)**

**参数**

`value` : `必选` <br>
要处理的对象

**返回值**

返回单层数据清空后的对象

<hr>

## fileUtils 类

| 方法                                            | 描述                                   |
| ----------------------------------------------- | -------------------------------------- |
| [**fileToImage**](#filetoimage)                 | 将一个 file(Blob)对象转 image 对象     |
| [**dataUrlToUint8Array**](#dataurltouint8array) | 将一个 base64 字符串转 Uint8Array 对象 |
| [**dataUrlToBlob**](#dataurltoblob)             | 将一个 base64 字符串转 Blob 对象       |
| [**dataUrlToFile**](#dataurltofile)             | 将一个 base64 字符串转 File 对象       |
| [**download**](#download)                       | 根据 url 地址下载文件，并指定文件名    |

<hr>

### fileToImage

`fileToImage()` 将一个 file(Blob)对象转 image 对象

```javascript
let fileObject={lastModified: 1566264410083,
                lastModifiedDate: Tue Aug 20 2019 09:26:50 GMT+0800 (中国标准时间) {},
                name: "2_171038921b89fac1b07660f3dff66dd5.jpg",
                size: 15304,
                type: "image/jpeg",
                uid: 1571121923148,
                webkitRelativePath: ""}
fileUtils.fileToImage(fileObject) // expected output: {<img src="data:image/jpeg;base64...">}

```

**语法**

> **fileUtils.fileToImage(fileObject).then(res=>{}).catch(err=>{})**

**参数**

`fileObject` : `必选` <br>
用于转换的 Blob 对象

**返回值**

返回一个 Promise 类型，其中成功携带的是转换后的 Img 类型，失败则返回错误信息

<hr>

### dataUrlToUint8Array

`dataUrlToUint8Array()` 将一个 base64 字符串转 Uint8Array 对象

```javascript
let dataUrl =
  'data:image/png;base64,iVBORw0...1FyA6PP+/c05X5qye+kB6QHpgbTzwH/qQ8Z7ou7LmwAAAABJRU5ErkJggg=='
fileUtils.dataUrlToUint8Array(dataUrl) // expected output: {dataUrl:Unit8Array(384967)....}
```

**语法**

> **fileUtils.dataUrlToUint8Array(dataUrl)**

**参数**

`dataUrl` : `必选` <br>
用于转换的 base64 字符串

**返回值**

返回一个 Unit8Array 对象

<hr>

### dataUrlToBlob

`dataUrlToBlob()` 将一个 base64 字符串转 Blob 对象

```javascript
let dataUrl =
  'data:image/png;base64,iVBORw0...1FyA6PP+/c05X5qye+kB6QHpgbTzwH/qQ8Z7ou7LmwAAAABJRU5ErkJggg=='
fileUtils.dataUrlToBlob(dataUrl) // expected output: {size: 633850,type: "image/png"}
```

**语法**

> **fileUtils.dataUrlToBlob(dataUrl)**

**参数**

`dataUrl` : `必选` <br>
用于转换的 base64 字符串

**返回值**

返回一个 Blob 对象

<hr>

### dataUrlToFile

`dataUrlToFile()` 将一个 base64 字符串转 File 对象

```javascript
let dataUrl =
  'data:image/png;base64,iVBORw0...1FyA6PP+/c05X5qye+kB6QHpgbTzwH/qQ8Z7ou7LmwAAAABJRU5ErkJggg=='
console.log(fileUtils.dataUrlToFile(dataUrl, 'a'))
// expected output: {name: "a",lastModified: 1576206385992,
//                  lastModifiedDate: Fri Dec 13 2019 11:06:25 GMT+0800 (中国标准时间) {},
//                  webkitRelativePath: "",
//                  size: 579474,
//                  type: "image/png"}
```

**语法**

> **fileUtils.dataUrlToFile(dataUrl,fileName)**

**参数**

`dataUrl` : `必选` <br>
用于转换的 base64 字符串

`fileName` : `可选` <br>
转换后的 file 的名称，默认为 file

**返回值**

返回一个具有特定名称的 file 对象

<hr>

### download

`download()` 根据 url 地址下载文件，并指定文件名

```javascript
let jpegUrl =
  'https://static.weixiaotong.com.cn/static/icon/appstore/19b16d26102f5594c4bdb5b0cf97594a39c83db1109824-nLfx9K_sq320.jpeg'
let svgUrl = 'https://static.weixiaotong.com.cn/static/icon/appstore/all.svg'
fileUtils.download(jpegUrl, '红色') // expected output:以红色.jpeg 命名将文件下载本地
fileUtils.download(svgUrl, 'noaLL') // expected output:以noaLL.svg 命名将文件下载本地
```

**语法**

> **fileUtils.download(downloadUrl,fileName)**

**参数**

`downloadUrl` : `必选` <br>
下载地址

`fileName` : `可选` <br>
要保存的文件名

**返回值**

无返回，直接调用浏览器下载

<hr>

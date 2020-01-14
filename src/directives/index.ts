export default class Directives {
  public fullScreenDirective = {
    function(el: Element, binding: BindingType) {
      binding.value ? el.requestFullscreen() : document.exitFullscreen()
    }
  }
}
interface BindingType {
  name: string
  value: any
  oldValue: any
  expression: any
  arg: any
  modifiers: any
}

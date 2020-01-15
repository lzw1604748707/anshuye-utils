export default class Directives {
    fullScreenDirective: {
        function(el: Element, binding: BindingType): void;
    };
}
interface BindingType {
    name: string;
    value: any;
    oldValue: any;
    expression: any;
    arg: any;
    modifiers: any;
}
export {};

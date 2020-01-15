"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Directives = /** @class */ (function () {
    function Directives() {
        this.fullScreenDirective = {
            function: function (el, binding) {
                binding.value ? el.requestFullscreen() : document.exitFullscreen();
            }
        };
    }
    return Directives;
}());
exports.default = Directives;

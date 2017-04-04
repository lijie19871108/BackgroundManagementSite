"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HighlightDirective = (function () {
    function HighlightDirective(el) {
        this.colour = 'yellow';
        this.element = el.nativeElement;
    }
    HighlightDirective.prototype.onMouseEnter = function () { this.highlight(this.colour); };
    HighlightDirective.prototype.onMouseLeave = function () { this.highlight(null); };
    HighlightDirective.prototype.highlight = function (color) { this.element.style.backgroundColor = color; };
    return HighlightDirective;
}());
__decorate([
    core_1.Input('myHighlight'),
    __metadata("design:type", String)
], HighlightDirective.prototype, "colour", void 0);
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onMouseLeave", null);
HighlightDirective = __decorate([
    core_1.Directive({
        selector: '[zyfHighlight]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], HighlightDirective);
exports.HighlightDirective = HighlightDirective;
exports.default = HighlightDirective;
//# sourceMappingURL=highlight.directive.js.map
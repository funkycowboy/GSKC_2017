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
var core_1 = require('@angular/core');
var PublicLayoutComponent = (function () {
    function PublicLayoutComponent() {
    }
    PublicLayoutComponent.prototype.ngOnInit = function () {
        $('#ProductSearchButton').click(function () {
            var $this = $(".sidenav");
            if ($this.hasClass("on")) {
                $this.removeClass("on").addClass("off");
            }
            else {
                $this.removeClass("off").addClass("on");
            }
        });
        $('#SlideIndicatorButton').click(function () {
            var $this = $(".sidenav");
            if ($this.hasClass("on")) {
                $this.removeClass("on").addClass("off");
                $this.removeClass("glyphicon-triangle-right").addClass("glyphicon-triangle-left");
            }
            else {
                $this.removeClass("off").addClass("on");
                $this.removeClass("glyphicon-triangle-left").addClass("glyphicon-triangle-right");
            }
        });
        function lockScroll() {
            $(document).bind("touchstart", function (event) {
                event.preventDefault();
            });
            $(document).bind("touchmove", function (event) {
                event.preventDefault();
            });
        }
        function unLockScroll() {
            $(document).unbind("touchstart");
            $(document).unbind("touchmove");
        }
        function changeOrientation(event) {
            $("#landscape").show();
            $("#rotateplease").show();
            if ($(window).width() > $(window).height()) {
                lockScroll();
            }
            else {
                unLockScroll();
            }
        }
        $(window).on("orientationchange", function () {
            changeOrientation(event);
        });
    };
    PublicLayoutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-public-layout',
            templateUrl: 'public-layout.component.html',
            styleUrls: ['public-layout.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PublicLayoutComponent);
    return PublicLayoutComponent;
}());
exports.PublicLayoutComponent = PublicLayoutComponent;
//# sourceMappingURL=public-layout.component.js.map
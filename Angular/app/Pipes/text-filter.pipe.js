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
var TextFilterPipe = (function () {
    function TextFilterPipe() {
    }
    TextFilterPipe.prototype.transform = function (items, args) {
        //if(args[1].toString().length === 0)
        //  return items;
        //return items.filter(item => item[args[0]].indexOf(args[1]) !== -1);
        if (typeof items === 'object') {
            var resultArray = [];
            if (args.length === 0) {
                resultArray = items;
            }
            else {
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var item = items_1[_i];
                    if (item.name != null && item.name.match(new RegExp('' + args, 'i'))) {
                        resultArray.push(item);
                    }
                }
            }
            return resultArray;
        }
        else {
            return null;
        }
    };
    TextFilterPipe = __decorate([
        core_1.Pipe({
            name: 'textfilter'
        }), 
        __metadata('design:paramtypes', [])
    ], TextFilterPipe);
    return TextFilterPipe;
}());
exports.TextFilterPipe = TextFilterPipe;
//# sourceMappingURL=text-filter.pipe.js.map
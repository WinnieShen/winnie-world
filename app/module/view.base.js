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
var router_1 = require('@angular/router');
var restful_service_1 = require('../service/restful.service');
var BaseComponent = (function () {
    function BaseComponent(_router, restfulService) {
        this._router = _router;
        this.restfulService = restfulService;
        this.itemLinks = [];
        this.userInfo = "";
        this.refresh = function () {
            var component = this;
            this.restfulService.listItemLinks(function (res) {
                console.log(res);
                component.itemLinks = res;
            });
            this.restfulService.getUser(function (res) {
                console.log(res);
                component.userInfo = res;
            });
        };
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    ;
    BaseComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: 'views/base.html',
            styleUrls: ['css/style.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, restful_service_1.RestfulService])
    ], BaseComponent);
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=view.base.js.map
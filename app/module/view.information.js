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
var restful_service_1 = require('../service/restful.service');
var app_component_1 = require('../app.component');
var InformationComponent = (function () {
    function InformationComponent(restfulService, parent) {
        this.restfulService = restfulService;
        this.parent = parent;
        this.blogs = [];
        this.article = [];
        this.refresh = function () {
            var component = this;
            this.restfulService.listBlog(function (res) {
                console.log(res);
                component.blogs = res;
            });
        };
    }
    InformationComponent.prototype.ngOnInit = function () {
        // this.parent.setActive(true);
        this.refresh();
    };
    ;
    InformationComponent = __decorate([
        core_1.Component({
            selector: 'app-blog-index',
            templateUrl: "views/blog/blog-index.html"
        }), 
        __metadata('design:paramtypes', [restful_service_1.RestfulService, app_component_1.AppComponent])
    ], InformationComponent);
    return InformationComponent;
}());
exports.InformationComponent = InformationComponent;
//# sourceMappingURL=view.information.js.map
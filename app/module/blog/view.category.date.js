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
var restful_service_1 = require('../../service/restful.service');
var view_blog_1 = require('../view.blog');
var CategoryDateComponent = (function () {
    function CategoryDateComponent(restfulService, parent) {
        this.restfulService = restfulService;
        this.parent = parent;
        this.categoryDates = [];
        this.blogs = [];
        this.refresh = function () {
            var component = this;
            this.restfulService.listCategoryDate(function (res) {
                console.log(res);
                component.categoryDates = res;
            });
            this.restfulService.listBlog(function (res) {
                console.log(res);
                component.blogs = res;
            });
        };
    }
    CategoryDateComponent.prototype.ngOnInit = function () {
        this.parent.setActive(false);
        this.refresh();
    };
    ;
    CategoryDateComponent = __decorate([
        core_1.Component({
            selector: 'app-category-date',
            templateUrl: "views/blog/category-date.html"
        }), 
        __metadata('design:paramtypes', [restful_service_1.RestfulService, view_blog_1.BlogComponent])
    ], CategoryDateComponent);
    return CategoryDateComponent;
}());
exports.CategoryDateComponent = CategoryDateComponent;
//# sourceMappingURL=view.category.date.js.map
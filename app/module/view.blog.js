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
var BlogComponent = (function () {
    function BlogComponent(restfulService) {
        this.restfulService = restfulService;
        this.categoryDetails = [];
        this.comments = [];
        this.homeClass = "";
        this.categoryClass = "";
        this.getCategoryDetail = function () {
            var component = this;
            this.restfulService.listCategoryDetail(function (res) {
                console.log(res);
                component.categoryDetails = res;
            });
        };
        this.getComments = function () {
            var component = this;
            this.restfulService.listComment(function (res) {
                console.log(res);
                component.comments = res;
            });
        };
        this.setActive = function (isHomeActive) {
            if (isHomeActive == true) {
                this.homeClass = "nav-home-page-active";
                this.categoryClass = "nav-category";
            }
            else {
                this.homeClass = "nav-home-page";
                this.categoryClass = "nav-category-active";
            }
        };
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.setActive(true);
        this.getCategoryDetail();
        this.getComments();
    };
    ;
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'app-blog',
            templateUrl: "views/blog/blog-nav.html",
            styleUrls: ['css/blog-style.css']
        }), 
        __metadata('design:paramtypes', [restful_service_1.RestfulService])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=view.blog.js.map
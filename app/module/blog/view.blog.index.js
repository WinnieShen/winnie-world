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
var BlogIndexComponent = (function () {
    function BlogIndexComponent(restfulService, parent) {
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
    BlogIndexComponent.prototype.ngOnInit = function () {
        this.parent.setActive(true);
        this.refresh();
    };
    ;
    BlogIndexComponent = __decorate([
        core_1.Component({
            selector: 'app-blog-index',
            templateUrl: "views/blog/blog-index.html",
            styles: ["\n        article{\n            color: #444444;\n            padding-bottom: 40px;\n            font-family: \"Microsoft YaHei UI\",SimHei,sans-serif;\n            font-size: 14px;\n            letter-spacing: 1px;\n        }\n        .comments-number{\n            float: right;\n            margin-right: 20px;\n        }\n        .read-more{\n            font-family: \"Microsoft YaHei\", sans-serif;\n            color:#6E7173;\n            float: right;\n            margin-right: 10px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [restful_service_1.RestfulService, view_blog_1.BlogComponent])
    ], BlogIndexComponent);
    return BlogIndexComponent;
}());
exports.BlogIndexComponent = BlogIndexComponent;
//# sourceMappingURL=view.blog.index.js.map
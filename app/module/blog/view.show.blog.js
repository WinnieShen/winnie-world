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
var router_1 = require('@angular/router');
require('rxjs/add/operator/switchMap');
var ShowBlogComponent = (function () {
    function ShowBlogComponent(route, restfulService, parent) {
        this.route = route;
        this.restfulService = restfulService;
        this.parent = parent;
        this.article = [];
        this.refresh = function (id) {
            var component = this;
            this.restfulService.showBlogById(id, function (res) {
                console.log(res);
                component.article = res;
            });
        };
    }
    ShowBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parent.setActive(true);
        var id = this.route.params.switchMap(function (params) { return params['id']; }).subscribe(function (x) { return _this.refresh(+x); });
    };
    ;
    ShowBlogComponent = __decorate([
        core_1.Component({
            selector: 'app-show-blog',
            templateUrl: "views/blog/show-blog.html",
            styles: ["\n        .comments-number{\n            float: right;\n            margin-right: 20px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, restful_service_1.RestfulService, view_blog_1.BlogComponent])
    ], ShowBlogComponent);
    return ShowBlogComponent;
}());
exports.ShowBlogComponent = ShowBlogComponent;
//# sourceMappingURL=view.show.blog.js.map
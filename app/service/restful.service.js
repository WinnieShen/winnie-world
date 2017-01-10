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
var mock_data_1 = require('../mock/mock.data');
var RestfulService = (function () {
    function RestfulService(mockData) {
        this.mockData = mockData;
        this.listItemLinks = function (callback) {
            return this.mockData.listItemLinks(callback);
        };
        this.getUser = function (callback) {
            return this.mockData.getUser(callback);
        };
        this.listPhotos = function (callback) {
            return this.mockData.listPhotos(callback);
        };
        this.listBlog = function (callback) {
            return this.mockData.listBlog(callback);
        };
        this.showBlogById = function (id, callback) {
            return this.mockData.showBlogById(id, callback);
        };
        this.listCategoryDate = function (callback) {
            return this.mockData.listCategoryDate(callback);
        };
        this.listCategoryDetail = function (callback) {
            return this.mockData.listCategoryDetail(callback);
        };
        this.listComment = function (callback) {
            return this.mockData.listComment(callback);
        };
    }
    RestfulService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [mock_data_1.MockData])
    ], RestfulService);
    return RestfulService;
}());
exports.RestfulService = RestfulService;
//# sourceMappingURL=restful.service.js.map
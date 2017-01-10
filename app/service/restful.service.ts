import {Injectable } from '@angular/core';
import {MockData} from '../mock/mock.data';

@Injectable()
export class RestfulService {
    constructor (private mockData: MockData) {}
    listItemLinks = function (callback) {
        return this.mockData.listItemLinks(callback);
    };
    getUser = function (callback) {
        return this.mockData.getUser(callback);
    };
    listPhotos = function (callback) {
        return this.mockData.listPhotos(callback);
    };
    listBlog = function(callback){
        return this.mockData.listBlog(callback);
    };
    showBlogById = function(id,callback){
        return this.mockData.showBlogById(id,callback);
    };
    listCategoryDate = function (callback) {
        return this.mockData.listCategoryDate(callback);
    };
    listCategoryDetail = function (callback) {
        return this.mockData.listCategoryDetail(callback);
    };
    listComment = function (callback) {
        return this.mockData.listComment(callback);
    }
}

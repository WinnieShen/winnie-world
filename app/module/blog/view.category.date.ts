import { Component, OnInit } from '@angular/core';
import { RestfulService } from '../../service/restful.service';
import {BlogComponent} from '../view.blog';
@Component({
    selector: 'app-category-date',
    templateUrl:"views/blog/category-date.html"
})

export class CategoryDateComponent implements OnInit{
    constructor (private restfulService: RestfulService, private parent: BlogComponent) {}
    categoryDates = [];
    blogs = [];
    ngOnInit(){
        this.parent.setActive(false);
        this.refresh();
    };
    refresh = function(){
        var component = this;
        this.restfulService.listCategoryDate(function(res){
            console.log(res);
            component.categoryDates = res;
        });
        this.restfulService.listBlog(function(res){
            console.log(res);
            component.blogs = res;
        });
    };
}


import { Component, OnInit } from '@angular/core';
import { RestfulService } from '../../service/restful.service';
import {BlogComponent} from '../view.blog';
@Component({
    selector: 'app-category-detail',
    templateUrl:"views/blog/category-detail.html"
})

export class CategoryDetailComponent implements OnInit{
    constructor (private restfulService: RestfulService, private parent: BlogComponent) {}
    categoryDetails = [];
    ngOnInit(){
        this.parent.setActive(false);
        this.refresh();
    };
    refresh = function(){
        var component = this;
        this.restfulService.listCategoryDetail(function(res){
            console.log(res);
            component.categoryDetails = res;
        });
    };
}




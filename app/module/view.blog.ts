import { Component, OnInit } from '@angular/core';
import { RestfulService } from '../service/restful.service';
@Component({
    selector: 'app-blog',
    templateUrl:"views/blog/blog-nav.html",
    styleUrls: ['css/blog-style.css']
})

export class BlogComponent implements OnInit{
    constructor (private restfulService: RestfulService) {}
    categoryDetails = [];
    comments = [];
    homeClass = "";
    categoryClass ="";
    ngOnInit(){
        this.setActive(true);
        this.getCategoryDetail();
        this.getComments();
    };
    getCategoryDetail = function(){
        var component = this;
        this.restfulService.listCategoryDetail(function(res){
            console.log(res);
            component.categoryDetails = res;
        });
    };
    getComments = function () {
        var component = this;
        this.restfulService.listComment(function(res){
            console.log(res);
            component.comments = res;
        });
    };
    setActive = function(isHomeActive){
        if(isHomeActive == true){
            this.homeClass = "nav-home-page-active";
            this.categoryClass = "nav-category";
        }else{
            this.homeClass = "nav-home-page";
            this.categoryClass = "nav-category-active";
        }
    };
}


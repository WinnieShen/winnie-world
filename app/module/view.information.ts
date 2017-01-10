import { Component, OnInit } from '@angular/core';
import { RestfulService } from '../service/restful.service';
import {AppComponent} from '../app.component';
@Component({
    selector: 'app-blog-index',
    templateUrl:"views/blog/blog-index.html"
})

export class InformationComponent implements OnInit{
    constructor (private restfulService: RestfulService, private parent: AppComponent) {}
    blogs = [];
    article = [];
    ngOnInit(){
        // this.parent.setActive(true);
        this.refresh();
    };
    refresh = function(){
        var component = this;
        this.restfulService.listBlog(function(res){
            console.log(res);
            component.blogs = res;
        });
    };
}


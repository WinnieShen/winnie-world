import { Component, OnInit } from '@angular/core';
import { RestfulService } from '../../service/restful.service';
import {BlogComponent} from '../view.blog';
@Component({
    selector: 'app-blog-index',
    templateUrl:"views/blog/blog-index.html",
    styles:[`
        article{
            color: #444444;
            padding-bottom: 40px;
            font-family: "Microsoft YaHei UI",SimHei,sans-serif;
            font-size: 14px;
            letter-spacing: 1px;
        }
        .comments-number{
            float: right;
            margin-right: 20px;
        }
        .read-more{
            font-family: "Microsoft YaHei", sans-serif;
            color:#6E7173;
            float: right;
            margin-right: 10px;
        }
    `]
})

export class BlogIndexComponent implements OnInit{
    constructor (private restfulService: RestfulService, private parent: BlogComponent) {}
    blogs = [];
    article = [];
    ngOnInit(){
        this.parent.setActive(true);
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


import { Component, OnInit } from '@angular/core';
import { RestfulService } from '../../service/restful.service';
import {BlogComponent} from '../view.blog';
import {ActivatedRoute,Params} from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-show-blog',
    templateUrl:"views/blog/show-blog.html",
    styles:[`
        .comments-number{
            float: right;
            margin-right: 20px;
        }
    `]
})

export class ShowBlogComponent implements OnInit{
    constructor (private route: ActivatedRoute,private restfulService: RestfulService, private parent: BlogComponent) {}
    article = [];
    ngOnInit(){
        this.parent.setActive(true);
        let id=this.route.params.switchMap((params: Params) => params['id']).subscribe(x=>this.refresh(+x));
    };
    refresh = function(id){
        var component = this;
        this.restfulService.showBlogById(id,function(res){
            console.log(res);
            component.article = res;
        });
    };
}


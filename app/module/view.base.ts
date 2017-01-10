import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router';
import { RestfulService } from '../service/restful.service';
@Component({
    selector: 'app-login',
    templateUrl:'views/base.html',
    styleUrls: ['css/style.css']
})

export class BaseComponent implements OnInit{
    constructor (private _router: Router,private restfulService: RestfulService) {}
    itemLinks = [];
    userInfo = "";

    ngOnInit(){
         this.refresh();
    };
    refresh = function(){
        var component = this;
        this.restfulService.listItemLinks(function(res){
            console.log(res);
            component.itemLinks = res;
        });
        this.restfulService.getUser(function(res){
            console.log(res);
            component.userInfo = res;
        });
    };
}
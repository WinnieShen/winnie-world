import { Component, OnInit } from '@angular/core';
import { RestfulService } from './service/restful.service';
@Component({
    selector: 'my-app',
    templateUrl:"/views/home.html"
})

export class AppComponent implements OnInit{
    constructor (private restfulService: RestfulService) {}
    ngOnInit(){
        // this.refresh();
    };
}

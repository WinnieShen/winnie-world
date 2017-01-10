import { Component, OnInit } from '@angular/core';
import { RestfulService } from '../service/restful.service';
@Component({
    selector: 'app-photos',
    templateUrl:"views/photos/photos-index.html",
    styleUrls: ['css/photo-style.css']
})

export class PhotosComponent implements OnInit{
    constructor (private restfulService: RestfulService) {}
    photos = [];
    ngOnInit(){
        this.refresh();
    };
    refresh = function(){
        var component = this;
        this.restfulService.listPhotos(function(res){
            console.log(res);
            component.photos = res;
        });
    };
}


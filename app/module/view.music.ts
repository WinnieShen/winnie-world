import { Component, OnInit } from '@angular/core';
import { RestfulService } from '../service/restful.service';
@Component({
    selector: 'app-music-index',
    templateUrl:"views/music/music-index.html",
    styleUrls: ['css/music-style.css']
})

export class MusicComponent implements OnInit{
    constructor () {}
    ngOnInit(){
    };
}


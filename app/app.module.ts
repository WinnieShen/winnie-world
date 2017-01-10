import { NgModule }       from '@angular/core';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { routing }        from './app.routing';
import { AppComponent }   from './app.component';
import { RestfulService } from './service/restful.service';
import {MockData} from './mock/mock.data';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        RestfulService,
        MockData
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
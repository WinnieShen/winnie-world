import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './module/view.base';

import { BlogComponent } from './module/view.blog';
import { InformationComponent } from './module/view.information';
import { PhotosComponent } from './module/view.photos';
import { MusicComponent } from './module/view.music';

import { BlogIndexComponent } from './module/blog/view.blog.index';
import { ShowBlogComponent } from './module/blog/view.show.blog';
import { CategoryDateComponent } from './module/blog/view.category.date';
import { CategoryDetailComponent } from './module/blog/view.category.detail';

const blogChildRoutes: Routes = [
    {
        path: 'blog-index',
        component: BlogIndexComponent
    },{
        path: 'show-blog/:id',
        component: ShowBlogComponent
    }, {
        path: 'category-date',
        component: CategoryDateComponent
    },{
        path: 'category-detail',
        component: CategoryDetailComponent
    },
    {
        path: '**', redirectTo: "blog-index"
    }
];

const appRoutes: Routes = [
    {
        path: '',
        component: BaseComponent
    },
    {
        path: 'blog',
        component: BlogComponent,
        children: blogChildRoutes
    }, {
        path: 'information',
        component: InformationComponent
    }, {
        path: 'photos',
        component: PhotosComponent
    },  {
        path: 'music',
        component: MusicComponent
    }

];

export const routing = RouterModule.forRoot(appRoutes);

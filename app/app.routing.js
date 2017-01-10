"use strict";
var router_1 = require('@angular/router');
var view_base_1 = require('./module/view.base');
var view_blog_1 = require('./module/view.blog');
var view_information_1 = require('./module/view.information');
var view_photos_1 = require('./module/view.photos');
var view_music_1 = require('./module/view.music');
var view_blog_index_1 = require('./module/blog/view.blog.index');
var view_show_blog_1 = require('./module/blog/view.show.blog');
var view_category_date_1 = require('./module/blog/view.category.date');
var view_category_detail_1 = require('./module/blog/view.category.detail');
var blogChildRoutes = [
    {
        path: 'blog-index',
        component: view_blog_index_1.BlogIndexComponent
    }, {
        path: 'show-blog/:id',
        component: view_show_blog_1.ShowBlogComponent
    }, {
        path: 'category-date',
        component: view_category_date_1.CategoryDateComponent
    }, {
        path: 'category-detail',
        component: view_category_detail_1.CategoryDetailComponent
    },
    {
        path: '**', redirectTo: "blog-index"
    }
];
var appRoutes = [
    {
        path: '',
        component: view_base_1.BaseComponent
    },
    {
        path: 'blog',
        component: view_blog_1.BlogComponent,
        children: blogChildRoutes
    }, {
        path: 'information',
        component: view_information_1.InformationComponent
    }, {
        path: 'photos',
        component: view_photos_1.PhotosComponent
    }, {
        path: 'music',
        component: view_music_1.MusicComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
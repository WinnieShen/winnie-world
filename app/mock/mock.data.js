"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mock_item_1 = require('./mock.item');
var mock_personal_info_1 = require('./mock.personal.info');
var mock_photo_1 = require('./mock.photo');
var MockData = (function () {
    function MockData() {
        this.listItemLinks = function (callback) {
            callback(itemLinks);
        };
        this.getUser = function (callback) {
            callback(Winnie);
        };
        this.listPhotos = function (callback) {
            callback(photos);
        };
        this.listBlog = function (callback) {
            callback(Blog);
        };
        this.showBlogById = function (id, callback) {
            for (var i = 0; i < Blog.length; i++) {
                if (id == Blog[i].id) {
                    callback(Blog[i]);
                    break;
                }
            }
        };
        this.listCategoryDate = function (callback) {
            callback(CategoryDate);
        };
        this.listCategoryDetail = function (callback) {
            callback(CategoryDetail);
        };
        this.listComment = function (callback) {
            callback(Comment);
        };
    }
    MockData = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MockData);
    return MockData;
}());
exports.MockData = MockData;
var itemLinks = [
    new mock_item_1.ItemLink(1, 'blog', '/blog', '/images/home/mess.gif', 'Blog', 'Last change at Dec 22'),
    new mock_item_1.ItemLink(2, 'information', '/information', '/images/home/face.gif', 'Information', 'My base information'),
    new mock_item_1.ItemLink(3, 'photos', '/photos', '/images/home/photo.gif', 'Photos', 'Personal photos'),
    new mock_item_1.ItemLink(4, 'music', '/music', '/images/home/music.gif', 'Music', 'Add music "Baby"')
];
var Winnie = new mock_personal_info_1.PersonalInfo(1, "Winnie", "/images/photos/3.jpg", 102, 56, 18);
var photos = [
    new mock_photo_1.Photo(1, 'Landon 2013.3.2', '/images/photos/1.jpg', '2013.3.2', 1),
    new mock_photo_1.Photo(2, 'Yellow 2013.5.13', '/images/photos/2.jpg', '2013.5.13', 1),
    new mock_photo_1.Photo(3, 'Guitar 2013.11.28', '/images/photos/3.jpg', '2013.3.2', 1),
    new mock_photo_1.Photo(4, 'Landon 2013.3.2', '/images/photos/4.jpg', '2013.3.2', 1),
    new mock_photo_1.Photo(5, 'Landon 2013.3.2', '/images/photos/5.jpg', '2013.3.2', 1),
    new mock_photo_1.Photo(6, 'Landon 2013.3.2', '/images/photos/6.jpg', '2013.3.2', 1),
    new mock_photo_1.Photo(7, 'Landon 2013.3.2', '/images/photos/7.jpg', '2013.3.2', 1),
    new mock_photo_1.Photo(8, 'Landon 2013.3.2', '/images/photos/8.jpg', '2013.3.2', 1),
    new mock_photo_1.Photo(8, 'Landon 2013.3.2', '/images/photos/8.jpg', '2013.3.2', 1),
    new mock_photo_1.Photo(8, 'Landon 2013.3.2', '/images/photos/8.jpg', '2013.3.2', 1),
    new mock_photo_1.Photo(8, 'Landon 2013.3.2', '/images/photos/8.jpg', '2013.3.2', 1),
    new mock_photo_1.Photo(8, 'Landon 2013.3.2', '/images/photos/8.jpg', '2013.3.2', 1)
];
var Blog = [{
        "id": "1",
        "title": "Angular2学习手册",
        "publishDate": "2016.12.22",
        "categoryDateId": 1,
        "categoryDetailId": 1,
        "commentNum": 3,
        "introduction": "对于前端这个大世界来说，兴起的技术层出不穷，我最近学习了Angular2，Angular2与Angular1区别还是很大的，" +
            "不过本人对Angular1的知识也是一个初级的阶段，Angular2的学习是否需要对Angular1的熟悉呢？现在把过程与经验分享给大家。希望对大家的学习有所帮助。",
        "content": "<h1>content1</h1>"
    }, {
        "id": "2",
        "title": "Linux命令之二：find/grep",
        "publishDate": "2016.11.11",
        "categoryDateId": 1,
        "categoryDetailId": 2,
        "commentNum": 3,
        "introduction": "find/grep 在linux命令中属于常用又实用的部分，而熟练的使用会为平时的工作学习提高不少效率。下面是我整理的find/grep的一些用法，不齐全的部分后续还会添加。",
        "content": "find和grep的使用权限是所有用户。"
    }, {
        "id": "3",
        "title": "Linux命令之一：基础命令",
        "publishDate": "2016.06.01",
        "categoryDateId": 1,
        "categoryDetailId": 2,
        "commentNum": 3,
        "introduction": "大家都知道，Linux是一套免费使用和自由传播的类Unix操作系统，如果你对linux还不是很熟，建议大家可以去看看我的另一篇博客， " +
            "名为Linux 基础知识,可以帮助你初步了解linux一些特性。",
        "content": "content1"
    }, {
        "id": "4",
        "title": "Linux基础知识",
        "publishDate": "2016.05.28",
        "categoryDateId": 1,
        "categoryDetailId": 2,
        "commentNum": 3,
        "introduction": "Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于POSIX和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。" +
            "它能运行主要的UNIX工具软件、应用程序和网络协议。 它支持32位和64位硬件。Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。",
        "content": "content1"
    }, {
        "id": "5",
        "title": "前端开发学习目录",
        "publishDate": "2014.07.08",
        "categoryDateId": 3,
        "categoryDetailId": 3,
        "commentNum": 3,
        "introduction": "作为不同level的前端工作者，常常会因为不知道学习的步骤，而显得很茫然，下面我将根据不同的level指定一系列的学习方案，希望能帮助爱好前端的你， " +
            "也希望在遇到困难的时候，不要放弃。",
        "content": "content1"
    }];
var CategoryDetail = [{
        "id": 1,
        "name": "angular/angular2",
        "articleNum": 1,
        "createDate": "",
        "blogList": [
            {
                "blogId": "1",
                "title": "Angular2学习手册",
                "publishDate": "2016.12.22"
            }
        ]
    }, {
        "id": 2,
        "name": "Linux",
        "articleNum": 3,
        "createDate": "",
        "blogList": [
            {
                "blogId": "2",
                "title": "Linux命令之二：find/grep",
                "publishDate": "2016.11.11"
            }, {
                "blogId": "3",
                "title": "Linux命令之一：基础命令",
                "publishDate": "2016.06.01"
            }, {
                "blogId": "4",
                "title": "Linux基础知识",
                "publishDate": "2016.05.28",
            }
        ]
    }, {
        "id": 3,
        "name": "前端开发学习",
        "articleNum": 3,
        "createDate": "",
        "blogList": [
            {
                "blogId": "5",
                "title": "前端开发学习目录",
                "publishDate": "2014.07.08",
            }
        ]
    }, {
        "id": 4,
        "name": "使用教程",
        "articleNum": 3,
        "createDate": "",
        "blogList": [
            {
                "blogId": "7",
                "title": "eclipse中配置C/C++ IDE",
                "publishDate": "2014.07.08",
            }
        ]
    }];
var CategoryDate = [{
        "id": 1,
        "dateYear": "2016",
        "createDate": "",
        "blogList": [
            {
                "blogId": "1",
                "title": "Angular2学习手册",
                "publishDate": "2016.12.22"
            }, {
                "blogId": "2",
                "title": "Linux命令之二：find/grep",
                "publishDate": "2016.11.11"
            }, {
                "blogId": "3",
                "title": "Linux命令之一：基础命令",
                "publishDate": "2016.06.01"
            }
        ]
    }, {
        "id": 2,
        "dateYear": "2015",
        "createDate": "",
        "blogList": [
            {
                "blogId": "4",
                "title": "Linux基础知识",
                "publishDate": "2015.05.28",
            }
        ]
    }, {
        "id": 3,
        "dateYear": "2014",
        "createDate": "",
        "blogList": [
            {
                "blogId": "5",
                "title": "前端开发学习目录",
                "publishDate": "2014.07.08",
            }
        ]
    }];
var Comment = [
    {
        "id": 1,
        "userId": 1,
        "userName": "Gordon",
        "createDate": "2016,08.07",
        "content": "写的不错，继续加油。",
        "blogId": "",
        "blogTitle": "Linux基础知识"
    }, {
        "id": 2,
        "userId": 1,
        "userName": "Gordon",
        "createDate": "2016,08.07",
        "content": "还需要完善哦，没写全。",
        "blogId": "",
        "blogTitle": "Linux命令之一：基础命令"
    }, {
        "id": 3,
        "userId": 2,
        "userName": "海伦",
        "createDate": "2016,08.07",
        "content": "Mark一下，记录全面。谢楼主。以后会常来逛哦，楼主加油更博。",
        "blogId": "",
        "blogTitle": "Linux基础知识"
    }
];
//# sourceMappingURL=mock.data.js.map
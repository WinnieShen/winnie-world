"use strict";
var Photo = (function () {
    function Photo(id, description, photoPath, takeTime, secretLevel) {
        this.id = id;
        this.description = description;
        this.photoPath = photoPath;
        this.takeTime = takeTime;
    }
    return Photo;
}());
exports.Photo = Photo;
//# sourceMappingURL=mock.photo.js.map
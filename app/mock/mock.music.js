"use strict";
var Music = (function () {
    function Music(id, description, name, musicPath, author, playListId) {
        this.id = id;
        this.description = description;
        this.name = name;
        this.musicPath = musicPath;
        this.author = author;
        this.playListId = playListId;
    }
    return Music;
}());
exports.Music = Music;
//# sourceMappingURL=mock.music.js.map
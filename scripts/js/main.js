var api_key = 'ede34f68bfab5ab14120091e2f7d41d0';
var user = 'eviemcnaughton';
var api_root = 'https://ws.audioscrobbler.com/2.0/';
var lastfm_root = 'https://www.last.fm/music/';
var speaker_class = 'glyphicon glyphicon-volume-up';

var album_class = "album-cover";
var link_class = "album-link";
var hover_class = "album-animation";
var text_container_class = "text-container";
var info_wrapper_class = "album-info-wrapper";
var info_class = "album-info";
var info_text_class = "album-info-text";

// request albums
var albumsRequest = new XMLHttpRequest();
albumsRequest.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        processAlbumsRequest(JSON.parse(this.response));
    }
};

albumsRequest.open("GET", api_root + "?method=user.gettopalbums&period=1month&user=" + user + "&api_key=" + api_key + "&format=json")
albumsRequest.send();

// loads the album cover grid based on the api response when top albums is requested.
function processAlbumsRequest(response) {

    var container = document.getElementById("album-collage");
    var albums = response.topalbums.album;

    // loop through all albums and render them in the div specified by id "album-collage".
    for (var i = 0; i < albums.length; i++) {
        var album = albums[i];
        var imageURL = album.image[2]['#text'];

        // create the album-cover.
        var cover = document.createElement("div");
        cover.className = album_class;
        cover.style.backgroundImage = "url('" + imageURL + "')";

        // construct the text div to overlay it and append it to the cover div.
        var textDiv = constructAlbumTextDiv(album);

        cover.appendChild(textDiv);
        container.appendChild(cover);
    }
}


// helper to create the div that will be added to the album-cover, holding info about the album.
function constructAlbumTextDiv(albumObj) {
    var artistName = albumObj.artist.name;
    var albumName = albumObj.name;
    var plays = albumObj.playcount;
    var albumLink = albumObj.url;

    var info = document.createElement("div");
    info.className = info_class;

    var infoText = document.createElement("div");
    infoText.className = info_text_class;
    info.appendChild(infoText);

    var textWrapper = document.createElement("div");
    textWrapper.className = info_wrapper_class;
    textWrapper.appendChild(info);

    var titleEl = document.createElement("h5");
    titleEl.appendChild(document.createTextNode(albumName));
    infoText.appendChild(titleEl);

    var artistEl = document.createElement("h5");
    artistEl.appendChild(document.createTextNode(artistName));
    infoText.appendChild(artistEl);

    var playCountEl = document.createElement("h5");
    playCountEl.appendChild(document.createTextNode("Plays: " + plays));
    infoText.appendChild(playCountEl);

    var textContainer = document.createElement("div");
    textContainer.className = text_container_class;
    textContainer.appendChild(textWrapper);

    // make the album cover into a link
    var albumLinkElement = document.createElement("a");
    albumLinkElement.href = albumLink;
    albumLinkElement.target = '_blank';
    var linkSpan = document.createElement("span");
    linkSpan.className = link_class;
    albumLinkElement.appendChild(linkSpan);
    textContainer.appendChild(albumLinkElement);

    return textContainer;
}

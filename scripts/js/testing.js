var api_key = 'ede34f68bfab5ab14120091e2f7d41d0';
var user = 'eviemcnaughton';
var api_root = 'https://ws.audioscrobbler.com/2.0/';
var lastfm_root = 'https://www.last.fm/music/';
var speaker_class = 'glyphicon glyphicon-volume-up';

var album_outer = "album-outer";
var album_class = "album-cover";
var cover_class = "album-front";
var link_class = "album-link";
var text_class = "text-info";
var text_container_class = "album-back";

function drawAlbums(){
    // request albums
    var albumsRequest = new XMLHttpRequest();
    albumsRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            processAlbumsRequest(JSON.parse(this.response));
        }
    };

    albumsRequest.open("GET", api_root + "?method=user.gettopalbums&period=1month&user=" + user + "&api_key=" + api_key + "&format=json")
    albumsRequest.send();
}

// loads the album cover grid based on the api response when top albums is requested.
function processAlbumsRequest(response) {

    var container = document.getElementById("album-collage");
    container.html = "";
    var albums = response.topalbums.album;

    var album = albums[0];
    var imageURL = album.image[3]['#text'];

    // create the album-cover.
    var outer = document.createElement("div");
    outer.className = album_outer;
    var flip_card = document.createElement("div");
    flip_card.className = album_class;
    outer.appendChild(flip_card);

    // construct the text div to overlay it and append it to flip card
    var textDiv = constructAlbumTextDiv(album);
    flip_card.appendChild(textDiv);
    
    var cover = document.createElement("div");
    cover.className = cover_class;
    cover.style.backgroundImage = "url('" + imageURL + "') no-repeat";
    flip_card.appendChild(cover);

    container.appendChild(outer);

    
    
}


// helper to create the div that will be added to the album-cover, holding info about the album.
function constructAlbumTextDiv(albumObj) {
    var artistName = albumObj.artist.name;
    var albumName = albumObj.name;
    var plays = albumObj.playcount;
    var albumLink = albumObj.url;
    var textContainer = document.createElement("div");
    textContainer.className = text_class;

    var titleEl = document.createElement("h5");
    titleEl.appendChild(document.createTextNode(albumName));
    textContainer.appendChild(titleEl);

    var artistEl = document.createElement("h5");
    artistEl.appendChild(document.createTextNode(artistName));
    textContainer.appendChild(artistEl);

    var playCountEl = document.createElement("p");
    playCountEl.appendChild(document.createTextNode("Plays: " + plays));
    textContainer.appendChild(playCountEl);

    // make the album cover into a link
    var albumLinkElement = document.createElement("a");
    albumLinkElement.href = albumLink;
    albumLinkElement.target = '_blank';
    var linkSpan = document.createElement("span");
    linkSpan.className = link_class;
    albumLinkElement.appendChild(linkSpan);
    textContainer.appendChild(albumLinkElement);

    var textWrapper = document.createElement("div");
    textWrapper.className = text_container_class;
    textWrapper.appendChild(textContainer);

    return textWrapper;
}

window.onload = drawAlbums();

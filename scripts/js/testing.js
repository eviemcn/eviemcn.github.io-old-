var api_key = 'ede34f68bfab5ab14120091e2f7d41d0';
var user = 'eviemcnaughton';
var api_root = 'https://ws.audioscrobbler.com/2.0/';
var lastfm_root = 'https://www.last.fm/music/';
var speaker_class = 'glyphicon glyphicon-volume-up';

var album_outer = "album-outer";
var album_class = "album-cover";
var cover_class = "album-front";
var link_class = "album-link";
var text_class = "album-text";
var text_container_class = "album-back";
var album_count = 0;

var artist_outer = "artist-outer";
var artist_image = "artist-image";
var artist_link = "artist-link";
var artist_text = "artist-text";

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
    
    removeAlbums(album_count);
    var container = document.getElementById("album-collage");
    var albums = response.topalbums.album;
    album_count = albums.length;

    var i;
    for (i = 0; i < albums.length; i++){
        var album = albums[i];
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
        cover.style.backgroundImage = "url('" + imageURL + "')";
        
        flip_card.appendChild(cover);

        // make the album cover into a link
        var albumLink = album.url;
        var albumLinkElement = document.createElement("a");
        albumLinkElement.href = albumLink;
        albumLinkElement.target = '_blank';
        var linkSpan = document.createElement("span");
        linkSpan.className = link_class;
        albumLinkElement.appendChild(linkSpan);
        flip_card.appendChild(albumLinkElement);

        container.appendChild(outer);
    }
}


// helper to create the div that will be added to the album-cover, holding info about the album.
function constructAlbumTextDiv(albumObj) {
    var artistName = albumObj.artist.name;
    var albumName = albumObj.name;
    var plays = albumObj.playcount;
    var textContainer = document.createElement("div");
    textContainer.className = text_class;

    var titleEl = document.createElement("h5");
    titleEl.appendChild(document.createTextNode(albumName));
    textContainer.appendChild(titleEl);

    var artistEl = document.createElement("h6");
    artistEl.appendChild(document.createTextNode(artistName));
    textContainer.appendChild(artistEl);

    var playCountEl = document.createElement("p");
    playCountEl.appendChild(document.createTextNode("Plays: " + plays));
    textContainer.appendChild(playCountEl);

    var textWrapper = document.createElement("div");
    textWrapper.className = text_container_class;
    textWrapper.appendChild(textContainer);

    return textWrapper;
}

function drawArtists(){
    // request artists
    var artistsRequest = new XMLHttpRequest();
    artistsRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            processArtistsRequest(JSON.parse(this.response));
        }
    };

    artistsRequest.open("GET", api_root + "?method=user.gettopaartists&period=1month&user=" + user + "&api_key=" + api_key + "&format=json")
    artistsRequest.send();
}

function processAlbumsRequest(response) {
    removeAlbums(album_count);
    var container = document.getElementById("album-collage");
    var artists = response.topartists;
    album_count = artists.length;

    var i;
    for (i = 0; i < artists.length; i++){
        var artist = artists[i];
        var imageURL = artist.image[3]['#text'];

        var outer = document.createElement("div");
        outer.className = artist_outer;
        var textDiv = constructArtistTextDiv(artist);
        outer.appendChild(textDiv);
        
        var artistImg = document.createElement("div");
        artistImg.className = artist_image;
        artistImg.style.backgroundImage = "url('" + imageURL + "')";

        // make the artist image into a link
        var artistLink = artist.url;
        var artistLinkElement = document.createElement("a");
        artistLinkElement.href = artistLink;
        artistLinkElement.target = '_blank';
        var linkSpan = document.createElement("span");
        linkSpan.className = artist_link;
        artistLinkElement.appendChild(linkSpan);
        artistImg.appendChild(artistLinkElement);
        
        outer.appendChild(artistImg);

        container.appendChild(outer);
    }
}

function constructArtistTextDiv(artistObj) {
    var artistName = artistObj.name;
    var plays = artistObj.playcount;
    var textContainer = document.createElement("div");
    textContainer.className = artist_text;

    var titleEl = document.createElement("h5");
    titleEl.appendChild(document.createTextNode(artistName));
    textContainer.appendChild(titleEl);

    var playCountEl = document.createElement("p");
    playCountEl.appendChild(document.createTextNode("Plays: " + plays));
    textContainer.appendChild(playCountEl);

    return textContainer;
}

function removeAlbums(albumCount){
    var container = document.getElementById("album-collage");
    for (var i = 0; i < albumCount; i++){
        container.removeChild(container.childNodes[0]);
    }
    album_count = 0;
}

window.onload = drawAlbums();

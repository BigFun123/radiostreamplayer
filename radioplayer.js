/**
 * A very simple radio stream player with metadata display.
 * Refreshes metadata every 10 seconds.
 */

const streamurl = "https://www.radioking.com/play/indie-music-radio";
const dataurl = "https://api.radioking.io/widget/radio/indie-music-radio/track/current?f=1";

// set audio player to play stream
document.getElementById("radio").src = streamurl;

function getMeta() {
    fetch(dataurl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('title').innerHTML = data.title;
            document.getElementById('artist').innerHTML = data.artist;
            document.getElementById('album').innerHTML = data.album || " ";
            document.getElementById('buy_link').innerHTML = data.buy_link || " ";
            // change the img src to the cover
            document.getElementById('cover').src = data.cover;
        });
}

// refresh metadata every 10 seconds
setInterval(function () {
    getMeta();
}, 10000);

getMeta();
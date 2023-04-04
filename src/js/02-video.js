import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoEl = document.getElementById('vimeo-player');
const player = new Player(videoEl);

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

setInterval(function () {
  player.getCurrentTime().then(function (time) {
    localStorage.setItem('videoplayer-current-time', time);
  });
}, 1000);

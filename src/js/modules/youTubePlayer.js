import './youtubeData';
let { items } = MFE.utils.data;
let { $on, qs } = MFE.helpers;

function getYouTubeIDs() {
  let ids = [];
  for (let i = 0; i < items.length; i++) {
    ids[i] = items[i].contentDetails.videoId;
  }
  return ids;
};

function youTubePlayer(id) {
  return function () {
    var body = qs('body');
    var video__modal = document.createElement('div');
        video__modal.className = 'video__modal';
    var iframeWrapper = document.createElement('div');
        iframeWrapper.className = 'iframeWrapper';
    var iframeDiv = document.createElement('iFrame');
        iframeDiv.setAttribute('data-youtube-id', id);
        iframeDiv.setAttribute('src', 'https://www.youtube.com/embed/' + id );
    var closeBtn = document.createElement('div');
        closeBtn.className = 'closeBtn';

    $on(closeBtn, 'click', MFE.utils.closeOverlay); // close overlay

    video__modal.appendChild(iframeWrapper);
            iframeWrapper.appendChild(iframeDiv);
            video__modal.appendChild(closeBtn);
            body.appendChild(video__modal);
            console.log('YouTube video player is open');
  }
}

export function playRandomYouTubeVideo() {
  let ids = getYouTubeIDs(); // array
  let getRandId = ids[MFE.utils.randomNumber(ids.length)];
  let playVideo = youTubePlayer(getRandId);
  playVideo();
};

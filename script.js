var options = {
  id: 293581795,
  width: 840,
  loop: true
};

var player = new Vimeo.Player('play-this-video', options);

//player.setVolume(0);

player.on('play', function() {
  console.log('played the video!');
});

function playVideo() {
  player.play().then(function() {
    // the video was played
  }).catch(function(error) {
    switch (error.name) {
      case 'PasswordError':
        // the video is password-protected and the viewer needs to enter the
        // password first
        break;

      case 'PrivacyError':
        // the video is private
        break;

      default:
        // some other error occurred
        break;
    }
  });
  removeVideoCover();
}

function removeVideoCover() {
  $('#video-cover').addClass("hide");
}

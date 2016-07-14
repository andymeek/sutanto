$(function () {
  const videoHtml = `
      <video width="450" height="450" autoplay>
        <source src="assets/media/sutanto.mp4" type="video/mp4" />
      </video>
    `;
  
  $('img').on('click', function () {
    $(this).after(videoHtml).hide();
  });

  $('body').on('click', 'video', function() {
    // jQuery sets this as the DOM element that triggered the event
    // no need to wrap it in jQuery $(this) and unwrap it again $(this).get(0)
    if (this.paused) {
      this.play();
    } else {
      this.pause();
    }
  });
});
function openPage(pageId){
  document.querySelectorAll('.page').forEach(p=>{
    p.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

const videos = document.querySelectorAll("video");

/* Sound ON by default */
videos.forEach(video => {
  video.muted = false;

  // TAP to Play / Pause
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});

/* Scroll par sirf visible reel chale */
document.querySelector('.reels-container').addEventListener('scroll', () => {
  videos.forEach(video => {
    const rect = video.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      video.play();
    } else {
      video.pause();
    }
  });
});

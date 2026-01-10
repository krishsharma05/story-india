const container = document.querySelector(".reels-container");
const videos = document.querySelectorAll(".reel video");

/* Play first reel */
videos[0].play().catch(()=>{});

/* Scroll autoplay */
container.addEventListener("scroll", () => {
  videos.forEach(video => {
    const rect = video.getBoundingClientRect();

    if(rect.top >= 0 && rect.bottom <= window.innerHeight + 20){
      video.play().catch(()=>{});
    } else {
      video.pause();
    }
  });
});

/* Tap to play / pause */
videos.forEach(video => {
  video.addEventListener("click", () => {
    if(video.paused){
      video.play();
    } else {
      video.pause();
    }
  });
});

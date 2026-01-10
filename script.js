const reels = document.querySelectorAll(".reel");

reels.forEach(reel => {
  const video = reel.querySelector("video");
  const playIcon = reel.querySelector(".play-icon");

  video.muted = false;

  // Tap to Play / Pause
  reel.addEventListener("click", () => {
    if(video.paused){
      video.play();
      playIcon.style.display = "none";
    }else{
      video.pause();
      playIcon.style.display = "block";
    }
  });
});

// Auto play visible reel
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const video = entry.target.querySelector("video");
    const playIcon = entry.target.querySelector(".play-icon");

    if(entry.isIntersecting){
      video.play();
      playIcon.style.display = "none";
    }else{
      video.pause();
      playIcon.style.display = "block";
    }
  });
},{ threshold:0.6 });

reels.forEach(reel => observer.observe(reel));

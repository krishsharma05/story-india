const videos = document.querySelectorAll("video");
const soundBtns = document.querySelectorAll(".sound-btn");

/* GLOBAL SOUND STATE */
let globalSoundOn = false;

/* SOUND BUTTON */
soundBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    globalSoundOn = true;

    videos.forEach(v => {
      v.muted = false;
      v.volume = 1;
    });

    soundBtns.forEach(b => b.innerText = "🔊 Sound ON");
  });
});

/* TAP TO PAUSE / PLAY */
videos.forEach(video => {
  video.addEventListener("click", () => {
    video.paused ? video.play() : video.pause();
  });
});

/* AUTO PLAY CURRENT REEL */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const video = entry.target;

    if (entry.isIntersecting) {
      if (globalSoundOn) {
        video.muted = false;
        video.volume = 1;
      }
      video.play();
    } else {
      video.pause();
    }
  });
}, { threshold: 0.7 });

videos.forEach(video => observer.observe(video));

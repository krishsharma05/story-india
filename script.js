const videos = document.querySelectorAll("video");
let soundEnabled = false;

/* First user interaction = enable sound */
document.body.addEventListener("click", () => {
  if (!soundEnabled) {
    videos.forEach(video => {
      video.muted = false;
      video.play();
    });
    soundEnabled = true;
    document.querySelectorAll(".sound-btn").forEach(b => b.innerText = "🔊");
  }
}, { once: true });

/* Pause / Play on video tap */
videos.forEach(video => {
  video.addEventListener("click", (e) => {
    e.stopPropagation();
    video.paused ? video.play() : video.pause();
  });
});

/* Autoplay visible reel */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const video = entry.target;
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}, { threshold: 0.6 });

videos.forEach(video => observer.observe(video));

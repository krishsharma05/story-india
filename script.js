const container = document.querySelector(".reels-container");
const videos = document.querySelectorAll(".reel video");

let unlocked = false;

/* 1️⃣ First user tap unlocks autoplay */
document.body.addEventListener("click", () => {
  if (!unlocked) {
    unlocked = true;
    videos.forEach(v => {
      v.muted = false;
      v.play().catch(()=>{});
    });
  }
}, { once: true });

/* 2️⃣ Scroll par sirf visible reel chale */
container.addEventListener("scroll", () => {
  if (!unlocked) return;

  videos.forEach(video => {
    const rect = video.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight + 20) {
      video.play().catch(()=>{});
    } else {
      video.pause();
    }
  });
});

/* 3️⃣ Tap on video = pause / play */
videos.forEach(video => {
  video.addEventListener("click", (e) => {
    e.stopPropagation(); // body click se conflict na ho
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});

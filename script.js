const reels = document.querySelectorAll(".reel");
let current = 0;

function showReel(index) {
  reels.forEach((reel, i) => {
    const video = reel.querySelector("video");
    if (i === index) {
      reel.classList.add("active");
      video.play();
    } else {
      reel.classList.remove("active");
      video.pause();
    }
  });
}

let startY = 0;

document.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});

document.addEventListener("touchend", e => {
  let endY = e.changedTouches[0].clientY;
  if (startY - endY > 50 && current < reels.length - 1) {
    current++;
  } else if (endY - startY > 50 && current > 0) {
    current--;
  }
  showReel(current);
});

// Tap to pause/play
document.addEventListener("click", () => {
  const video = reels[current].querySelector("video");
  video.paused ? video.play() : video.pause();
});

showReel(0);

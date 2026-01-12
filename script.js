function showPage(page){
  document.querySelectorAll('.page').forEach(p=>{
    p.classList.add('hidden');
  });
  document.getElementById("page-"+page).classList.remove('hidden');
}

const reels = document.querySelectorAll(".reel");
let activeVideo = null;

// Intersection Observer (detect which reel is on screen)
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    const video = entry.target.querySelector("video");
    const tap = entry.target.querySelector(".tap-sound");

    if(entry.isIntersecting){
      // Pause previous video
      if(activeVideo && activeVideo !== video){
        activeVideo.pause();
        activeVideo.muted = true;
      }

      video.muted = true;
      video.play();
      activeVideo = video;
      tap.style.display = "block";
    } else {
      video.pause();
      video.muted = true;
    }
  });
},{ threshold: 0.7 });

reels.forEach(reel=>{
  observer.observe(reel);

  const video = reel.querySelector("video");
  const tap = reel.querySelector(".tap-sound");

  // Tap to enable sound (ONLY for active video)
  reel.addEventListener("click",()=>{
    if(video === activeVideo){
      video.muted = false;
      video.play();
      tap.style.display = "none";
    }
  });
});

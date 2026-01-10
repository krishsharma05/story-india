const videos = document.querySelectorAll("video");
const soundBtns = document.querySelectorAll(".sound-btn");

/* Sound ON button */
soundBtns.forEach(btn=>{
  btn.addEventListener("click", e=>{
    e.stopPropagation();
    const video = btn.parentElement.querySelector("video");
    video.muted = false;
    video.volume = 1;
    video.play();
    btn.innerText = "🔊 Sound ON";
  });
});

/* Pause / Play on tap */
videos.forEach(video=>{
  video.addEventListener("click", ()=>{
    video.paused ? video.play() : video.pause();
  });
});

/* Autoplay only visible reel */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    const video = entry.target;
    if(entry.isIntersecting){
      video.play();
    }else{
      video.pause();
    }
  });
},{ threshold: 0.7 });

videos.forEach(video=>observer.observe(video));

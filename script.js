const videos = document.querySelectorAll("video");
const soundBtns = document.querySelectorAll(".sound-btn");

/* Tap video = pause / play */
videos.forEach(video=>{
  video.addEventListener("click",()=>{
    video.paused ? video.play() : video.pause();
  });
});

/* Sound on / off */
soundBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    const video = btn.parentElement.querySelector("video");
    if(video.muted){
      video.muted = false;
      btn.innerText = "🔊";
    }else{
      video.muted = true;
      btn.innerText = "🔇";
    }
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
},{ threshold:0.6 });

videos.forEach(video=>observer.observe(video));

const videos = document.querySelectorAll("video");

/* First click on video = sound ON */
videos.forEach(video=>{
  video.addEventListener("click", ()=>{
    if(video.muted){
      video.muted = false;
      video.volume = 1;
      video.play();
    }else{
      video.paused ? video.play() : video.pause();
    }
  });
});

/* Auto play only visible reel */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    const video = entry.target;
    if(entry.isIntersecting){
      video.play();
    }else{
      video.pause();
    }
  });
},{ threshold:0.7 });

videos.forEach(video=>observer.observe(video));

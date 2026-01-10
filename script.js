const videos = document.querySelectorAll(".video");
let soundEnabled = false;

/* play only visible reel */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.play();
    }else{
      entry.target.pause();
    }
  });
},{ threshold:0.8 });

videos.forEach(video=>{
  observer.observe(video);

  video.addEventListener("click", ()=>{
    if(!soundEnabled){
      videos.forEach(v=>{
        v.muted = false;
        v.volume = 1;
      });
      soundEnabled = true;
    }

    video.paused ? video.play() : video.pause();
  });
});

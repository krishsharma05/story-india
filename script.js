function showPage(pageId, el){
  document.querySelectorAll('.page').forEach(p=>{
    p.classList.remove('active');
  });

  document.querySelectorAll('.nav-item').forEach(n=>{
    n.classList.remove('active');
  });

  document.getElementById(pageId).classList.add('active');
  el.classList.add('active');
}

/* VIDEO PLAY / PAUSE ON TAP */
document.querySelectorAll('video').forEach(video=>{
  video.muted = false;
  video.volume = 1;

  video.addEventListener('click', ()=>{
    if(video.paused){
      video.play();
    }else{
      video.pause();
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
},{ threshold:0.6 });

document.querySelectorAll('.reel video').forEach(v=>{
  observer.observe(v);
});

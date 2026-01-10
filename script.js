function openPage(id, el){
  document.querySelectorAll('.page').forEach(p=>{
    p.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.nav').forEach(n=>{
    n.classList.remove('active');
  });
  el.classList.add('active');
}

/* VIDEO PLAY ON VIEW */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    const video = entry.target;
    if(entry.isIntersecting){
      video.muted = false;
      video.play();
    }else{
      video.pause();
    }
  });
},{ threshold:0.7 });

document.querySelectorAll('video').forEach(v=>{
  observer.observe(v);
});

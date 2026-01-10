function openPage(pageId){
  document.querySelectorAll('.page').forEach(p=>{
    p.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

/* Auto play only visible reel + sound ON */
const videos = document.querySelectorAll("video");

videos.forEach(video => {
  video.muted = false;
});

document.querySelector('.reels-container').addEventListener('scroll', () => {
  videos.forEach(video => {
    const rect = video.getBoundingClientRect();
    if(rect.top >= 0 && rect.bottom <= window.innerHeight){
      video.play();
    } else {
      video.pause();
    }
  });
});

// LIKE BUTTON
document.querySelectorAll('.like').forEach(btn=>{
  btn.addEventListener('click',()=>{
    let span = btn.querySelector("span");
    span.innerText = parseInt(span.innerText) + 1;
  });
});

// COMMENT
document.querySelectorAll('.comment').forEach(btn=>{
  btn.addEventListener('click',()=>{
    alert("Comment feature coming soon");
  });
});

// SHARE
document.querySelectorAll('.share').forEach(btn=>{
  btn.addEventListener('click',()=>{
    alert("Share feature coming soon");
  });
});

// AUTOPLAY / PAUSE ON SCROLL
const videos = document.querySelectorAll("video");
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.play();
    }else{
      entry.target.pause();
    }
  });
},{threshold:0.7});

videos.forEach(video=>{
  observer.observe(video);
});

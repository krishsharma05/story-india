// LIKE
document.querySelectorAll('.like').forEach(btn=>{
  btn.onclick=()=>{
    let span = btn.querySelector("span");
    span.innerText = parseInt(span.innerText) + 1;
  };
});

// COMMENT
const commentBox = document.getElementById("commentBox");

document.querySelectorAll('.comment').forEach(btn=>{
  btn.onclick = ()=> commentBox.style.display="flex";
});

function closeComment(){
  commentBox.style.display="none";
}

// SHARE
document.querySelectorAll('.share').forEach(btn=>{
  btn.onclick=()=>{
    alert("Share feature coming soon");
  };
});

// AUTOPLAY + SOUND ON TAP
document.querySelectorAll("video").forEach(video=>{
  video.addEventListener("click",()=>{
    video.muted = false;
    video.play();
  });
});

// AUTO PLAY ON SCROLL
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.play();
    }else{
      entry.target.pause();
    }
  });
},{threshold:0.7});

document.querySelectorAll("video").forEach(video=>{
  observer.observe(video);
});

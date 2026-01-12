// LIKE BUTTON
document.querySelectorAll('.like').forEach(btn=>{
  btn.addEventListener('click',()=>{
    let span = btn.querySelector('span');
    span.innerText = parseInt(span.innerText) + 1;
  });
});

// COMMENT
const commentBox = document.getElementById("commentBox");

document.querySelectorAll('.comment').forEach(btn=>{
  btn.addEventListener('click',()=>{
    commentBox.style.display = "flex";
  });
});

function closeComment(){
  commentBox.style.display = "none";
}

// SHARE
document.querySelectorAll('.share').forEach(btn=>{
  btn.addEventListener('click',()=>{
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied");
  });
});

// AUTOPLAY ON SCROLL
const videos = document.querySelectorAll("video");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.play();
    }else{
      entry.target.pause();
    }
  });
},{threshold:0.6});

videos.forEach(video=>{
  observer.observe(video);
});

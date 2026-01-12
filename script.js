// PAGE SWITCHING
function showPage(page){
  document.getElementById("page-home").classList.add("hidden");
  document.getElementById("page-mylist").classList.add("hidden");
  document.getElementById("page-profile").classList.add("hidden");

  document.getElementById("page-" + page).classList.remove("hidden");
}

// LIKE BUTTON
document.querySelectorAll('.like').forEach(btn=>{
  btn.addEventListener('click',()=>{
    let span = btn.querySelector("span");
    span.innerText = parseInt(span.innerText) + 1;
  });
});

// COMMENT / SHARE (DUMMY)
document.querySelectorAll('.comment').forEach(btn=>{
  btn.onclick = ()=> alert("Comment feature coming soon");
});
document.querySelectorAll('.share').forEach(btn=>{
  btn.onclick = ()=> alert("Share feature coming soon");
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

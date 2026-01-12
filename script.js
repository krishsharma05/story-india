function showPage(page){
  document.getElementById("page-home").classList.add("hidden");
  document.getElementById("page-mylist").classList.add("hidden");
  document.getElementById("page-profile").classList.add("hidden");

  document.getElementById("page-" + page).classList.remove("hidden");
}

/* Mobile sound fix: tap to unmute */
document.querySelectorAll("video").forEach(video=>{
  video.addEventListener("click",()=>{
    video.muted = false;
    video.play();
  });
});

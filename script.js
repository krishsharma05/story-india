function showPage(page){
  document.querySelectorAll('.page').forEach(p=>{
    p.classList.add('hidden');
  });
  document.getElementById("page-"+page).classList.remove('hidden');
}

/* Reels autoplay + sound enable */
const reels = document.querySelectorAll(".reel");

reels.forEach(reel=>{
  const video = reel.querySelector("video");
  const tap = reel.querySelector(".tap-sound");

  video.muted = true;
  video.play();

  reel.addEventListener("click",()=>{
    video.muted = false;
    video.play();
    tap.style.display="none";
  });
});

const home = document.getElementById("home");
const mylist = document.getElementById("mylist");
const profile = document.getElementById("profile");

document.getElementById("nav-home").onclick = () => {
  showPage(home);
};

document.getElementById("nav-reels").onclick = () => {
  showPage(home);
};

document.getElementById("nav-mylist").onclick = () => {
  showPage(mylist);
};

document.getElementById("nav-profile").onclick = () => {
  showPage(profile);
};

function showPage(page){
  home.classList.add("hidden");
  mylist.classList.add("hidden");
  profile.classList.add("hidden");

  page.classList.remove("hidden");
}

/* Like */
document.querySelectorAll('.like').forEach(btn=>{
  btn.onclick=()=>{
    let span=btn.querySelector("span");
    span.innerText=parseInt(span.innerText)+1;
  }
});

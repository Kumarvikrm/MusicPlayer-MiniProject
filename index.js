let progressEl = document.getElementById("progress");
let songEl = document.getElementById("song");
let ctrlIconEl = document.getElementById("ctrlIcon");
let songImgEl = document.querySelector(".songImg");

songEl.onloadedmetadata = function () {
  progressEl.max = songEl.duration;
  progressEl.value = songEl.currentTime;
};

function playPause() {
  if (ctrlIconEl.classList.contains("fa-pause")) {
    songEl.pause();
    ctrlIconEl.classList.remove("fa-pause");
    ctrlIconEl.classList.add("fa-play");
    songImgEl.style.animation = "none";
  } else {
    songEl.play();
    ctrlIconEl.classList.remove("fa-play");
    ctrlIconEl.classList.add("fa-pause");
    songImgEl.style.animation = "rotate360 2s linear infinite";
  }
}

songEl.addEventListener('play', () => {
  setInterval(() => {
    progressEl.value = songEl.currentTime;
  }, 500);
  songImgEl.style.animation = "rotate360 2s linear infinite";
});

songEl.addEventListener('pause', ()=>{
  songImgEl.style.animation = "none";
});

songEl.addEventListener('ended', ()=>{
  songImgEl.style.animation = "none";
});



progressEl.onchange = function () {
  songEl.currentTime = progressEl.value;
  songEl.play();
  ctrlIconEl.classList.remove("fa-play");
  ctrlIconEl.classList.add("fa-pause");
  songImgEl.style.animation = "rotate360 2s linear infinite";
};



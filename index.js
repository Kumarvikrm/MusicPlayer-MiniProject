let progressEl = document.getElementById("progress");
let songEl = document.getElementById("song");
let ctrlIconEl = document.getElementById("ctrlIcon");

songEl.onloadedmetadata = function () {
  progressEl.max = songEl.duration;
  progressEl.value = songEl.currentTime;
};

function playPause() {
  if (ctrlIconEl.classList.contains("fa-pause")) {
    songEl.pause();
    ctrlIconEl.classList.remove("fa-pause");
    ctrlIconEl.classList.add("fa-play");
  } else {
    songEl.play();  // Corrected typo
    ctrlIconEl.classList.remove("fa-play");
    ctrlIconEl.classList.add("fa-pause");
  }
}

songEl.addEventListener('play', () => {
  setInterval(() => {
    progressEl.value = songEl.currentTime;
  }, 500);
});

progressEl.onchange = function () {
  songEl.currentTime = progressEl.value;
  songEl.play();
  ctrlIconEl.classList.remove("fa-play");
  ctrlIconEl.classList.add("fa-pause");
};

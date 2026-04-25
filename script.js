const videoEl = document.getElementById("rickVideo");
const fallbackEl = document.getElementById("videoFallback");
const headingEl = document.querySelector("h1");
const subtitleEl = document.querySelector(".subtitle");
const finePrintEl = document.querySelector(".fine-print");

function showFallback() {
  videoEl.classList.add("is-hidden");
  fallbackEl.classList.add("is-visible");
}

function hideFallback() {
  videoEl.classList.remove("is-hidden");
  fallbackEl.classList.remove("is-visible");
}

function updateRickrolledText() {
  if (headingEl) {
    headingEl.textContent = "Welcome to Project Rickroll";
  }
  if (subtitleEl) {
    subtitleEl.innerHTML = "Welcome to Project <a href=\"https://en.wikipedia.org/wiki/Rickrolling\" target=\"_blank\" rel=\"noopener noreferrer\">Rickroll</a> - final phase of Project Dawn! You probably shouldn't be so quick to click on links in unusual emails.";
  }
  if (finePrintEl) {
    finePrintEl.textContent = "Project Rickroll goal accomplished - Please update Kingpin.";
  }
}

videoEl.addEventListener("loadeddata", hideFallback);
videoEl.addEventListener("error", showFallback);
videoEl.addEventListener("play", updateRickrolledText, { once: true });

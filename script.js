// =========================
// COME HOME
// =========================

const comeHomeImage = document.getElementById("come-home-image");
const comeHomeNext = document.getElementById("come-home-next");

const comeHomeImages = [
  {
    src: "https://github.com/bellawestwood12-debug/graymatter/blob/main/images/obj-001-come-home-tee-front.png?raw=true",
    alt: "Front of the Lost Dogs Come Home item"
  },
  {
    src: "https://github.com/bellawestwood12-debug/graymatter/blob/main/images/obj-001-come-home-tee-back.png?raw=true",
    alt: "Back of the Lost Dogs Come Home item"
  }
];

let comeHomeIndex = 0;

comeHomeNext.addEventListener("click", function () {
  comeHomeIndex = comeHomeIndex + 1;

  if (comeHomeIndex >= comeHomeImages.length) {
    comeHomeIndex = 0;
  }

  comeHomeImage.src = comeHomeImages[comeHomeIndex].src;
  comeHomeImage.alt = comeHomeImages[comeHomeIndex].alt;
});


// =========================
// CRUEL TEE
// =========================

const cruelTeeImage = document.getElementById("cruel-tee-image");
const cruelTeeNext = document.getElementById("cruel-tee-next");

const cruelTeeImages = [
  {
    src: "https://github.com/bellawestwood12-debug/graymatter/blob/main/images/obj-002-cruel-tee-front-1.png?raw=true",
    alt: "Front of the Lost Dogs Cruel tee"
  },
  {
    src: "https://github.com/bellawestwood12-debug/graymatter/blob/main/images/obj-002-cruel-tee-back.png?raw=true",
    alt: "Back of the Lost Dogs Cruel tee"
  }
];

let cruelTeeIndex = 0;

cruelTeeNext.addEventListener("click", function () {
  cruelTeeIndex = cruelTeeIndex + 1;

  if (cruelTeeIndex >= cruelTeeImages.length) {
    cruelTeeIndex = 0;
  }

  cruelTeeImage.src = cruelTeeImages[cruelTeeIndex].src;
  cruelTeeImage.alt = cruelTeeImages[cruelTeeIndex].alt;
});


// =========================
// LOST DOGS HOODIE
// =========================

const lostDogsHoodieImage =
  document.getElementById("lost-dogs-hoodie-image");

const lostDogsHoodieNext =
  document.getElementById("lost-dogs-hoodie-next");

const lostDogsHoodieImages = [
  {
    src: "https://github.com/bellawestwood12-debug/graymatter/blob/main/images/lost-dogs-hoodie-02-front.png?raw=true",
    alt: "Front of the Lost Dogs hoodie"
  },
  {
    src: "https://github.com/bellawestwood12-debug/graymatter/blob/main/images/lost-dogs-hoodie-02-back.png?raw=true",
    alt: "Back of the Lost Dogs hoodie"
  }
];

let lostDogsHoodieIndex = 0;

lostDogsHoodieNext.addEventListener("click", function () {
  lostDogsHoodieIndex = lostDogsHoodieIndex + 1;

  if (lostDogsHoodieIndex >= lostDogsHoodieImages.length) {
    lostDogsHoodieIndex = 0;
  }

  lostDogsHoodieImage.src =
    lostDogsHoodieImages[lostDogsHoodieIndex].src;

  lostDogsHoodieImage.alt =
    lostDogsHoodieImages[lostDogsHoodieIndex].alt;
});

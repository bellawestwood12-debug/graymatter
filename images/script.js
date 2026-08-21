const hoodieImage = document.getElementById("hoodie-image");
const hoodieNext = document.getElementById("hoodie-next");

const hoodieImages = [
  {
    src: "https://github.com/bellawestwood12-debug/graymatter/blob/main/images/obj-001-come-home-tee-front.png?raw=true",
    alt: "Front of the Lost Dogs Come Home hoodie"
  },
  {
    src: "https://github.com/bellawestwood12-debug/graymatter/blob/main/images/obj-001-come-home-tee-back.png?raw=true",
    alt: "Back of the Lost Dogs Come Home hoodie"
  }
];

let hoodieIndex = 0;

hoodieNext.addEventListener("click", function () {

  hoodieIndex = hoodieIndex + 1;

  if (hoodieIndex >= hoodieImages.length) {
    hoodieIndex = 0;
  }

  hoodieImage.src = hoodieImages[hoodieIndex].src;
  hoodieImage.alt = hoodieImages[hoodieIndex].alt;

});

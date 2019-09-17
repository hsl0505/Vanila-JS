const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad() {
  console.log("finished img loading");
}

function paintImg(imgNum) {
  const myImage = new Image();
  myImage.src = `img/${imgNum + 1}.jpg`;
  myImage.classList.add("bgImg");
  body.prepend(myImage);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImg(randomNumber);
}

init();

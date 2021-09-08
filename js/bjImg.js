const Imgs = ["Europa.jpg", "Garden.jpg", "WitchQueen.jpg"];

const randomBgImg = Imgs[Math.floor(Math.random() * Imgs.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${randomBgImg}`;
const backgroundImages = `url(img/${randomBgImg})`
document.body.style.backgroundImage = backgroundImages

let imgCopo = document.querySelector(".starbucks");
let verde = document.querySelector(".verde");
let amarelo = document.querySelector(".amarelo");
let rosa = document.querySelector(".rosa");
let circulo = document.querySelector(".circle");
let button = document.querySelector(".button");

verde.addEventListener("click", () => {
  imgCopo.src = "./img/img1.png";
  circulo.style.background = "#eb7495";
});

amarelo.addEventListener("click", () => {
  imgCopo.src = "./img/img2.png";
  circulo.style.background = "#eb7495";
});

rosa.addEventListener("click", () => {
  imgCopo.src = "./img/img3.png";
  circulo.style.background = "#d752b1";
});

button.addEventListener("click", () => {
  alert(
    "besuche unsere webseite unter wwww.starbuck.de  für mehr infos uber Starbucks Reward"
  );
});

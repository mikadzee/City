<template>
  <div class="scene ubuntu-regular">
    <canvas id="canvas"></canvas>
    <h1 id="title">Достопримечательности</h1>
    <h2 id="subTitle">Норильска</h2>
  </div>
</template>

<style lang="less" scoped>
*::after,
*::before {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-width: 100vw;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

.scene {
  padding-top: 50%;
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  text-align: center;

}

.scene>canvas {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  
}

.scene>h1 {
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  font-size: 5vw;
  font-weight: 800;
  text-transform: uppercase;
  transition: margin 0.4s ease;
  @media (max-width:500px) {
    top: 40%;
    
  }

}
.scene>h2 {
  position: absolute;
  top: 70%;
  left: 0;
  width: 100%;
  font-size: 5vw;
  font-weight: 800;
  text-transform: uppercase;
  transition: margin 0.4s ease;

}

@media (ma) {}
</style>

<script setup>
import image1 from "../assets/images/attractions/bg-3.jpg";
import image2 from "../assets/images/attractions/sub-bg-3.png";
import image3 from "../assets/images/attractions/sub-bg-2.png";
import image4 from "../assets/images/attractions/sub-bg-1.png";

const scene = [];
let canvas;
let ctx;
const textParallax = 0.5;

onMounted(() => {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
})


//функция по созданибю картинок
function loadImage(path, options) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      options.img = img;
      scene.push(options);
      resolve();
    };
  });
}
//Здесь собирает массив картинок(Тут же устанавливаешь параметры картинок и позицию)
async function init() {
  await loadImage(image1, {
    left: 0,
    top: 0,
    width: 1,
    height: 1.1,
    parallax: 0.4,
    //parallax - скорость перемещения.
  }),
    await loadImage(image4, {
      left: 0.354,
      top: 0.30,
      width: 0.33,
      height: 0.45,
      parallax: 1,
    }),
    await loadImage(image2, {
      left: 0.69,
      top: 0.23,
      width: 0.3,
      height: 0.4,
      parallax: 0.9,
    }),
    await loadImage(image3, {
      left: 0.01,
      top: 0.2,
      width: 0.34,
      height: 0.4,
      parallax: 0.7,
    }),

    // await Promise.all([
    // ]);
    canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  window.addEventListener("scroll", renderParallax);
  renderParallax();
}
//Функция рендера
function renderParallax() {
  if (window.scrollY > canvas.clientHeight) return;

  const { width, height } = canvas;
  ctx.clearRect(0, 0, width, height);

  //(Тут ты можешь изменять направление движения)
  for (const layer of scene) {
    ctx.drawImage(
      layer.img,
      layer.left * width,
      layer.top * height + window.scrollY * layer.parallax,
      layer.width * width,
      layer.height * height
    );
  }

  document.getElementById("title").style.marginTop = -window.scrollY * (2-textParallax) + "px";
  document.getElementById("subTitle").style.marginTop = -window.scrollY * textParallax +  "px";
}

init();

</script>

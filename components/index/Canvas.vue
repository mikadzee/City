<template>
  <div class="scene ubuntu-regular">
    <canvas id="canvas"></canvas>
    <h1 id="title">Норильск</h1>
  </div>
</template>

<style scoped>
*::after,
*::before {
  box-sizing: border-box;
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
  
  position: relative;
  width: 100%;
  padding-top: 50%;
  background-image: url('../assets/images/norilsk-main-1.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  text-align: center;

  @media (max-width: 768px) {
    
  }
}

.scene > h1 {
  position: absolute;
  top: 70%;
  left: 0;
  width: 100%;
  font-size: clamp(3rem,11.4vw, 12rem);
  color: rgb(108, 108, 230);
  font-weight: 800;
  text-transform: uppercase;
  transition: margin 0.4s ease;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 8vw, 4rem); /* Уменьшаем размер шрифта для мобильных */
    top: 50%; /* Позиционируем заголовок по-другому */
    transform: translateY(-50%); /* Центрируем заголовок */
  }
}

.scene > canvas {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}


</style>

<script setup>
import image1 from "../assets/images/norilsk-main-3.jpg";
import image2 from "../assets/images/norilsk-industry-1.jpg";
import image3 from "../assets/images/norilsk-industry-2.jpeg";
import image4 from "../assets/images/norilsk-industry-6.jpg";


const scene = [];
let canvas;
let ctx;
const textParallax = 0.5;

onMounted (() => {
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
    height: 1.5,
    parallax: 0.5,
    //parallax - скорость перемещения.
  }),
    await loadImage(image4, {
      left: 0.354,
      top: 0.3,
      width: 0.33,
      height: 0.45,
      parallax: 1.4,
    }),
      await loadImage(image2, {
        left: 0.69,
        top: 0.10,
        width: 0.3,
        height: 0.4,
        parallax:1.30,
      }),
      await loadImage(image3, {
        left: 0.01,
        top: 0.1,
        width: 0.34,
        height: 0.4,
        parallax:1.1,
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

  document.getElementById("title").style.marginTop = -window.scrollY * textParallax + "px";
}

init();

</script>

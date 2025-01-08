<template>
  <section class="loading">
    <div ref="followerBlock" class="div div1" :style="{'top': `${positionTop}%`}"></div>
    <div ref="followerBlock2" class="div div2" :style="{'top': `${positionTop}%`}"></div>
    <div ref="mainLoading" class="div div3-main" :style="{'top': `${positionTop}%`}">
      <img src="../assets/gifs/santa-klaus-i-ded-moroz-animatsionnaya-kartinka-0420.gif" alt="">
    </div>
  </section>
</template>

<style lang="less" scoped>
  .loading {
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 1000;
    overflow: hidden;

    & .div {
      position: absolute;
      top: 0%;
    }

    & .div1 {
      left: 0;
      width: 100%;
      z-index: -4;
      height: 100vh;
      transition: all 1.5s ease;
      // animation: loading 2.5s ease;
      background: #ff0000;    
    }
    & .div2 {
      left: 0;
      z-index: -3;
      width: 100%;
      // animation: loading 3s ease;
      height: 100vh;
      transition: all 2s ease;
      background: #038e0a;    
    }
    & .div3-main {
      // animation: loading 4s ease ;
      left: 0;
      transition: all 2.5s ease;
      width: 100%;
      z-index: 1;
      height: 100vh;
      background: #00a86b;

      & img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
    }

  }

  @keyframes loading {
    0% {
      top: 100%;
    }
    50% {
      top: 0%;
    }

    80% {
      top: 0%;
    }
    100% {
      top: -100%;
    }
  }
</style>

<script setup>

  let positionTop = ref(100);
  let mainLoading = ref(null);
  let followerBlock = ref(null);
  let followerBlock2 = ref(null);

  function loading() {
    positionTop.value = 0;
    
    setTimeout(() => {
      mainLoading.value.style.transition = 'all 1.8s ease';
      followerBlock.value.style.transition = 'all 2.8s ease';
      followerBlock2.value.style.transition = 'all 2.4s ease';
      positionTop.value = -100;
    }, 3000);
  }

  onMounted(() => {
      loading();
  })

</script>
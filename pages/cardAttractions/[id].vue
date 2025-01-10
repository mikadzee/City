<template>
  <main>
    <section class="information-attraction ubuntu-regular" v-if="attractionInfo">
      <div class="img-block">
        <img :src="attractionInfo.img" alt="">
      </div>
      <div class="info-texts">
        <h1>{{ attractionInfo.title }}</h1>
        <p>{{ attractionInfo.description }}</p>
      </div>
    </section>

  </main>
</template>

<style lang="less" scoped>
  .information-attraction {
    padding: 100px 50px;
    display: flex;

    & .img-block {
      & > img {
        border-radius: 25px;
        width: 100vh;
      }
    }
    
    & .info-texts {
      margin-left: 30px;
      
      & h1 {
        text-align: center;
        font-size: 35px;
      }
      
      & > p {
        margin-top: 10px;
        font-size: 20px;
      }
    }
    @media (max-width: 500px) {
      padding: 65px 0px;
      display: block;
  
      & .img-block {
        & > img {
          margin-left: 40px;
          border-radius: 15px;
          width: 50vh;
          height: 50vh;
        }
      }
      
      & .info-texts {
        margin-left: 10px;
        & h1 {
          text-align: left;
          font-size: 22px;
        }
        
        & > p {
          margin-top: 10px;
          font-size: 20px;
          line-height: 25px;
        }
      }
      
    }
  }
</style>

<script setup>
import { useAttractionFunctions } from '@/stores/getPostAttractionsInfo'

const store = useAttractionFunctions()
let attractionInfo = ref(null);

onMounted(() => {
  attractionInfo.value = store.getCurrentAttraction()

})
</script>

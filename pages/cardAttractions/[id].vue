<template>
  <main>
    <section class="information-attraction ubuntu-regular" v-if="attractionInfo">
      <div class="img-block">
        <img :src="attractionInfo.img" alt="">
      </div>
      <div class="info-texts">
        <h1>{{ attractionInfo.title }}</h1>
        <p>{{ attractionInfo.description }}</p>
        <button class="btn" @click="$router.go(-1)">Назад</button>
      </div>
    </section>

  </main>
</template>

<style lang="less" scoped>
.information-attraction {
  padding: 100px 50px;
  display: flex;

  & .img-block {
    &>img {
      border-radius: 25px;
      height: 550px;
      width: 550px;
    }
  }

  & .info-texts {
    margin-left: 30px;

    & h1 {
      text-align: center;
      font-size: 35px;
    }

    &>p {
      margin-top: 10px;
      font-size: 20px;
    }

    & .btn {
      width: 155px;
      margin-left: 80%;
      margin-top: 30px;
      height: 44px;
      border: 3px solid #3a7999;
      background: #ffffff;
      font-size: 19px;
      color: #0a0a0a;
      transition: all 0.5s;
      cursor: pointer;

      &:hover {
        border: 3px dotted #3a7999;
        color: #ffffff;
        background: rgba(0, 0, 0, 0);
      }
    }

  }

  @media (max-width: 500px) {
    padding: 65px 0px;
    display: block;

    & .img-block {
      margin-left: 20%;
      &>img {
        margin-left: 0px;
        border-radius: 15px;
        width: 250px;
        height: 250px;
      }
    }

    & .info-texts {
      margin-left: 10px;

      & h1 {
        text-align: left;
        font-size: 22px;
      }

      &>p {
        margin-top: 10px;
        font-size: 18px;
        line-height: 25px;
      }

      & .btn {
        margin-left: 50%;
        margin-top: 30px;
        width: 155px;
        height: 44px;
        border: 3px solid #3a7999;
        background: #ffffff;
        font-size: 19px;
        color: #0a0a0a;
        transition: all 0.5s;
        cursor: pointer;

        &:hover {
          border: 3px dotted #3a7999;
          color: #ffffff;
          background: rgba(0, 0, 0, 0);
        }
      }
    }

  }

  @media (max-width: 400px) {
    padding: 65px 0px;
    display: block;

    & .img-block {
      &>img {
        margin-left: 40px;
        border-radius: 15px;
        width: 250px;
        height: 250px;
      }
    }

    & .info-texts {
      margin-left: 10px;

      & h1 {
        text-align: left;
        font-size: 22px;
      }

      &>p {
        margin-top: 10px;
        font-size: 20px;
        line-height: 25px;
      }

      & .btn {
        width: 155px;
        margin-left: 50%;
        margin-top: 30px;
        height: 44px;
        border: 3px solid #3a7999;
        background: #ffffff;
        font-size: 19px;
        color: #0a0a0a;
        transition: all 0.5s;
        cursor: pointer;

        &:hover {
          border: 3px dotted #3a7999;
          color: #ffffff;
          background: rgba(0, 0, 0, 0);
        }
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

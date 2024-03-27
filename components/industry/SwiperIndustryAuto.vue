<template>
	<Swiper
		class="slider farro-light"
		:modules="[Autoplay]" loop="true" :slides-per-view="1" :autoplay="{ delay: 8000, disableOnInteraction: false }"
	>
		<SwiperSlide v-for="photo in randomSlides" class="slide">
			<img :src="photo.image" alt="" />

      <div class="content-slide">
        <div>
          <h2 >{{ photo.title }}</h2>
          <h3 >{{ photo.text }}</h3>
        </div>
      </div>
		</SwiperSlide>
	</Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import metalurg from '@/assets/images/norilsk-metalurg-industry.jpg'
import mining from '@/assets/images/norilsk-mining-industry.jpeg'
import electric from '@/assets/images/norilsk-electric-industry.jpeg'
import sahta from '@/assets/images/norilsk-sahta-industry.jpg'


const slides = ref([
	{ image: metalurg, title: 'Цветная металлургия', text: 'отрасль металлургии, которая включает добычу, обогащение руд цветных металлов и выплавку цветных металлов и их сплавов.' },
	{ image: mining, title: 'Газовая промышленность', text: 'отрасль топливной промышленности, основная задача которой — добыча и разведка природного газа.' },
  { image: electric, title: 'Энергетическая промышленность', text: 'Выработки энергетических ресурсов для создания определенного вида энергии.' },
  { image: sahta, title: 'Шахта', text: 'осуществляющее добычу полезных ископаемых с помощью системы подземных горных выработок.' },
])

const randomSlides = computed(() => {
	return slides.value.sort(() => Math.random() - 0.5)
})
</script>

<style scoped lang="less">
.slider {
	& .slide {
		width: 100%;
		height: 800px;

		& > img {
			width: 100%;
			height: auto;
			object-fit: cover;
      position: absolute;
    }

    & .content-slide {
      padding: 0px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 30%;
      background-color: rgba(0, 0, 0, 0.549);
      backdrop-filter: blur(10px);
      height: 100%;

      & > div {
        text-align: center;

        & > h2 {
          font-size: 35px;
        }
        & > h3 {
          font-size: 20px;
        }
      }
    }
	}
}
</style>

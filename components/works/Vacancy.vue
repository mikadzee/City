<template>
	<section class="works ubuntu-regular">
		<h2>Работы в Норильске</h2>
		<div class="body-works">
			<div class="list-works">
				<a v-for="info in randomWork" :href="info.url" class="work-link" target="_blank">
					<div class="work-body">
						<h2 class="work-title">{{ info.work }}</h2>
						<p class="work-salary">{{ info.salary }}</p>
					</div>
				</a>
			</div>
			<a href="https://rabota1000.ru/norilsk" >Еще...</a>
		</div>

		<div class="expensive-works">
			<h2>Высокооплачиваемые работы в Норильске</h2>
			<div class="body-expensive-works">
				<a class="work" v-for="info in expensiveWorks" target="_blank" :href="info.url" >
					<h2>{{ info.work }}</h2>
					<h4>{{ info.salary }}</h4>
				</a>
			</div>
		</div>
	</section>
</template>

<style lang="less" scoped>
.works {
	padding: 100px 110px;
  
  @media (max-width: 700px) {
    padding: 100px 20px;
    
  }
	@media (max-width: 500px) {
    padding: 50px 0px;
    
  }

	& > h2 {
    margin-bottom: 20px;
		text-align: center;
    
    @media (max-width: 700px) {
      font-size: 18px;
    }
	}
  
	& .body-works {
    
    & .list-works {
      display: flex;
			gap: 10px;
			flex-wrap: wrap;
			justify-content: center;
      
			& .work-link {
        padding: 25px;
				display: block;
				width: 250px;
				border: 1px solid #ffffff4c;
				transition: all 0.3s;
        
        @media (max-width: 700px) {
          width: 150px;
          padding: 15px;
        }
        @media (max-width: 700px) {
          width: 150px;
          padding: 15px;
        }
        
				&:hover {
          box-shadow: 0px 0px 2px #fff;
				}
        
				& .work-body {
          
          & .work-title {
            font-size: 20px;
            
            @media (max-width: 700px) {
              font-size: 15px;
            }
					}
          
					& .work-salary {
            margin: 10px 0px;
            
            @media (max-width: 700px) {
              margin: 5px 0px;
              font-size: 10px;
            }
					}
				}
			}
		}
    
		& > a {
      color: rgb(8, 0, 255);
      
      @media (max-width: 700px) {
        font-size: 15px;
      }
		}
	}
  
	& .expensive-works {
    
    
    & > h2 {
      margin-top: 50px;
      margin-bottom: 20px;
      text-align: center;
      
      @media (max-width: 700px) {
        font-size: 18px;
      }
    }
    
		& .body-expensive-works {
      display: flex;
			gap: 10px;
			flex-wrap: wrap;
			justify-content: center;
      
			& .work {
        padding: 25px;
				width: 250px;
				border: 1px solid #ffffff4c;
				transition: all 0.3s;
        
        @media (max-width: 700px) {
          padding: 15px;
          font-size: 15px;
          width: 150px;
        }
        
				&:hover {
          box-shadow: 0px 0px 2px #fff;
				}
        
        & > h2 {
          font-size: 20px;

          @media (max-width: 700px) {
            font-size: 15px;
          }
				}
        
				& > h4 {
          @media (max-width: 700px) {
            margin: 5px 0px;
            font-size: 12px;
          }
				}
			}
		}
	}
}
</style>

<script setup>
const works = [
	{
		work: 'Инженер ПТО',
		salary: '192 000 — 195 000 ₽/месяц',
		url: 'https://norilsk.hh.ru/vacancies/inzhener_pto',
	},
	{
		work: 'Программист',
		salary: 'до 78 805 ₽ до вычета налогов',
		url: 'https://norilsk.hh.ru/vacancies/programmist',
	},
	{
		work: 'Врач-педиатр',
		salary: 'от 70 000 руб. до 100 000 руб.',
		url: 'https://norilsk.hh.ru/vacancies/pediatr',
	},
	{
		work: 'Врач-психиатр',
		salary: 'от 77 500 ₽ на руки',
		url: 'https://norilsk.hh.ru/vacancies/vrach-psihiatr',
	},
	{
		work: 'Врач-хирург',
		salary: 'от 100 000 ₽ до вычета налогов',
		url: 'https://norilsk.hh.ru/vacancies/vrach-hirurg',
	},
	{
		work: 'Врач-терапевт',
		salary: 'от 140 000 ₽ до вычета налогов',
		url: 'https://norilsk.hh.ru/vacancies/vrach_terapevt',
	},
	{
		work: 'Электрослесарь',
		salary: 'от 120 000 до 140 000 ₽ на руки',
		url: 'https://norilsk.hh.ru/vacancies/elektroslesar',
	},
	{
		work: 'Слесарь',
		salary: 'от 80 000 ₽ на руки',
		url: 'https://norilsk.hh.ru/vacancies/slesar',
	},
	{
		work: 'Буровой мастер',
		salary: 'от 143 000 ₽',
		url: 'https://norilsk.hh.ru/vacancies/burovoj-master',
	},
	{
		work: 'Курьер',
		salary: 'от 80 000 до 150 000 ₽ на руки',
		url: 'https://norilsk.hh.ru/vacancies/kurer',
	},
	{
		work: 'Грузчик',
		salary: 'от 50 000 ₽ на руки',
		url: 'https://norilsk.hh.ru/vacancies/gruzchik',
	},
	{
		work: 'Разнорабочий',
		salary: 'Договорная',
		url: 'https://norilsk.hh.ru/vacancies/raznorabochiy',
	},
	{
		work: 'Горнорабочий',
		salary: 'до 170 000 ₽ до вычета налогов',
		url: 'https://norilsk.hh.ru/vacancies/gornorabochij',
	},
	{
		work: 'Шахтный электрик',
		salary: 'от 75 000 ₽ на руки',
		url: 'https://norilsk.hh.ru/vacancies/elektrik',
	},
	{
		work: 'Горный мастер',
		salary: 'от 180 000 до 280 000 ₽ на руки',
		url: 'https://norilsk.hh.ru/vacancies/gornyy_master',
	},
]
const expensiveWorks = [
	{
		work: 'Заместитель главного инженера',
		salary: 'от 400 000 ₽',
		url: 'https://norilsk.careerist.ru/vakansii/zamestitel-glavnogo-inzhenera-po-montazhu-tekhnologicheskogo-oborudovaniya-na-gok-54102460.html',
	},
	{
		work: 'Подземный Горный мастер',
		salary: 'от 400 000 ₽',
		url: 'https://norilsk.careerist.ru/vakansii/podzemnyy-gornyy-master-54048300.html',
	},
	{
		work: 'Руководитель проекта по строительству',
		salary: 'от 450 000 ₽',
		url: 'https://norilsk.careerist.ru/vakansii/rukovoditel-proekta-po-stroitelstvu-obektov-neftegazovoy-otrasli-51990252.html',
	},
	{
		work: 'Начальник участка ОГР ПГР',
		salary: 'от 350 000 ₽ до 410 000 ₽',
		url: 'https://norilsk.careerist.ru/vakansii/nachalnik-uchastka-ogr-pgr-53673646.html',
	},
]
const randomWork = computed(() => {
	return works.sort(() => Math.random() - 0.5)
})
</script>

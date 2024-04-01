<template>
	<section class="works ubuntu-regular">
		<h2>Нужные вакансии в Норильске</h2>
		<div class="body-works">
			<div class="list-works">
				<a v-for="info in randomWork" :href="info.url" class="work-link" target="_blank">
					<div class="work-body">
						<h2 class="work-title">{{ info.work }}</h2>

						<p class="work-salary">{{ info.salary }}</p>
					</div>
				</a>
			</div>
			<a href="https://rabota1000.ru/norilsk" >Еще вакансии...</a>
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
		url: 'https://norilsk.superjob.ru/vakansii/inzhener-pto-48732236.html',
	},
	{
		work: 'Программист',
		salary: 'до 78 805 ₽ до вычета налогов',
		url: 'https://norilsk.hh.ru/vacancy/91860722?utm_source=rabota1000.ru&utm_medium=ppc&utm_campaign=dm-aggregators-main_b2c-rf-paid_cpa_applicant_feed',
	},
	{
		work: 'Контроллер',
		salary: 'от 42 000 ₽',
		url: 'https://norilsk.hh.ru/vacancy/94907245?utm_source=rabota1000.ru&utm_medium=ppc&utm_campaign=dm-aggregators-main_b2c-rf-paid_cpa_applicant_feed',
	},
	{
		work: 'Врач-педиатр',
		salary: 'от 70 000 руб. до 100 000 руб.',
		url: 'https://rabota1000.ru/vacancy/2426570',
	},
	{
		work: 'Врач-психиатр',
		salary: 'от 77 500 ₽ на руки',
		url: 'https://norilsk.hh.ru/vacancy/95118165?utm_source=rabota1000.ru&utm_medium=ppc&utm_campaign=dm-aggregators-main_b2c-rf-paid_cpa_applicant_feed',
	},
	{
		work: 'Врач-невролог',
		salary: 'от 35 000 руб. до 55 000 руб.',
		url: 'https://rabota1000.ru/vacancy/143651891',
	},
	{
		work: 'Врач-хирург',
		salary: 'от 100 000 ₽ до вычета налогов',
		url: 'https://norilsk.hh.ru/vacancy/94306366?utm_source=rabota1000.ru&utm_medium=ppc&utm_campaign=dm-aggregators-main_b2c-rf-paid_cpa_applicant_feed',
	},
	{
		work: 'Врач-терапевт',
		salary: 'от 140 000 ₽ до вычета налогов',
		url: 'https://norilsk.hh.ru/vacancy/94308084?utm_source=rabota1000.ru&utm_medium=ppc&utm_campaign=dm-aggregators-main_b2c-rf-paid_cpa_applicant_feed',
	},
	{
		work: 'Электрослесарь',
		salary: 'от 215 000 до 250 000 ₽ на руки',
		url: 'https://norilsk.hh.ru/vacancy/94220820?utm_source=rabota1000.ru&utm_medium=ppc&utm_campaign=dm-aggregators-main_b2c-rf-paid_cpa_applicant_feed',
	},
	{
		work: 'Слесарь',
		salary: 'от 80 000 ₽ на руки',
		url: 'https://norilsk.hh.ru/vacancy/94510727?utm_source=rabota1000.ru&utm_medium=ppc&utm_campaign=dm-aggregators-main_b2c-rf-paid_cpa_applicant_feed',
	},
	{
		work: 'Буровой мастер колонкового бурения',
		salary: 'от 213 000 ₽',
		url: 'https://norilsk.hh.ru/vacancy/94084475?utm_source=rabota1000.ru&utm_medium=ppc&utm_campaign=dm-aggregators-main_b2c-rf-paid_cpa_applicant_feed',
	},
	{
		work: 'Курьер',
		salary: 'от 80 000 до 150 000 ₽ на руки',
		url: 'https://norilsk.hh.ru/vacancy/95011136?utm_source=rabota1000.ru&utm_medium=ppc&utm_campaign=dm-aggregators-main_b2c-rf-paid_cpa_applicant_feed',
	},
	{
		work: 'Грузчик',
		salary: 'от 50 000 ₽ на руки',
		url: 'https://norilsk.hh.ru/vacancy/95395602?utm_source=rabota1000.ru&utm_medium=ppc&utm_campaign=dm-aggregators-main_b2c-rf-paid_cpa_applicant_feed',
	},
	{
		work: 'Разнорабочий',
		salary: 'Договорная',
		url: 'https://norilsk.hh.ru/vacancy/94679611?utm_source=rabota1000.ru&utm_medium=ppc&utm_campaign=dm-aggregators-main_b2c-rf-paid_cpa_applicant_feed',
	},
	{
		work: 'Горнорабочий',
		salary: 'до 170 000 ₽ до вычета налогов',
		url: 'https://norilsk.hh.ru/vacancy/94208969?utm_source=rabota1000.ru&utm_medium=ppc&utm_campaign=dm-aggregators-main_b2c-rf-paid_cpa_applicant_feed',
	},
	{
		work: 'Шахтный электрик',
		salary: 'от 75 000 ₽ на руки',
		url: 'https://norilsk.hh.ru/vacancy/94510962?utm_source=rabota1000.ru&utm_medium=ppc&utm_campaign=dm-aggregators-main_b2c-rf-paid_cpa_applicant_feed',
	},
	{
		work: 'Горный мастер',
		salary: 'от 180 000 до 180 000 ₽ на руки',
		url: 'https://norilsk.hh.ru/vacancy/95381065?utm_source=rabota1000.ru&utm_medium=ppc&utm_campaign=dm-aggregators-main_b2c-rf-paid_cpa_applicant_feed',
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

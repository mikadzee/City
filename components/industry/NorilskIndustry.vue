<template>
	<section class="industry farro-light">
		<div class="norilsk-industry-descript">
			<h2 class="title" data-aos="fade-left">О промышленности Норильска</h2>

			<div class="norilsk-industry-descript-content" data-aos="fade-up">
				<div class="industry-text" >
					<p>
						Промышленность Норильска – это мощный сердцевинный комплекс, который является краеугольным камнем экономики не только самого города, но и всего Красноярского края. Ключевое место занимает Норильский горно-металлургический комбинат, один из крупнейших производителей никеля и палладия в мире. Огромные месторождения этих и других ценных металлов, таких как медь, кобальт и платина, делают Норильск стратегически важным промышленным центром на глобальной арене.
					</p>

					<div v-if="checkLearing">
						<p>
							С момента своего основания в 1930-х годах, промышленные предприятия Норильска беспрерывно развивались, приспосабливаясь к суровым условиям Крайнего Севера. Особенностью местной промышленности является её высокая степень вертикальной интеграции: от добычи и обогащения руды до выплавки металла и его дальнейшей переработки.
						</p>

						<p>
							Инновационные технологии и передовое оборудование позволяют эффективно использовать природные ресурсы, сокращая при этом воздействие на окружающую среду. В Норильске активно внедряются новейшие экологические стандарты и системы очистки выбросов, направленные на минимизацию экологического следа промышленного производства.
						</p>

						<p>
							Работа в условиях крайнего севера требует от предприятий особого подхода к организации труда. Здесь созданы уникальные социальные условия для работников промышленных объектов: обеспечение комфортным жильем, возможности для отдыха и развития, а также специальные льготы и компенсации.
						</p>

						<p>
							Норильский промышленный кластер не только обеспечивает значительную часть доходов края и страны, но и является местом притяжения для высококвалифицированных специалистов и инженеров, стремящихся принять участие в развитии крупнейших промышленных проектов.
						</p>

						<p>
							Таким образом, промышленность Норильска представляет собой синтез традиций и инноваций, непреклонную силу человеческого труда и бесконечные возможности арктической земли, что делает её важнейшим активом российской и мировой экономики.
						</p>
					</div>
				</div>

				<p v-if="!checkLearing" @click="checkLearing = !checkLearing">Читать еще >></p>
				<p v-else @click="checkLearing = !checkLearing">Закрыть</p>
			</div>
		</div>

		<div class="norilsk-industry-main">
			<div class="norilsk-industry-main-title ">
				<h2 class="title" data-aos="fade-left">Промышленность Норильска: Жизненная Сила Севера</h2>
			</div>
			<div class="norilsk-industry-main-description" data-aos="fade-up">
				<div class="fact" v-for="info in factsIndustry" data-aos="fade-up">
					<p>
						{{ info.fact }}
					</p>
				</div>
			</div>
		</div>

		<div class="norilsk-division">
			<div class="norilsk-division-title">
				<h2 class="title" data-aos="fade-left">Норильский дивизион</h2>
			</div>

			<div class="norilsk-division-description" data-aos="fade-up">
				<p>
					Норильский дивизион — ключевой производственный актив «Норникеля». Он
					включает в себя полный цикл производства металлов — от добычи руды до
					отгрузки готовой продукции. Активы расположены в России на полуострове
					Таймыр, на севере Красноярского края. Норильский дивизион
					разрабатывает крупнейшие месторождения в портфеле Компании.
					Транспортное сообщение с другими регионами страны осуществляется по р.
					Енисей и Северному морскому пути, а также по воздуху.
				</p>

				<div class="progress2020">
					<h2 class="progress2020-title">Ключевые показатели 2020 года</h2>

					<div class="statistic">
						<img
							src="https://nornickel.ru/images/business/assets/norilsk-devision/front-graph-1.svg"
							alt=""
						data-aos="fade-up" />
						<img
							src="https://nornickel.ru/images/business/assets/norilsk-devision/front-graph-2.svg"
							alt=""
						 data-aos="fade-up" />

						<div class="statistic-result" data-aos="fade-left">
							<p><span>17,5</span>млн т</p>
							<p>Объем добычи руды</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="less" scoped>
.title {
	padding: 20px;
	width: 100%;
	overflow: hidden;
	font-size: 40px;
	position: relative;

	&::after {
		margin-left: 10px;
		content: '';
		width: 100%;
		height: 1px;
		background: #fff;
		position: absolute;
		top: 50%;
	}
}
.industry {
	& .norilsk-industry {
		display: flex;
		align-items: center;

		& .norilsk-industry-image {
			margin-right: 30px;

			& > img {
				width: 350px;
				border-radius: 15px;
			}
		}

		& .norilsk-industry-description {
			max-width: 700px;
			font-size: 25px;
		}
	}

	& .norilsk-industry-descript {
		overflow: hidden;

		& .norilsk-industry-descript-content {
			margin: auto;
			background: #00a6ff;
			border-radius: 5px;
			box-shadow: 0px 0px 5px #000;
			padding: 20px;
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			line-height: 1.6; 
			max-width: 800px;

			& > p {
				cursor: pointer;
			}

			& .industry-text {

				& > p {
					margin-bottom: 1em;
					text-align: justify;
					font-size: 1rem;

				}
				& > div {
					
					& > p {
						margin-bottom: 1em;
						text-align: justify;
						font-size: 1rem;
					}
				}
			}
		}
	}
	 
	& .norilsk-industry-main {
		margin: 50px 0px;

		& .norilsk-industry-main-title {
			overflow: hidden;
		}

		& .norilsk-industry-main-description {
			padding: 200px 50px;
			background-image: url('@/assets/images/industry.jpg');
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center center;
			display: flex;
			gap: 30px;

			& .fact {
				padding: 20px 10px;
				border-radius: 15px;
				background-color: #00000086;
				backdrop-filter: blur(1px);
				width: 600px;
				& > p {
					padding: 20px;
					line-height: 1.6;
					font-size: 18px;
					letter-spacing: 0.5px;
				}
			}

			@media (max-width: 568px) {
				padding: 15px;
				font-size: 16px;
			}
		}
	}

	& .norilsk-division {
		overflow: hidden;
		& .norilsk-division-title {
			display: flex;
			align-items: center;
		}

		& .norilsk-division-description {
			padding: 50px 100px;
			background-image: url('@/assets/images/norilsk-nornikel-division.jpg');
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center center;

			& > p {
				font-size: 25px;
			}

			& .progress2020 {
				margin-top: 100px;

				& .progress2020-title {
				}

				& .statistic {
					margin-top: 30px;
					margin-left: 50px;
					display: flex;
					align-items: center;
					gap: 50px;

					& .statistic-result {

						& > p {
							display: flex;
							align-items: center;
							font-size: 20px;

							& > span {
								font-size: 64px;
							}
						}
					}
				}
			}
		}
	}
}
</style>

<script setup>
const factsIndustry = [
	{
		fact: 'Норильск является одним из важнейших промышленных городов России, занимающим лидирующие позиции в мировой металлургии.',
	},
	{
		fact: 'В Норильске добываются и перерабатываются такие ценные ресурсы, как никель, медь, кобальт и платиновые металлы.',
	},
	{
		fact: 'НГМК — сердце города, которое обеспечивает работой тысячи жителей и вносит значительный вклад в экономику страны.',
	},
	{
		fact: 'Норильск сталкивается с вызовами, связанными с экологической безопасностью и устойчивым развитием.',
	},
]
const checkLearing = ref(false);
</script>

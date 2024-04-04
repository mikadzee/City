<template>
	<section class="industry farro-light">
		<div class="industry-info">
			<h2 class="title" data-aos="fade-left">О промышленности Норильска</h2>

			<div class="industry-info-content" data-aos="fade-up">
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
				<h2 class="title" data-aos="fade-left">Факты</h2>
			</div>
			<div class="norilsk-industry-main-description" data-aos="fade-up">
				<div class="fact" v-for="info in factsIndustry" data-aos="fade-up">
					<p>
						{{ info.fact }}
					</p>
				</div>
			</div>
		</div>

		<div class="nornikel">
			<div class="nornikel-title">
				<h2 class="title" data-aos="fade-left">Норникель</h2>
			</div>

			<div class="nornikel-body" data-aos="fade-up">
				<p class="nornikel-body-title" data-aos="fade-up">
					«<span>Норильский никель</span>»(Норникель) — лидер горно-металлургической промышленности в России и в мире. Крупнейшие предприятия компании расположены в районе Норильск–Талнах у реки Енисей на севере Сибири.
				</p>

				<div class="nornikel-body-metal" data-aos="fade-up">
					<h3>Металлы Норникеля</h3>

					<div class="metals">
						<div class="metal nikel" data-aos="fade-up">
							<p>Никель</p>

							<div class="metal-info">
								<p>Никель используется во многих отраслях промышленности, включая производство нержавеющей стали, сплавов, аккумуляторов и электроники.</p>
							</div>
						</div>
						<div class="metal copper" data-aos="fade-up">
							<p>Медь</p>

							<div class="metal-info">
								<p>Медь широко используется в электротехнике, строительстве, производстве транспортных средств и во многих других отраслях.</p>
							</div>
						</div>
						<div class="metal palladium" data-aos="fade-up">
							<p>Палладий</p>
							<div class="metal-info">
								<p>Палладий используется в различных отраслях промышленности, но основное его применение – в автомобильной промышленности.</p>
							</div>
						</div>
						<div class="metal platinum" data-aos="fade-up">
							<p>Платина</p>
							<div class="metal-info">
								<p>Платина используется в автомобильных катализаторах, а также в химической промышленности, медицине, нефтепереработке и ювелирном деле.</p>
							</div>
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
		content: '';
		margin-left: 10px;
		width: 100%;
		height: 1px;
		background: #fff;
		position: absolute;
		top: 50%;
	}

	@media (max-width: 600px) {
		font-size: 25px;
		
	}
	@media (max-width: 500px) {
		font-size: 15px;
		
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

	& .industry-info {
		overflow: hidden;

		& .industry-info-content {
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
			flex-wrap: wrap;
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
	
	& .nornikel {

		& .nornikel-title {
			overflow: hidden;
			
		}
		
		& .nornikel-body {
			padding: 50px;
			background-image: url("@/assets/images/nornikel-mine.jpg");
			background-position: center;
			background-size: cover;
			
			@media (max-width: 550px) {
				padding: 25px;
				
			}

			& .nornikel-body-title {
				margin-bottom: 100px;
				padding: 50px;
				background-color: #0000008d;
				backdrop-filter: blur(10px);
				font-size: 20px;
				
				@media (max-width: 550px) {
					font-size: 15px;
					
				}
				@media (max-width: 480px) {
					font-size: 15px;
					
				}
			}

			& .nornikel-body-metal {
				padding: 40px;
				border-radius: 0px 50px 50px 0px;
				background-image: url("@/assets/images/nornikel-metals.jpg");

				& > h3 {
					margin-bottom: 50px;
					font-size: 22px;
				}

				& .metals {
					display: flex;
					flex-wrap: wrap;
					gap: 10px;
					
					& .metal {
						padding: 30px;
						font-size: 18px;
						border-radius: 0px 20px 0px 20px;
						cursor: default;
						
						@media (max-width: 500px) {
							padding: 14px;
							font-size: 14px;
							
						}
						
						& > p {
							color: #000000;

						}

						& .metal-info {
							padding: 10px;
							opacity: 0;
							position: absolute;
							margin-top: 40px;
							transform: translate(-45px, 0px);
							max-width: 300px;
							font-size: 15px;
							background: #a200ff;
							border-radius: 15px;
							transition: all 0.5s ease;
						}

						&:hover {
							
							& .metal-info {
								opacity: 1;

								&:hover {
									opacity: 0;
								}
							}
						}
					}

					& .nikel {
						background: #c5c9c7;
					}
					& .copper {
						background: #b87333;
					}
					& .palladium {
						background: #b1b1b1;
					}
					& .platinum {
						background: #E5E4E2;
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

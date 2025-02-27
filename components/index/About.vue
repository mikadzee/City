<template>
	<section class="about farro-light">
		<div class="about-body">

			<div class="about-info" data-aos="fade-up">
				<img src="@/assets/images/photo_2024-04-04_18-55-08.jpg" alt="">
				<p><span>Норильск</span> - это город в Красноярском крае России, расположенный к югу от западного полуострова
					Таймыр, примерно в 90 км к востоку от реки Енисей и в 1500 км к северу от Красноярска. Норильск находится в
					300 км к северу от Северного Полярного Круга и в 2400 км от Северного Полюса. Это самый северный город мира с
					численностью населения более 150 тысяч человек. Норильск является одним из крупнейших в мире центров добычи
					никеля и палладия. Кроме того, здесь добывают медь, кобальт, платину и другие драгоценные и цветные металлы.
					Экономика города во многом зависит от деятельности крупнейшего в городе предприятия - Норильского никелевого
					комбината.</p>
			</div>


			<div class="municipal-services" data-aos="fade-up">
				<h2 data-aos="fade-up">Популярные муниципальные услуги</h2>

				<div class="municipal-services-content">

					<div class="municipal-service" v-for="info in listServicesSity" data-aos="fade-up">

						<div class="municipal-service-info">
							<h2>{{ info.title }}</h2>
						</div>

						<img :src="info.icon" alt="">

						<div class="municipal-service-description">
							<p>{{ info.description }}</p>
						</div>
					</div>
				</div>
			</div>

			<div class="history" data-aos="fade-up">
				<h2>О Норильске</h2>

				<div class="history-norilsk" data-aos="fade-up">
					<div class="history-norilsk-header" @click="getActiveHistory('norilskHistory')">
						<h2>История Норильска</h2>

						<div class="curcle">
							<div class="plus" :class="{ 'active': activeHistory === 'norilskHistory' ? true : false }"></div>
						</div>
					</div>

					<div class="history-norilsk-content"
						:class="{ 'active-content': activeHistory === 'norilskHistory' ? true : false, 'history-norilsk-content': activeHistory !== 'norilskHistory' ? true : false }">
						<p>
							История Норильска начинается с 1920-х годов, когда были открыты богатые месторождения никеля, меди и
							других ценных металлов. В 1935 году началось строительство города и Норильского горно-металлургического
							комбината. Развитие города и промышленности шло быстрыми темпами, несмотря на суровые арктические условия
							и использование труда заключенных ГУЛАГа. В послевоенные годы Норильск быстро рос и развивался, становясь
							одним из ключевых промышленных и культурных центров за полярным кругом.
							<br><br>
							Сегодня Норильск является одним из крупнейших городов в российской Арктике и важным центром добычи
							металлов в России. Город известен своей уникальной арктической природой, полярными ночами и явлениями,
							такими как северное сияние. Однако Норильск также сталкивается с серьезными экологическими проблемами,
							связанными с промышленной деятельностью, что ставит перед городом задачу поиска путей устойчивого развития
							и улучшения состояния окружающей среды.
						</p>
					</div>
				</div>

				<div class="history-norilsk" data-aos="fade-up">
					<div class="history-norilsk-header" @click="getActiveHistory('nature')">
						<h2>Природа Норильска</h2>

						<div class="curcle">
							<div class="plus" :class="{ 'active': activeHistory === 'nature' ? true : false }"></div>
						</div>
					</div>

					<div class="history-norilsk-content"
						:class="{ 'active-content': activeHistory === 'nature' ? true : false, 'history-norilsk-content': activeHistory !== 'nature' ? true : false }">
						<p>
							Природа вокруг Норильска богата и разнообразна: от моховых болот и лишайников до заснеженных вершин и
							ледяных плато. Несмотря на суровый климат, здесь обитает множество видов птиц и животных, включая северных
							оленей и леммингов. Также регион славится своими уникальными природными явлениями, такими как северное
							сияние, которое окрашивает ночное небо в завораживающие оттенки зеленого и фиолетового.
						</p>
					</div>
				</div>

				<div class="history-norilsk" data-aos="fade-up">
					<div class="history-norilsk-header" @click="getActiveHistory('culture')">
						<h2>Культура Норильска</h2>

						<div class="curcle">
							<div class="plus" :class="{ 'active': activeHistory === 'culture' ? true : false }"></div>
						</div>
					</div>

					<div class="history-norilsk-content"
						:class="{ 'active-content': activeHistory === 'culture' ? true : false, 'history-norilsk-content': activeHistory !== 'culture' ? true : false }">
						<p>
							Культурная жизнь Норильска поражает своим разнообразием и богатством, несмотря на удаленное географическое
							положение города. Норильск активно поддерживает культурные традиции, предоставляя жителям и гостям города
							множество возможностей для творчества и самовыражения.
						</p>
						<ul>
							<li>Театры и кино</li>
							<li>Музеи и выставки</li>
							<li>Библиотеки</li>
							<li>Фестивали и праздники</li>
							<li>Музыка и танцы</li>
							<li>Образовательные учреждения</li>
						</ul>

						<p>Культура Норильска – это плавильный котел традиций и инноваций, где каждый может найти что-то для себя и
							получить незабываемые впечатления от встречи с искусством в самом сердце Арктики.</p>
					</div>
				</div>

				<div class="history-norilsk" data-aos="fade-up">
					<div class="history-norilsk-header" @click="getActiveHistory('architecture')">
						<h2>Архитектура Норильска</h2>

						<div class="curcle">
							<div class="plus" :class="{ 'active': activeHistory === 'architecture' ? true : false }"></div>
						</div>
					</div>

					<div class="history-norilsk-content"
						:class="{ 'active-content': activeHistory === 'architecture' ? true : false, 'history-norilsk-content': activeHistory !== 'architecture' ? true : false }">
						<p>
							Архитектура Норильска представляет собой уникальное сочетание индустриального наследия и арктического
							модернизма. Город, построенный в период советской эпохи, отражает исторический контекст своего времени с
							монументальными зданиями и строгими линиями.
						</p>
						<ul>
							<li><label>Советский период:</label>
								<p>Многие здания в Норильске были построены в средине 20 века, в эпоху советского конструктивизма и
									сталинизма. Эти структуры характеризуются массивными формами, симметричными фасадами и использованием
									промышленных материалов, таких как бетон и сталь. Примеры такой архитектуры включают здание
									Норильского горно-металлургического комбината и различные жилые комплексы города.</p>
							</li>

							<li><label>Послевоенное развитие</label>
								<p>В послевоенные годы архитектурный стиль Норильска начал включать элементы более позднего советского
									модернизма, с его функциональностью и простыми формами. Эти новые постройки были более легкими и
									воздушными, с большим количеством стекла и яркими акцентами в дизайне.</p>
							</li>

							<li><label>Жилые районы</label>
								<p>Характерной чертой архитектуры Норильска являются его многоэтажные жилые дома, многие из которых были
									спроектированы для выживания в экстремальных условиях Крайнего Севера. Они обеспечивают тепло и
									комфорт для жителей в условиях длительных зим и низких температур.</p>
							</li>

							<li><label>Современные тенденции</label>
								<p>В последние годы в Норильске начали появляться здания современной архитектуры, которые включают в
									себя элементы стекла, металла и других современных материалов, при этом сохраняя функциональность,
									необходимую для сурового климата.</p>
							</li>

							<li><label>Общественные пространства</label>
								<p>Городские площади и парки Норильска играют важную роль в общественной жизни города, предлагая
									открытое пространство для отдыха и мероприятий. Они обычно оформлены в лаконичном стиле с
									использованием элементов ландшафтного дизайна, приспособленных к местному климату.</p>
							</li>

							<li><label>Культурное наследие</label>
								<p>Несмотря на то, что Норильск является относительно молодым городом, его архитектура уже стала частью
									культурного наследия региона, отражая уникальные адаптации к жизни в условиях Арктики и важность
									промышленного развития в истории города.</p>
							</li>
						</ul>

					</div>
				</div>

			</div>

			<div class="directions-works" data-aos="fade-up">

				<h2>Направления работы</h2 data-aos="fade-up">
				<div class="directions" data-aos="fade-up">
					<div class="work" v-for="work in listWorksSity">
						<div class="work-info">
							<h2>{{ work.title }}</h2>
						</div>

						<img :src="work.icon" alt="111111111111111" />

						<div class="work-description">
							<p>{{ work.description }}</p>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>
</template>
<style lang="less" scoped>
.about {

	& .about-body {
		padding: 50px 100px;

		@media (max-width: 1000px) {
			padding: 0px 0px;

		}

		& .about-info {
			margin: 50px auto;
			align-items: center;
			display: flex;

			&>img {
				width: 40vw;
				height: 31vw;

			}

			&>p {
				margin: 0 30px;
				line-height: 1.6;
				min-width: 150px;

				&>span {
					font-size: 34px;
					font-weight: bold;

				}

			}
		}

		& .municipal-services {

			&>h2 {
				margin-bottom: 20px;
				margin-left: 20px;
				margin-top: 20px;
				font-size: 24px;
			}

			& .municipal-services-content {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				gap: 10px;

				& .municipal-service {
					padding: 10px 0px;
					margin: 10px 0px;
					margin-bottom: 20px;
					width: 300px;
					display: flex;
					border-radius: 5px;
					background: #3735cb16;
					border: 1px solid #ffffff0e;
					box-shadow: none;
					cursor: default;
					transition: all 0.5s ease;

					& .municipal-service-info {

						&>h2 {
							padding: 10px;
							font-size: 1rem;
							min-width: 150px;

							}
						}


					&>img {
						width: 100px;
						height: 100px;

					}

					& .municipal-service-description {
						padding: 10px;
						position: absolute;
						transform: translate(0px, 100px);
						background: #000;
						max-width: 300px;
						font-size: 15px;
						opacity: 0;
						transition: all 0.5s ease;

					}

					&:hover {

						& .municipal-service-description {
							opacity: 1;

							&:hover {
								opacity: 0;
							}
						}

					}

				}

			}
		}

		& .history {
			margin: 50px 0px;

			&>h2 {
				margin-left: 20px;
				margin-bottom: 40px;
			}

			& .history-norilsk-header {
				padding: 10px;
				display: flex;
				border: 1px solid #ffffff54;
				align-items: center;
				cursor: default;

				&>h2 {
					margin-right: auto;

				}

				& .curcle {
					width: 30px;
					height: 30px;
					border-radius: 50px;
					border: 1px solid #fff;

					& .plus {
						position: relative;
						left: 5px;
						top: 5px;
						cursor: pointer;

						&::after {
							content: "";
							position: absolute;
							width: 2px;
							height: 20px;
							transition: all 0.3s ease;
							top: 0;
							left: 9px;
							background-color: #fff;
						}

						&::before {
							content: "";
							position: absolute;
							width: 20px;
							height: 2px;
							top: 9px;
							left: 0;
							background-color: #fff;
						}

						&.active::after {
							transform: rotate(90deg);
						}
					}
				}
			}

			& .history-norilsk-content {
				max-height: 0px;
				background-color: #0084ff;
				transition: all 0.5s ease;
				overflow: hidden;
				border-radius: 4px;
				font-family: 'Arial', sans-serif;
				box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
				&>p {
					margin-bottom: 10px;
					font-size: 16px;
					text-align: justify;
					line-height: 1.6;
					padding: 10px;
				}
				
				&>ul {
					margin-left: 20px;
					
					&>li {
						text-align: justify;
						margin-bottom: 10px;
					}
				}
			}

			& .active-content {
				max-height: 1100px;
				transition: all 2s ease;
			}
		}

		& .directions-works {

			&>h2 {
				margin-bottom: 20px;
				margin-left: 20px;
				margin-top: 20px;
				font-size: 24px;
			}

			& .directions {
				padding: 0px 50px;

				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				gap: 10px;

				& .work {
					padding: 10px 0px;
					margin: 10px 0px;
					display: flex;
					border-radius: 5px;
					background: #3735cb16;
					width: 300px;
					max-height: 500px;
					min-height: 60px;
					margin-bottom: 20px;
					border: 1px solid #ffffff0e;
					box-shadow: none;
					cursor: default;
					transition: all 0.5s ease;

					& .work-info {
						flex-grow: 1;

						&>h2 {
							padding: 10px;
							font-size: 1rem;
							min-width: 150px;
						}

					}

					& .work-description {
						padding: 10px;
						position: absolute;
						transform: translate(0px, 100px);
						background: #000;
						max-width: 300px;
						font-size: 15px;
						opacity: 0;
						transition: all 0.5s ease;

					}

					&>img {
						width: 100px;
						height: 100px;
					}

					&:hover {

						& .work-description {
							opacity: 1;

							&:hover {
								opacity: 0;
							}
						}
					}
				}
			}
		}
	}

	@media (max-width:560px) {
		& .about-body {
				padding: 0px 0px;

			& .about-info {
				margin: 20px auto;
				align-items: center;
				display: flex;


				&>img {
					display: none;
				}

				&>p {
					margin: 0 20px;
					line-height: 1.6;
					min-width: 150px;
					text-align: justify;
					&>span {
						font-size: 24px;
						font-weight: bold;

					}

				}
			}

			& .municipal-services {

				&>h2 {
					margin-bottom: 20px;
					margin-left: 20px;
					margin-top: 20px;
					font-size: 24px;
				}

				& .municipal-services-content {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 5px;

					& .municipal-service {
						padding: 10px 20px;
						margin-bottom: 30px;
						width: 200px;
						height: 70px;
						display: flex;
						border-radius: 5px;
						background: #3735cb16;
						border: 1px solid #ffffff0e;
						box-shadow: none;
						cursor: default;
						transition: all 0.5s ease;

						& .municipal-service-info {

							&>h2 {
								padding: 10px;
								min-width: 150px;
								font-size: 14px;
							}

						}

						&>img {
							width: 50px;
							height: 50px;
						}

						& .municipal-service-description {
							padding: 10px;
							position: absolute;
							background: #000;
							max-width: 300px;
							opacity: 0;
							transition: all 0.5s ease;
							font-size: 14px;
							transform: translate(-20px, 50px);
						}

						&:hover {

							& .municipal-service-description {
								opacity: 1;

								&:hover {
									opacity: 0;
								}
							}

						}

					}
				}
			}

			& .history {
				margin: 50px 0px;

				&>h2 {
					margin-left: 20px;
					margin-bottom: 40px;
				}

				& .history-norilsk-header {
					padding: 10px;
					display: flex;
					border: 1px solid #ffffff54;
					align-items: center;
					cursor: default;

					&>h2 {
						margin-right: auto;

					}

					& .curcle {
						width: 30px;
						height: 30px;
						border-radius: 50px;
						border: 1px solid #fff;

						& .plus {
							position: relative;
							left: 5px;
							top: 5px;
							cursor: pointer;

							&::after {
								content: "";
								position: absolute;
								width: 2px;
								height: 20px;
								transition: all 0.3s ease;
								top: 0;
								left: 9px;
								background-color: #fff;
							}

							&::before {
								content: "";
								position: absolute;
								width: 20px;
								height: 2px;
								top: 9px;
								left: 0;
								background-color: #fff;
							}

							&.active::after {
								transform: rotate(90deg);
							}
						}
					}
				}

				& .history-norilsk-content {
					max-height: 0px;
					background-color: #0084ff;
					transition: all 0.5s ease;
					overflow: hidden;
					border-radius: 4px;
					font-family: 'Arial', sans-serif;
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
					text-align: justify;
					
					&>p {
						width: 90%;
						margin-bottom: 10px;
						font-size: 16px;
						line-height: 1.6;
						padding: 10px;
					}
					
					&>ul {
						width: 90%;
						margin-left: 20px;

						&>li {
							margin-bottom: 10px;
						}
					}
				}

				& .active-content {
					max-height: 1100px;
					transition: all 2s ease;
				}
			}

			& .directions-works {

				&>h2 {
					margin-bottom: 20px;
					margin-left: 20px;
					margin-top: 20px;
					font-size: 24px;
				}

				& .directions {
					padding: 0px 0px;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					gap: 5px;

					& .work {
						padding: 10px 20px;
						margin-bottom: 50px;
						border-radius: 8px;
						width: 200px;
						border: 1px solid #ffffff0e;
						box-shadow: none;
						cursor: default;
						transition: all 0.5s ease;
						font-size: 15px;

						& .work-info {
						flex-grow: 1;
						
						&>h2 {
							padding: 10px;
							font-size: 13px;
							min-width: 150px;
						}

						}

						& .work-description {
							padding: 10px;
							position: absolute;
							transform: translate(0px, 50px);
							background: #000;
							max-width: 300px;
							font-size: 13px;
							opacity: 0;
							transition: all 0.5s ease;

						}

						&>img {
							width: 100px;
							height: 100px;

							@media (max-width: 600px) {
								width: 50px;
								height: 50px;
							}
						}

						&:hover {

							& .work-description {
								opacity: 1;

								&:hover {
									opacity: 0;
								}
							}
						}
					}
				}
			}
		}
	}
	@media (max-width:460px) {
		& .about-body {
				padding: 0px 0px;

			& .about-info {
				margin: 20px auto;
				align-items: center;
				display: flex;


				&>img {
					display: none;
				}

				&>p {
					margin: 0 20px;
					line-height: 1.6;
					min-width: 150px;
					text-align: justify;
					&>span {
						font-size: 24px;
						font-weight: bold;

					}

				}
			}

			& .municipal-services {

				&>h2 {
					margin-bottom: 20px;
					margin-left: 20px;
					margin-top: 20px;
					font-size: 24px;
				}

				& .municipal-services-content {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 5px;

					& .municipal-service {
						padding: 10px 0px;
						margin: 10px 0px;
						margin-bottom: 10px;
						width: 300px;
						height: 60px;
						display: flex;
						border-radius: 5px;
						background: #3735cb16;
						border: 1px solid #ffffff0e;
						box-shadow: none;
						cursor: default;
						transition: all 0.5s ease;

						& .municipal-service-info {

							&>h2 {
								padding: 10px;
								min-width: 150px;
								font-size: 14px;
							}

						}

						&>img {
							width: 50px;
							height: 50px;
						}

						& .municipal-service-description {
							padding: 10px;
							position: absolute;
							background: #000;
							max-width: 300px;
							opacity: 0;
							transition: all 0.5s ease;
							font-size: 12px;
							transform: translate(0px, 50px);
						}

						&:hover {

							& .municipal-service-description {
								opacity: 1;

								&:hover {
									opacity: 0;
								}
							}

						}

					}
				}
			}

			& .history {
				margin: 50px 0px;

				&>h2 {
					margin-left: 20px;
					margin-bottom: 40px;
				}

				& .history-norilsk-header {
					padding: 10px;
					display: flex;
					border: 1px solid #ffffff54;
					align-items: center;
					cursor: default;

					&>h2 {
						margin-right: auto;

					}

					& .curcle {
						width: 30px;
						height: 30px;
						border-radius: 50px;
						border: 1px solid #fff;

						& .plus {
							position: relative;
							left: 5px;
							top: 5px;
							cursor: pointer;

							&::after {
								content: "";
								position: absolute;
								width: 2px;
								height: 20px;
								transition: all 0.3s ease;
								top: 0;
								left: 9px;
								background-color: #fff;
							}

							&::before {
								content: "";
								position: absolute;
								width: 20px;
								height: 2px;
								top: 9px;
								left: 0;
								background-color: #fff;
							}

							&.active::after {
								transform: rotate(90deg);
							}
						}
					}
				}

				& .history-norilsk-content {
					max-height: 0px;
					background-color: #0084ff;
					transition: all 0.5s ease;
					overflow: hidden;
					border-radius: 4px;
					font-family: 'Arial', sans-serif;
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
					text-align: justify;
					
					&>p {
						width: 90%;
						margin-bottom: 10px;
						font-size: 16px;
						line-height: 1.6;
						padding: 10px;
					}
					
					&>ul {
						width: 90%;
						margin-left: 20px;

						&>li {
							margin-bottom: 10px;
						}
					}
				}

				& .active-content {
					max-height: 1100px;
					transition: all 2s ease;
				}
			}

			& .directions-works {

				&>h2 {
					margin-bottom: 20px;
					margin-left: 20px;
					margin-top: 20px;
					font-size: 24px;
				}

				& .directions {
					padding: 0px 50px;

					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					gap: 10px;

					& .work {
						padding: 10px 20px;
						margin: 0px 0px;
						border-radius: 8px;
						width: 300px;
						margin-bottom: 10px;
						border: 1px solid #ffffff0e;
						box-shadow: none;
						cursor: default;
						transition: all 0.5s ease;
						font-size: 15px;

						& .work-info {
						flex-grow: 1;
						
						&>h2 {
							padding: 10px;
							font-size: 13px;
							min-width: 150px;
						}

						}

						& .work-description {
							padding: 10px;
							position: absolute;
							transform: translate(0px, 50px);
							background: #000;
							max-width: 300px;
							font-size: 13px;
							opacity: 0;
							transition: all 0.5s ease;

						}

						&>img {
							width: 100px;
							height: 100px;

							@media (max-width: 600px) {
								width: 50px;
								height: 50px;
							}
						}

						&:hover {

							& .work-description {
								opacity: 1;

								&:hover {
									opacity: 0;
								}
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

import mine from "@/assets/images/work/mine-industry-work.png";
import metallurgy from "@/assets/images/work/metallurgy-industry-work.webp";
import nature from "@/assets/images/work/nature-industry-work.jpg";
import transparent from "@/assets/images/work/transparent-industry-work.png";
import infrastructure from "@/assets/images/work/infrastructure-industry-work.png";
import advertising from "@/assets/images/work/advertising-industry-work.png";

import communalServices from "@/assets/images/municipal-services/communal-services.png";
import transport from "@/assets/images/municipal-services/transport.png";
import medical from "@/assets/images/municipal-services/medical services.png";
import educational from "@/assets/images/municipal-services/educational-services.png";
import socialSupport from "@/assets/images/municipal-services/social-support.png";

const activeHistory = ref("");


const listWorksSity = ref([
	{
		title: 'Горнодобывающая Промышленность',
		description:
			'Добыча полезных ископаемых, таких как никель, медь и платиновые металлы, является основой экономики города.',
		icon: mine,
	},
	{
		title: 'Металлургия',
		description:
			'Обработка и переработка добытых металлов в Норильском горно-металлургическом комбинате и других металлургических предприятиях.',
		icon: metallurgy,
	},
	{
		title: 'Экология и Охрана Окружающей Среды',
		description:
			'Работа по снижению воздействия промышленности на природу, рекультивация и мониторинг экологической обстановки.',
		icon: nature,
	},
	{
		title: 'Логистика и Транспорт',
		description:
			'Управление и организация транспортировки сырья и готовой продукции, включая железнодорожный и автомобильный транспорт.',
		icon: transparent,
	},
	{
		title: 'Строительство и Инфраструктура',
		description:
			'Cтроительство жилых и промышленных объектов, поддержание и обслуживание существующих зданий и сооружений.',
		icon: infrastructure,
	},
	{
		title: 'Социальные Сервисы',
		description:
			'Образование, здравоохранение, культура и искусство, обеспечение работой социальных учреждений и организаций.',
		icon: advertising,
	},
])

const listServicesSity = ref([
	{
		title: 'Жилищно-коммунальные услуги',
		description:
			'Включают в себя обеспечение жителей города водой, газом, электричеством, отоплением и канализацией.',
		icon: communalServices,
	},
	{
		title: 'Транспортные услуги',
		description:
			'Муниципальный транспорт Норильска обеспечивает перемещение горожан и гостей города.',
		icon: transport,
	},
	{
		title: 'Медицинские услуги',
		description:
			'Предоставление качественной медицинской помощи через городские поликлиники, больницы и скорую помощь.',
		icon: medical,
	},
	{
		title: 'Образовательные услуги',
		description:
			'Работа детских садов, школ, лицеев, гимназий и других образовательных учреждений.',
		icon: transparent,
	},
	{
		title: 'Социальная поддержка',
		description:
			'Программы социальной защиты населения, включая поддержку малоимущих, пенсионеров, инвалидов, многодетных семей и других социально уязвимых групп граждан.',
		icon: educational,
	},
	{
		title: 'Культурные и досуговые услуги',
		description:
			'Организация культурной жизни города, включающая работу театров, музеев, библиотек, культурных центров, а также проведение городских праздников и фестивалей.',
		icon: socialSupport,
	},
])

function getActiveHistory(direction) {
	if (activeHistory.value === direction) return activeHistory.value = "";

	activeHistory.value = direction;
}
</script>

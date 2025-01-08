<template>
	<section class="footer ubuntu-regular">
		<footer class="footer-links">
			<div class="footer-body">
				<div class="container-footer">
					<div class="links-pages">
						<NuxtLink to="/" @click="store.getLink('index')">Главная</NuxtLink>
						<NuxtLink to="/industry" @click="store.getLink('industry')">Промышленность</NuxtLink>
						<NuxtLink to="/attractions" @click="store.getLink('attractions')">Достопримечательности</NuxtLink>
						<NuxtLink to="/districts" @click="store.getLink('districts')">Районы Норильска</NuxtLink>
						<NuxtLink to="/works" @click="store.getLink('works')">Работы</NuxtLink>
					</div>
					<div class="contacts">
						<ul>
							<label>Контакты разработчика</label>
							<li><a href="https://spaceai.dev/">VK</a></li>
							<li><a href="https://t.me/owervase">Telegram</a></li>
							<li><a href="../assets/Норильск.pptx">Презентация</a></li>
						</ul>
					</div>
				</div>
				<div class="logo">@ &&&& &&&&&&&&&</div>
			</div>
		</footer>
	</section>
</template>

<style lang="less" scoped>

body {

}
.footer {
	border-top: 1px solid #fff;
	
	& .footer-links {
		background: rgb(9, 9, 19);

    & .footer-body {
			padding: 0px 200px;
			padding-top: 30px;
			
			& .container-footer {
				display: flex;
				justify-content: space-between;

				& .links-pages {
	
					& > a {
						margin-bottom: 30px;
						color: rgb(255, 255, 255);
						display: block;
						width: 150px;
						font-size: 15px;
						white-space: nowrap; 
						border-radius: 30px;
						position: relative;
						
						@media (max-width: 500px) {
							margin-bottom: 20px;
							width: 80px;
							font-size: 13px;
		
						}
					
						&::before {
							content: '';
							background: #fff;
							width: 0px;
							height: 1.5px;
							position: absolute;
							bottom: -2px;
							transition: width 0.5s;
						}
						&:hover::before {
							width: 100px; 
						}
		
						&:hover {
							animation: bottomLine 1s forwards; 
						}
					}
				}

				& .contacts {
					margin-left: 50px;
					& > ul {

						& > label {
							color: rgb(114, 114, 114);
						}	

						& > li {
							margin-top: 10px;
							
							& > a {
								color: rgb(0, 81, 255);
								
								&:hover {
									text-decoration: underline;
								}
							}
						}
						
						@media (max-width: 500px) {

							& > label {
								font-size: 14px;
								color: rgb(114, 114, 114);
							}	
							
							& > li {
								margin-top: 5px;
								font-size: 13px;
								
							}
		
						}
					}
				}
			}
			@media (max-width: 500px) {
				padding: 0px 10px;
				padding-top: 20px;
			}
			@media (max-width: 800px) {
				padding: 0px 50px;
				padding-top: 20px;
			}


			& .logo {
				padding-bottom: 10px;
				text-align: center;
				font-size: 12px;
				color: rgb(117, 116, 116);
			}
		}
	}
}

@keyframes bottomLine {
	0% {
		width: 0px;
	}
	100% {
		width: 100%;
	}
}
</style>


<script setup>
  import { useActiveLinkStore } from "@/stores/activeLinkStore";

	const store = useActiveLinkStore();
</script>

<template>
	<header class="header ubuntu-regular">
		<div class="header-body">
			<div class="header-logo">
				<NuxtLink to="/" @click="store.getLink('index')"><img src="../assets/images/norilsk-logo.png" alt="" />
				</NuxtLink>
			</div>

			<nav class="nav">
				<ul class="links">
					<li>
						<NuxtLink to="/" @click="store.getLink('index')" :style="{
								color: store.activeLink === 'index' ? '#fff' : '#9CA3AF',
							}">Главная</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/industry" @click="store.getLink('industry')" :style="{
								color: store.activeLink === 'industry' ? '#fff' : '#9CA3AF',
							}">Промышленность</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/attractions" @click="store.getLink('attractions')" :style="{
	color: store.activeLink === 'attractions' ? '#fff' : '#9CA3AF',
							}">Достопримечательности</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/districts" @click="store.getLink('districts')" :style="{
								color: store.activeLink === 'districts' ? '#fff' : '#9CA3AF',
							}">Районы</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/works" @click="store.getLink('works')" :style="{
								color: store.activeLink === 'works' ? '#fff' : '#9CA3AF',
							}">Работа</NuxtLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script setup>
import { useActiveLinkStore } from '@/stores/activeLinkStore'

const store = useActiveLinkStore()

onMounted(() => {
	store.initializeActiveLink()
})
</script>

<style lang="less" scoped>
.header {
	position: relative;

	@media (max-width: 528px) {

	}
	
	& .header-body {
		padding: 10px 0;
  	position: fixed;
  	width: 100%;
  	backdrop-filter: blur(10px);
  	z-index: 1000;
  	background-color: rgba(0, 0, 0, 0.549);
  	display: flex;
  	align-items: center;
  	justify-content: space-between;
		
		@media (max-width: 528px) {
			height: 40px;
		}
		
		@media (max-width: 828px) {
		}
		

		& .header-logo {
			padding-left: 40px;
			margin-right: auto;
			overflow: hidden;
			
			@media (max-width: 528px) {
				padding-left: 0px;

			}
			
			& > a {
				& > img {
					border-radius: 10px;
					width: 100px;
					
					@media (max-width: 528px) {
						padding-left: 40px;
						width: 80px;

					}
					@media (max-width: 458px) {
						margin-right: 50px;
						display: none;
						width: 50px;
					}
					@media (max-width: 1200px) {

					}
				}
			}
		}

		& .nav {
			padding-right: 40px;
			
			@media (max-width: 768px) {
				padding-right: 10px;
			}

			& .links {
				display: flex;
				gap: 30px;
				
				@media (max-width: 600px) {
					gap: 10px;
				}

				& > li {
					& > a {
						
						@media (max-width: 600px) {
							font-size: 12px;
						}
					}
				}
		}
	}
	}
}
</style>

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

		& .header-logo {
			padding-left: 40px;
			margin-right: auto;
			overflow: hidden;

			&>a {
				&>img {
					border-radius: 10px;
					width: 100px;

				}
			}
		}

		& .nav {
			padding-right: 40px;

			& .links {
				display: flex;
				gap: 30px;

				&>li {
					&>a {

					}
				}
			}
		}
	}

	@media (max-width: 528px) {
		& .header-body {
			padding: 10px ;
			height: 50px;
			& .header-logo {
					padding-left: 10px;
					display: none;

				&>a {
					&>img {
						display: none;
					}
				}
			}

			& .nav {
				padding-right: 0px;

				& .links {
					display: flex;
					gap: 10px;

					&>li {
						&>a {

							font-size: 14px;
						}
					}
				}
			}
		}
	}
	@media (max-width: 460px) {
		& .header-body {
			padding: 0px ;
			backdrop-filter: blur(1px);
			height: 60px;

			& .header-logo {
					display: none;

				&>a {
					&>img {
					}
				}
			}

			& .nav {
				padding-right: 0px;

				& .links {
					display: flex;
					gap: 10px;

					&>li {
						&>a {

							font-size: 13px;
						}
					}
				}
			}
		}
	}
	@media (max-width: 400px) {
		& .header-body {
			padding: 10px 10px;
			display: flex;
			backdrop-filter: blur(1px);
			justify-content: center;
			flex-wrap: wrap;
			height: auto;

			& .header-logo {
					display: none;

				&>a {
					&>img {
					}
				}
			}

			& .nav {
				padding-right: 0px;

				& .links {
					display: flex;
					flex-wrap: wrap;
					gap: 15px;

					&>li {
						&>a {

							font-size: 15px;
						}
					}
				}
			}
		}
	}
}
</style>

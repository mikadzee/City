<template>
	<header class="header ubuntu-regular">
		<div class="header-body">
			<div class="header-logo">
				<NuxtLink to="/" @click="store.getLink('index')"
					><img src="../assets/images/norilsk-logo.png" alt=""
				/></NuxtLink>
			</div>

			<nav class="nav">
				<ul class="links">
					<li>
						<NuxtLink
							to="/"
							@click="store.getLink('index')"
							:style="{
								color: store.activeLink === 'index' ? '#fff' : '#9CA3AF',
							}"
							>Главная</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							to="/industry"
							@click="store.getLink('industry')"
							:style="{
								color: store.activeLink === 'industry' ? '#fff' : '#9CA3AF',
							}"
							>Промышленность</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							to="/districts"
							@click="store.getLink('districts')"
							:style="{
								color: store.activeLink === 'districts' ? '#fff' : '#9CA3AF',
							}"
							>Районы Норильска</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							to="/nature"
							@click="store.getLink('nature')"
							:style="{
								color: store.activeLink === 'nature' ? '#fff' : '#9CA3AF',
							}"
							>Природа</NuxtLink
						>
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
	padding: 10px 0px;
	position: absolute;
	width: 100%;
	z-index: 1000;
	background-color: rgba(0, 0, 0, 0.549);
	backdrop-filter: blur(10px);

	& .header-body {
		margin: 0px 100px;
		display: flex;
		align-items: center;

		@media (max-width: 768px) {
    }

		& .header-logo {
			margin-right: auto;
			overflow: hidden;

			@media (max-width: 768px) {
      }

			& > a {
				& > img {
					border-radius: 10px;
					width: 100px;
				}
			}
		}

		& .nav {

			@media (max-width: 768px) {
			}
			& .links {
				display: flex;
				gap: 30px;

				& > li {
					& > a {
					}
				}
		}
	}
	}
}
</style>

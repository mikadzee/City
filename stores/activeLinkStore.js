import { defineStore } from 'pinia';

export const useActiveLinkStore = defineStore({
	id: 'colorLink',
	state: () => ({
		activeLink: '',
	}),
	actions: {
		initializeActiveLink() {
			const route = useRoute()
			switch (route.path) {
				case '/':
					this.activeLink = 'index'
					break
				case '/industry':
					this.activeLink = 'industry'
					break
				case '/districts':
					this.activeLink = 'districts'
					break
				case '/works':
					this.activeLink = 'works'
					break
				case '/attractions':
					this.activeLink = 'attractions'
					break
				default:
					this.activeLink = 'index'
			}
		},
		getLink(link) {
			this.activeLink = link
			console.log(this.activeLink)
		},
	},
})

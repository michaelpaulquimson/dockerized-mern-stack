const SpotifyService = {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	getAccessToken: async function () {
		if (window.sessionStorage.getItem('accessToken') === null) {
			try {
				const response = await fetch(`${process.env.REACT_APP_SPOTIFY_AUTH_URL}?grant_type=client_credentials`, {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'Authorization': 'Basic ' + btoa(process.env.REACT_APP_SPOTIFY_CLIENT_ID + ':' + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET)
					},
					method: 'POST'
				});
				const payload = await response.json();
				const accessToken = payload.access_token;
				window.sessionStorage.setItem('accessToken', accessToken);
				return accessToken;
			} catch (error) {
				return console.log(error);
			}
		} else {
			const accessToken = window.sessionStorage.getItem('accessToken');
			return accessToken;
		}
	},
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	getNewReleaseList: async function () {
		try {
			const response = await fetch(`${process.env.REACT_APP_SPOTIFY_BASE_URL}/browse/new-releases`, {
				method: 'GET',
				headers: { 'Authorization': 'Bearer ' + window.sessionStorage.getItem('accessToken') }
			});
			const payload = await response.json();
			const newReleaseList = payload.albums.items;
			return newReleaseList;
		} catch (error) {
			return console.log(error);
		}
	},
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	getFeaturedPlaylists: async function () {
		try {
			const response = await fetch(`${process.env.REACT_APP_SPOTIFY_BASE_URL}/browse/featured-playlists`, {
				method: 'GET',
				headers: { 'Authorization': 'Bearer ' + window.sessionStorage.getItem('accessToken') }
			});
			const payload = await response.json();
			const featuredPlaylists = payload.playlists.items;
			return featuredPlaylists;
		} catch (error) {
			return console.log(error);
		}
	},
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	getCategoryList: async function () {
		try {
			const response = await fetch(`${process.env.REACT_APP_SPOTIFY_BASE_URL}/browse/categories`, {
				method: 'GET',
				headers: { 'Authorization': 'Bearer ' + window.sessionStorage.getItem('accessToken') }
			});
			const payload = await response.json();
			const categoryList = payload.categories.items;
			return categoryList;
		} catch (error) {
			return console.log(error);
		}
	},
};

export default SpotifyService;
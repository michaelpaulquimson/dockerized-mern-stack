import React, { useEffect, useState } from 'react';
import SpotifyService from '../services/SpotifyService';

const SpotifyContainer: React.FC = () => {
	const [accessToken, setAccessToken] = useState('');
	useEffect(() => {
		getAccessToken();
	}, []);
	useEffect(() => {
		if (accessToken) {
			getCategoryList();
			getFeaturedPlaylists();
			getNewReleaseList();
		}
	}, [accessToken]);
	async function getCategoryList() {
		const categoryList = await SpotifyService.getCategoryList();
		console.log(categoryList);
	}
	async function getFeaturedPlaylists() {
		const featuredPlaylists = await SpotifyService.getFeaturedPlaylists();
		console.log(featuredPlaylists);
	}
	async function getNewReleaseList() {
		const newReleaseList = await SpotifyService.getNewReleaseList();
		console.log(newReleaseList);
	}
	async function getAccessToken() {
		await SpotifyService.getAccessToken();
		const accessToken = window.sessionStorage.getItem('accessToken');
		if (accessToken) setAccessToken(accessToken);
	}
	return(
		<>
			<h1>Spotify Container</h1>
		</>
	);
};

export default SpotifyContainer;

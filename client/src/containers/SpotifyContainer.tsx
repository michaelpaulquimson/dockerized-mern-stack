import React, { useEffect, useState } from 'react';
import SpotifyService from '../services/SpotifyService';
import FeaturedPlaylists from '../components/FeaturedPlaylists';

const SpotifyContainer: React.FC = () => {
	const [accessToken, setAccessToken] = useState('');
	const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [categoryList, setCategoryList] = useState([]);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [newReleaseList, setNewReleaseList] = useState([]);

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
		if (categoryList) setCategoryList(categoryList);
	}

	async function getFeaturedPlaylists() {
		const featuredPlaylists = await SpotifyService.getFeaturedPlaylists();
		if (featuredPlaylists) setFeaturedPlaylists(featuredPlaylists);
	}

	async function getNewReleaseList() {
		const newReleaseList = await SpotifyService.getNewReleaseList();
		if (newReleaseList) setNewReleaseList(newReleaseList);
	}

	async function getAccessToken() {
		await SpotifyService.getAccessToken();
		const accessToken = window.sessionStorage.getItem('accessToken');
		if (accessToken) setAccessToken(accessToken);
	}

	return(
		<>
			<FeaturedPlaylists FeaturedPlaylists={featuredPlaylists} />
		</>
	);
};

export default SpotifyContainer;

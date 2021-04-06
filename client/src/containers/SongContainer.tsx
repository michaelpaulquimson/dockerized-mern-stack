import React, { useEffect, useState } from 'react';
import SongsService from '../services/SongsService';
import { SongProps } from '../models/SongModel';
import SongList from '../components/SongList';

const SongContainer: React.FC = () => {
	const [songList, setSongList] = useState<SongProps[]>([]);
	const [updateSongDetails, setUpdateSongDetails] = useState('');
	const [filterSongByName, setFilterSongByName] = useState('');
	const [filterSongByArtist, setFilterSongByArtist] = useState('');
	const [filterSongByGenre, setFilterSongByGenre] = useState('');

	useEffect(() => {
		getAllSongs();
	}, []);

	async function getAllSongs() {
		const songList = await SongsService.getAllSongs();
		if (songList) setSongList(songList);
	}

	async function filterSongsByQueryParams(name: string, artist: string, genre: string) {
		const songList = await SongsService.filterSongsByQueryParams(name, artist, genre);
		if (songList) setSongList(songList);
	}

	async function createSong(newSong: SongProps) {
		const songToCreate = {
			...newSong
		};
		const createdSong = await SongsService.createSong(newSong);
		songToCreate._id = createdSong._id;
		if (createdSong) {
			setSongList([
				...songList,
				songToCreate
			]);
		}
	}

	async function updateSong(id: string, songToUpdate: SongProps) {
		const updatedSong = await SongsService.updateSong(id, songToUpdate);
		if (updatedSong) {
			setSongList(songList.map(song => {
				if (song._id === id) {
					songToUpdate._id = id;
					return songToUpdate;
				}
				return song;
			}));
		}
	}

	async function deleteSong(id: string) {
		const deletedSong = await SongsService.deleteSong(id);
		if (deletedSong) {
			setSongList(songList.filter(song => song._id !== deletedSong._id));
		}
	}

	return (
		<>
			<h1>Song Container</h1>
			<button onClick={() => getAllSongs()}>Get All Songs</button>
			<br />
			<br />
			<label>ID</label><input value={updateSongDetails} onChange={(e) => setUpdateSongDetails(e.target.value)} />
			<button onClick={() => updateSong(updateSongDetails, {
				name: filterSongByName,
				artist: filterSongByArtist,
				genre: filterSongByGenre
			})}>Update Song</button>
			<button onClick={() => deleteSong(updateSongDetails)}>Delete Song</button>
			<br />
			<br />
			<label>Name</label><input value={filterSongByName} onChange={(e) => setFilterSongByName(e.target.value)} />
			<label>Artist</label><input value={filterSongByArtist} onChange={(e) => setFilterSongByArtist(e.target.value)} />
			<label>Genre</label><input value={filterSongByGenre} onChange={(e) => setFilterSongByGenre(e.target.value)} />
			<button onClick={() => filterSongsByQueryParams(filterSongByName,filterSongByArtist,filterSongByGenre)}>Filter Songs</button>
			<button onClick={() => createSong({
				name: filterSongByName,
				artist: filterSongByArtist,
				genre: filterSongByGenre
			})}>Create Song</button>
			<br />
			<br />
			<SongList SongList={songList} />
		</>
	);
};

export default SongContainer;
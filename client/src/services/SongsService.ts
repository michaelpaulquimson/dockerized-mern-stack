import Song, { SongProps } from '../models/SongModel';

const requestHeaders: HeadersInit = new Headers();
requestHeaders.set('Content-Type', 'application/json');
requestHeaders.set('Access-Control-Allow-Origin', '*');
requestHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
requestHeaders.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
requestHeaders.set('Access-Control-Allow-Credentials', 'true');

const SongsService = {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	getAllSongs: async () => {
		try {
			const requestOptions = {
				method: 'GET',
				headers: requestHeaders
			};
			const response = await fetch(
				`${process.env.REACT_APP_BASE_URL}/api/songs`,
				requestOptions
			);
			const payload = await response.json();
			const songList: SongProps[] = payload.songs ? payload.songs.map((song: SongProps) => new Song(song)) : [];
			return songList;
		} catch (error) {
			return console.log(error);
		}
	},
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	filterSongsByQueryParams: async (name: string, artist: string, genre: string) => {
		try {
			const requestOptions = {
				method: 'GET',
				headers: requestHeaders
			};
			const response = await fetch(
				`${process.env.REACT_APP_BASE_URL}/api/songs/q?name=${name}&artist=${artist}&genre=${genre}`,
				requestOptions
			);
			const payload = await response.json();
			const songList: SongProps[] = payload.songs ? payload.songs.map((song: SongProps) => new Song(song)) : [];
			return songList;
		} catch (error) {
			return console.log(error);
		}
	},
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	createSong: async (newSong: SongProps) => {
		try {
			const requestOptions = {
				method: 'POST',
				headers: requestHeaders,
				body: JSON.stringify(newSong)
			};
			const response = await fetch(
				`${process.env.REACT_APP_BASE_URL}/api/songs`,
				requestOptions
			);
			const createdSong = response;
			return createdSong;
		} catch (error) {
			return console.log(error);
		}
	},
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	updateSong: async (id: string, songToUpdate: SongProps) => {
		try {
			const requestOptions = {
				method: 'PUT',
				headers: requestHeaders,
				body: JSON.stringify(songToUpdate)
			};
			const response = await fetch(
				`${process.env.REACT_APP_BASE_URL}/api/songs/${id}`,
				requestOptions
			);
			const updatedSong = response;
			return updatedSong;
		} catch (error) {
			return console.log(error);
		}
	},
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	deleteSong: async (id: string) => {
		try {
			const requestOptions = {
				method: 'DELETE',
				headers: requestHeaders
			};
			const response = await fetch(
				`${process.env.REACT_APP_BASE_URL}/api/songs/${id}`,
				requestOptions
			);
			const deletedSong = response;
			return deletedSong;
		} catch (error) {
			return console.log(error);
		}
	}
};

export default SongsService;
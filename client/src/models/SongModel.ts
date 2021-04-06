export interface SongProps {
	_id?: string,
	name: string,
	artist: string,
	genre: string
}

class Song {
	_id?: string;
	name: string;
	artist: string;
	genre: string;

	constructor({ _id, name, artist, genre }: SongProps) {
		this._id = _id;
		this.name = name;
		this.artist = artist;
		this.genre = genre;
	}
}

export default Song;
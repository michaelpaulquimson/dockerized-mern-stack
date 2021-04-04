import { Request, Response, NextFunction } from 'express';
const Song = require('../models/songs');

const SongsService = {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	getAllSongs: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const songList = await Song.find();

			if (!songList) return res.status(400).json({ status: 400, message: 'Something went wrong getting the songs' });
			if (songList.length === 0) return res.status(200).json({ status: 200, message: 'No songs found' });

			res.status(200).json({ status: 200, songs: songList });
		} catch (err) {
			next(err);
		}
	},
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	createSong: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const newSong = new Song(req.body);
			const createdSong = await newSong.save();
	
			if (!createdSong) return res.status(400).json({ status: 400, message: 'Something went wrong saving the song' });
	
			res.status(200).json({ status: 200, createdSong: createdSong });
		} catch (err) {
			next(err);
		}
	},
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	updateSong: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { id } = req.params;
			const { name, artist, genre } = req.body;
			const updatedSong = {
				name: name,
				artist: artist,
				genre: genre
			};
			const songToUpdate = await Song.findByIdAndUpdate(id, updatedSong);
	
			if (!songToUpdate) return res.status(400).json({ status: 400, message: 'Something went wrong updating the song' });
	
			res.status(200).json({ status: 200, updatedSong: updatedSong });
		} catch (err) {
			next(err);
		}
	},
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	deleteSong: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { id } = req.params;
			const deletedSong = await Song.findByIdAndDelete(id, req.body);
	
			if (!deletedSong) return res.status(400).json({ status: 400, message: 'Something went wrong deleting the song' });
	
			res.status(200).json({ status: 200, deletedSong: deletedSong });
		} catch (err) {
			next(err);
		}
	}
};

export default SongsService;
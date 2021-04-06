import React from 'react';
import PropTypes from 'prop-types';
import { SongProps } from '../models/SongModel';

interface Props {
	SongList: SongProps[]
}

const SongList: React.FC<Props> = ({ SongList }) => {
	function renderSongList() {
		if (SongList.length === 0) return <div>No songs found</div>;
		return SongList.map(song => {
			return (
				<div key={song._id}>
					<div>ID - {song._id}</div>
					<div>NAME - {song.name}</div>
					<div>ARTIST - {song.artist}</div>
					<div>GENRE - {song.genre}</div>
				</div>
			);
		});
	}
	return (
		<>
			{renderSongList()}
		</>
	);
};

SongList.propTypes = {
	SongList: PropTypes.array.isRequired
};

export default SongList;
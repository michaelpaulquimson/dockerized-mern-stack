import React from 'react';
import PropTypes from 'prop-types';
import { SongProps } from '../models/SongModel';

interface Props {
	SongList: SongProps[]
}

const SongList: React.FC<Props> = ({ SongList }) => {
	function renderSongList() {
		return SongList.map(song => {
			return (
				<div key={song._id}>
					<div>{song._id}</div>
					<div>{song.name}</div>
					<div>{song.artist}</div>
					<div>{song.genre}</div>
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
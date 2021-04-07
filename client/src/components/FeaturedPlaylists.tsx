import React from 'react';
import PropTypes from 'prop-types';

type FeaturedPlaylistsType = { name: string };

interface Props {
	FeaturedPlaylists: FeaturedPlaylistsType[]
}

const FeaturedPlaylists: React.FC<Props> = ({ FeaturedPlaylists }) => {
	function renderFeaturedPlaylists() {
		if (FeaturedPlaylists.length === 0) return <div>No featured playlist</div>;
		return FeaturedPlaylists.map(featuredPlaylist => {
			return (
				<div key={featuredPlaylist.name}>
					<div>{featuredPlaylist.name}</div>
					<br />
				</div>
			);
		});
	}
	return (
		<>
			<h1>Featured Playlists</h1>
			{renderFeaturedPlaylists()}
		</>
	);
};

FeaturedPlaylists.propTypes = {
	FeaturedPlaylists: PropTypes.array.isRequired
};

export default FeaturedPlaylists;
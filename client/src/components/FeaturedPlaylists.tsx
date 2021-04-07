import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Header } from '../components/layouts/LayoutStyles';

const Image = styled.img`
	height: 150px;
	width: 150px;
	border-radius: 6px;
	background-size: cover;
	transition: transform 0.15s ease-in-out;
	cursor: pointer;
	margin: 8px;
`;

const ImageContainer = styled.div`
	display: flex;
	flex-direction: row;
	overflow: auto;
`;

type FeaturedPlaylistsType = { name: string, images: [{ url: string}] };

interface Props {
	FeaturedPlaylists: FeaturedPlaylistsType[]
}

const FeaturedPlaylists: React.FC<Props> = ({ FeaturedPlaylists }) => {
	function renderFeaturedPlaylists() {
		if (FeaturedPlaylists.length === 0) return <div className="m-8">No featured playlist found</div>;
		return FeaturedPlaylists.map(featuredPlaylist => {
			return (
				<div key={featuredPlaylist.name}>
					<Image src={featuredPlaylist.images[0].url} />
					<br />
				</div>
			);
		});
	}
	return (
		<Container>
			<Header>Featured Playlists</Header>
			<ImageContainer>
				{renderFeaturedPlaylists()}
			</ImageContainer>
		</Container>
	);
};

FeaturedPlaylists.propTypes = {
	FeaturedPlaylists: PropTypes.array.isRequired
};

export default FeaturedPlaylists;
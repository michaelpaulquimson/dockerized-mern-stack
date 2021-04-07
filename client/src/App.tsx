import React from 'react';
import SongContainer from './containers/SongContainer';
import SpotifyContainer from './containers/SpotifyContainer';
import { Container } from './components/layouts/Styles';

const App: React.FC = () => {
	return(
		<Container>
			<SpotifyContainer />
			<SongContainer />
		</Container>
	);
};

export default App;

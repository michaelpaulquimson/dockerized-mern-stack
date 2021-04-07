import React from 'react';
import SongContainer from './containers/SongContainer';
import SpotifyContainer from './containers/SpotifyContainer';

const App: React.FC = () => {
	return(
		<>
			<SpotifyContainer />
			<SongContainer />
		</>
	);
};

export default App;

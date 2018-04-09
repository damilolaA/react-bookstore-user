import React from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Audio from '-!svg-react-loader?name=Icon!../components/svg-loaders/audio.svg';

const Loader = () => {

	/*let style = {
		backgroundImage: 'url("../components/svg-loaders/audio.svg") center no-repeat',
		backgroundSize: 'cover',
		height: '100px',
		width: '100px'
	}*/

	return (
		<div className="main" style={{width:'140', height:'64'}}>
			<Audio />
		</div>
	);
}

export default Loader;
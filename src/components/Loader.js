import React from 'react';

const Loader = () => {

	let style = {
		backgroundImage: 'url(" + "../components/svg-loaders/audio.svg" + ") center no-repeat',
		backgroundSize: 'cover',
		height: '100px',
		width: '100px'
	}

	return (
		<div className="main">
			<div style={style}></div>
			<h1>Loading!!!</h1>
		</div>
	);
}

export default Loader;
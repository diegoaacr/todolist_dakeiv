import React from 'react';
import './../css/Header.css'

const Header = ({titulo}) => {
	return (
		<div className="Header">
			<h1>{titulo}</h1>
		</div>
	);
};

export default Header;
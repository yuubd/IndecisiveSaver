import React from 'react';
import hamburger from './hamburger.png';

const Logo = () => {
	return (
		<ul className="pl0 flex flex-row justify-start list">
			<img className="w-40 h-50" src={hamburger} alt="logo" />
			<p className="f3 p3 mt2 fw8 light-yellow">InSa</p>
		</ul>
	);
};

export default Logo;

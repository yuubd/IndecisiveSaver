import React from 'react';
import hamburger from './hamburger.png';
import './Logo.css';

const Logo = () => {
	return (
		<ul className="pl0 flex flex-row justify-start list">
			<img className="w-40 h-50" src={hamburger} alt="logo" />
			<p className="f1 p3 mt2 ma0 fw8 LogoStyl">Truviews</p>
		</ul>
	);
};

export default Logo;
//-webkit-text-stroke-color: #f8d6b7;
//-webkit-text-stroke-width: 1px;

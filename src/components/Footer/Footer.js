import React from 'react';
import './Footer.css';

const Footer = ({ route }) => {
	const divlStyle = 'bg-washed-blue pa0 list flex flex-row justify-between h50 footer';
	const pStyle = 'f7 link dim black underline pa1 pointer fw5 mt0 dark-green';
	return (
		<div className={divlStyle}>
			<li>
				<p className={pStyle}>Menu1</p>
			</li>
			<li>
				<p className={pStyle}>Menu2</p>
			</li>
			<li>
				<p className={pStyle}>Menu3</p>
			</li>
		</div>
	);
};

export default Footer;

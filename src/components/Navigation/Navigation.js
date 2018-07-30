import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = () => {
	const ulStyle = 'bg-washed-blue pa1 ma0 list flex flex-row justify-between';
	const pStyle = 'f7 link dim black underline pa1 pointer fw5 mt0 dark-green';
	return (
		<ul className={ulStyle}>
			<li>
				<Logo />
			</li>
			<li>
				<ul className="pa1 ma0 list flex flex-row">
					<li>
						<p className={pStyle}>Account</p>
					</li>
					<li>
						<p className={pStyle}>SignOut</p>
					</li>
				</ul>
			</li>
		</ul>
	);
};

export default Navigation;

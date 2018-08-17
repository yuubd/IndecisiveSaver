import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = ({ onRouteChange, displayMenu }) => {
	const ulStyle = 'bg-washed-blue pa1 ma0 list flex flex-row justify-between';
	const pStyle = 'f7 link dim black underline pa1 pointer fw5 mt0 dark-green';
	return (
		<ul className={ulStyle}>
			<li>
				<Logo />
			</li>
			<li>
				{displayMenu === 'home' ? (
					<ul className="pa1 ma0 list flex flex-row">
						<li>
							<p className={pStyle}>Account</p>
						</li>
						<li>
							<p onClick={() => onRouteChange('signIn')} className={pStyle}>
								SignOut
							</p>
						</li>
					</ul>
				) : (
					<p className={pStyle}>welcome!</p>
				)}
			</li>
		</ul>
	);
};

export default Navigation;

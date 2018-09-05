import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = (props) => {
	const ulStyle = 'bg-washed-blue pa1 ma0 list flex flex-row justify-between';
	const pStyle = 'f7 link dim black underline pa1 pointer fw5 mt0 dark-green';
	const main = (
		<ul className={ulStyle}>
			<li>
				<Logo />
			</li>
			<li>
				<p className={pStyle}>welcome!</p>
			</li>
		</ul>
	);
	const miniNav = (
		<ul className="bg-washed-blue pa1 ma0 list flex justify-end">
			<li>
				<p className={pStyle}>Account</p>
			</li>
			<li>
				<p onClick={() => props.onRouteChange('signIn')} className={pStyle}>
					SignOut
				</p>
			</li>
		</ul>
	);

	return <div>{props.route === 'signIn' ? main : miniNav}</div>;
};

export default Navigation;

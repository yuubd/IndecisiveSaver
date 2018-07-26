import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = () => {
	return (
		<ul
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				listStyle: 'none',
				margin: 0,
				padding: '0px'
			}}
		>
			<li>
				<Logo />
			</li>
			<li>
				<p className="f6 link dim black underline pa1 pointer fw1 mt0">
					{' '}
					Sign Out{' '}
				</p>
			</li>
		</ul>
	);
};

export default Navigation;

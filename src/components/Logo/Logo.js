import React from 'react';
import foodBasket from './foodBasket.png';

const Logo = () => {
	return (
		<ul
			style={{
				display: 'flex',
				flexDirection: 'row',
				listStyle: 'none',
				justifyContent: 'flex-front',
				paddingLeft: '0'
			}}
		>
			<img
				style={{ width: '30%', height: '30%' }}
				src={foodBasket}
				alt="logo"
			/>
			<p className="logo f3 p3 mt2 fw8">InSa</p>
		</ul>
	);
};

export default Logo;

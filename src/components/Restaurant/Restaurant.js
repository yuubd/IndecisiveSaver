import React from 'react';
import hamburger from './public/hamburger.png';
import './Restaurant.css';

const makeBurger = (id) => {
	return (
		<li key={id}>
			<img className="pa0 ma0 bn mw1" src={hamburger} alt="ham" />
		</li>
	);
};

const fontStyle = 'fw1 pa0 ma0';

const Restaurant = (props) => {
	const burgers = (count) => {
		var burgerCount = count;
		var burgersImg = [];
		while (burgerCount > 0) {
			burgersImg.push(makeBurger(burgerCount));
			burgerCount--;
		}
		return burgersImg;
	};

	return (
		<div className="flex">
			<div className="width-prop">
				<img
					className="pa0 ma0 bn"
					src={require(`${props.imageURL}`)}
					alt={props.imageURL}
				/>
			</div>
<<<<<<< HEAD
			<ul className="text flex list flex-column ma0 pa0">
				<p className="pa0 ma0 fw-b">{props.name}</p>
				<ul className="text flex list ma0 pa0">
					<p className={fontStyle}>{props.visitedBy}</p>
					<ul className="flex flex-row list pa0 ma0 bn">
						{burgers(props.count)}
					</ul>
=======
			<ul className="text flex list flex-column ma0 pa0 ">
				<p className={fontStyle}>{props.name}</p>
				<p className={fontStyle}>{props.visitedBy}</p>
				<ul className="flex flex-row list pa0 ma0 bn">
					{burgers(props.count)}
>>>>>>> scroll height ajusted
				</ul>
				<p className={fontStyle}>{props.location}</p>
				<p className={fontStyle}>${props.amount}</p>
				<p className={fontStyle}>{props.fullness}</p>
			</ul>
			<br />
		</div>
	);
};

export default Restaurant;

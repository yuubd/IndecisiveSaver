import React from 'react';
import hamburger from './public/hamburger.png';

const makeBurger = (id) => {
	return (
		<li key={id}>
			<img className="pa0 ma0 bn mw1" src={hamburger} alt="ham" />
		</li>
	);
};

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
		<div className="flex flex-column">
			{props.name}
			<img
				className="pa0 ma0 bn w5"
				src={require(`${props.imageURL}`)}
				alt={props.imageURL}
			/>
			{props.visitedBy}
			<ul className="flex flex-row list pa0 ma0 bn">{burgers(props.count)}</ul>
			{props.location}
			{props.amount}
			{props.fullness}
		</div>
	);
};

export default Restaurant;

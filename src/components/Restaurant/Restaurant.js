import React from 'react';
import hamburger from './public/hamburger.png';
import './Restaurant.css';
import './Restaurant.css';

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
				className="with-prop pa0 ma0 bn"
				src={require(`${props.imageURL}`)}
				alt={props.imageURL}
			/>
			{props.visitedBy}
			<ul className="flex flex-row list pa0 ma0 bn">{burgers(props.count)}</ul>
			{props.location}
			{props.amount}
			{props.fullness}
			<br />
		</div>
	);
};

export default Restaurant;

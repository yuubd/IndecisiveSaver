import React from 'react';
import hamburger from './public/hamburger.png';
import './Restaurant.css';
import { Link } from 'react-router-dom';

const Restaurant = (props) => {
	const makeBurger = (id) => {
		return (
			<li key={id}>
				<img className="bn burger-sty" src={hamburger} alt="ham" />
			</li>
		);
	};

	const burgers = (count) => {
		var burgerCount = count;
		var burgersImg = [];
		while (burgerCount > 0) {
			burgersImg.push(makeBurger(burgerCount));
			burgerCount--;
		}
		return burgersImg;
	};

	const shorten = (description) => {
		if (description.length > 100) {
			return description.substring(0, 99) + ' ...';
		}
		return description;
	};

	const fontStyle = 'fw1 pa0 pl2 ma0 gray';
	return (
		<article className="mw9 center bg-white br3 mv1 ba b--black-10">
			<div className="flex">
				<div className="width-prop">
					<img
						className="pa0 ma0 bn br2"
						src={require(`${props.imageURL}`)}
						alt={props.imageURL}
					/>
				</div>
				<ul className="text flex list flex-column ma0 pa0 dark-gray">
					<p className="pa0 ma0 pl2 fw-b name-font-sty">{props.name}</p>
					<ul className="flex list ma0 pa0">
						<p className={fontStyle}>{props.visitedBy}</p>
						<ul className="flex flex-row list pa0 ma0 bn ">{burgers(props.count)}</ul>
					</ul>
					<p className={fontStyle}>{props.location}</p>
					<p className={fontStyle}>$ {props.amount}</p>
					<p className={fontStyle}>{props.fullness}</p>
					<p className={fontStyle}>{shorten(props.description)}</p>
				</ul>
				<br />
			</div>
		</article>
	);
};

export default Restaurant;

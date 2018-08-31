import React from 'react';
import hamburger from '../Restaurant/public/hamburger.png';
import './RestaurantDetail.css';

const RestaurantDetail = (props) => {
	const makeBurger = (id) => {
		return (
			<li key={id}>
				<img className="pa0 ma0 bn mw1" src={hamburger} alt="ham" />
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
	return (
		<div>
			<p
				className="f6 lh-copy measure ma0 mr1 fr mid-gray pointer"
				onClick={props.onClickChangeRoute}
			>
				My list
			</p>
			<article className="br2 dark-gray b--black-10 w-100 w-100-m w-25-l center">
				<div className="dtc">
					<h1 className="f-4 f4-ns mv0 dark-gray">{props.name}</h1>
				</div>
				<img
					src={require(`${props.imageURL}`)}
					className="db w-100 br2 br--top"
					alt="{photo}"
				/>
				<div className="pa2 ph3-ns pb3-ns">
					<div className="dt w-100 mt1">
						<div className="dtc tr">
							<h2 className="f5 mv0">${props.amount}</h2>
						</div>
					</div>
					<ul className="flex list ma0 pa0">
						<p className="f-2 lh-copy measure ma0 mid-gray">
							visited by {props.visitedBy}
						</p>
						<ul className="flex flex-row list pl0 padding-top-5 ma0 bn">
							{burgers(props.count)}
						</ul>
					</ul>
					<p className="f6 lh-copy measure mt2 mid-gray">{props.description}</p>
				</div>
			</article>
		</div>
	);
};

export default RestaurantDetail;
/*key={restaurants[i].id}
				name={restaurants[i].name}
				imageURL={restaurants[i].imageURL}
				visitedBy={restaurants[i].visited_by}
				count={restaurants[i].count}
				location={restaurants[i].location}
				amount={restaurants[i].amount}
				fullness={restaurants[i].fullnessfullness}
				description={restaurants[i].description}
				*/

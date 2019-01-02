import React, { Component } from 'react';
import hamburger from '../Restaurant/public/hamburger.png';
import './RestaurantDetail.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		restaurants: state.requestRestaurants.restaurants
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

class RestaurantDetail extends Component {
	getIndex(id) {
		const { restaurants } = this.props;
		for (let i = 0; i < restaurants.length; i++) {
			if (restaurants[i].id == id) {
				return i;
			}
		}
		alert('Deleted restaurant');
		return -1;
	}

	render() {
		const { restaurants } = this.props;
		const idx = this.getIndex(this.props.match.params.id);
		const key = restaurants[idx].id;
		const name = restaurants[idx].name;
		const imageURL = restaurants[idx].imageURL;
		const visitedBy = restaurants[idx].visited_by;
		const count = restaurants[idx].count;
		const location = restaurants[idx].location;
		const amount = restaurants[idx].amount;
		const description = restaurants[idx].description;

		function makeBurger(id) {
			return (
				<li key={id}>
					<img className="pa0 ma0 bn mw1" src={hamburger} alt="ham" />
				</li>
			);
		}

		function burgers(count) {
			var burgerCount = count;
			var burgersImg = [];
			while (burgerCount > 0) {
				burgersImg.push(makeBurger(burgerCount));
				burgerCount--;
			}
			return burgersImg;
		}

		return (
			<div>
				<Link className="f6 lh-copy measure ma0 mr1 fr mid-gray pointer" to="/user/">
					My list
				</Link>
				<article className="br2 dark-gray b--black-10 w-100 w-100-m w-25-l center">
					<div className="dtc">
						<h1 className="f-4 f4-ns mv0 dark-gray">{name}</h1>
						<p className="f-2 lh-copy measure ma0 ml1 mid-gray">at {location}</p>
					</div>
					<img
						src={require(`${imageURL}`)}
						className="db w-100 br2 br--top"
						alt="{photo}"
					/>
					<div className="pa2 ph3-ns pb3-ns">
						<div className="dt w-100 mt1">
							<div className="dtc tr">
								<h2 className="f5 mv0">${amount}</h2>
							</div>
						</div>
						<ul className="flex list ma0 pa0">
							<p className="f-2 lh-copy measure ma0 mid-gray">
								visited by {visitedBy}
							</p>
							<ul className="flex flex-row list pl0 padding-top-5 ma0 bn">
								{burgers(count)}
							</ul>
						</ul>
						<p className="f6 lh-copy measure mt2 mid-gray">{description}</p>
					</div>
				</article>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail);

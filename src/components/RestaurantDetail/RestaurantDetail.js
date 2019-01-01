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
	idx = this.getIndex(this.props.match.params.id);
	key = this.props.restaurants[this.idx].id;
	name = this.props.restaurants[this.idx].name;
	imageURL = this.props.restaurants[this.idx].imageURL;
	visitedBy = this.props.restaurants[this.idx].visited_by;
	count = this.props.restaurants[this.idx].count;
	location = this.props.restaurants[this.idx].location;
	amount = this.props.restaurants[this.idx].amount;
	description = this.props.restaurants[this.idx].description;

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

	makeBurger(id) {
		return (
			<li key={id}>
				<img className="pa0 ma0 bn mw1" src={hamburger} alt="ham" />
			</li>
		);
	}

	burgers(count) {
		var burgerCount = count;
		var burgersImg = [];
		while (burgerCount > 0) {
			burgersImg.push(this.makeBurger(burgerCount));
			burgerCount--;
		}
		return burgersImg;
	}

	render() {
		const { restaurants } = this.props;
		console.log(this.props.match.params.id);
		console.log('length: ' + restaurants.length);
		console.log('id is : ' + restaurants[0].id);
		return (
			<div>
				<Link className="f6 lh-copy measure ma0 mr1 fr mid-gray pointer" to="/user/">
					My list
				</Link>
				<article className="br2 dark-gray b--black-10 w-100 w-100-m w-25-l center">
					<div className="dtc">
						<h1 className="f-4 f4-ns mv0 dark-gray">{this.name}</h1>
						<p className="f-2 lh-copy measure ma0 ml1 mid-gray">at {this.location}</p>
					</div>
					<img
						src={require(`${this.imageURL}`)}
						className="db w-100 br2 br--top"
						alt="{photo}"
					/>
					<div className="pa2 ph3-ns pb3-ns">
						<div className="dt w-100 mt1">
							<div className="dtc tr">
								<h2 className="f5 mv0">${this.amount}</h2>
							</div>
						</div>
						<ul className="flex list ma0 pa0">
							<p className="f-2 lh-copy measure ma0 mid-gray">
								visited by {this.visitedBy}
							</p>
							<ul className="flex flex-row list pl0 padding-top-5 ma0 bn">
								{this.burgers(this.count)}
							</ul>
						</ul>
						<p className="f6 lh-copy measure mt2 mid-gray">{this.description}</p>
					</div>
				</article>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail);

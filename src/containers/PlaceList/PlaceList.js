import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Restaurant from '../../components/Restaurant/Restaurant';
import RestaurantDetail from '../../components/RestaurantDetail/RestaurantDetail.js';
import { changeRoute } from '../../actions';

const mapStateToProps = (state) => {
	return {
		email: state.postSignInfo.email,
		restaurants: state.requestRestaurants.restaurants
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onRouteChange: (routeTo) => dispatch(changeRoute(routeTo))
	};
};

class PlaceList extends React.Component {
	render() {
		const restaurantComponent = this.props.restaurants.map((restaurant, i) => {
			return (
				<Link
					to={'/user/' + `${this.props.email}` + '/' + `${restaurant.id}`}
					style={{ textDecoration: 'none' }}
				>
					<Restaurant
						id={restaurant.id}
						key={i}
						name={restaurant.name}
						imageURL={restaurant.imageURL}
						visitedBy={restaurant.visited_by}
						count={restaurant.count}
						location={restaurant.location}
						amount={restaurant.amount}
						fullness={restaurant.fullnessfullness}
						description={restaurant.description}
					/>
				</Link>
			);
		});

		const restaurantsList = (
			<ul className="pl0 pa0 ma0 flex flex-column justify-start list">
				{restaurantComponent}
			</ul>
		);

		return <div>{restaurantsList}</div>;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);

import React from 'react';
import Restaurant from '../Restaurant/Restaurant';
import RestaurantDetail from '../RestaurantDetail/RestaurantDetail.js';
class PlaceList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			route: 'list'
		};
	}
	onClickChangeRoute = (route) => {
		this.setState({
			route: route
		});
	};
	restauantComponent = this.props.restaurants.map((restaurant, i) => {
		return (
			<Restaurant
				onClickChangeRoute={() => this.onClickChangeRoute(i)}
				key={restaurant.id}
				name={restaurant.name}
				imageURL={restaurant.imageURL}
				visitedBy={restaurant.visited_by}
				count={restaurant.count}
				location={restaurant.location}
				amount={restaurant.amount}
				fullness={restaurant.fullnessfullness}
				description={restaurant.description}
			/>
		);
	});
	restaurantDetail = (i) => {
		const { restaurants } = this.props;
		return (
			<RestaurantDetail
				onClickChangeRoute={() => this.onClickChangeRoute('list')}
				key={restaurants[i].id}
				name={restaurants[i].name}
				imageURL={restaurants[i].imageURL}
				visitedBy={restaurants[i].visited_by}
				count={restaurants[i].count}
				location={restaurants[i].location}
				amount={restaurants[i].amount}
				fullness={restaurants[i].fullnessfullness}
				description={restaurants[i].description}
			/>
		);
	};

	render() {
		const { route } = this.state;
		return (
			<ul className="pl0 pa0 ma0 flex flex-column justify-start list">
				{route === 'list' ? (
					this.restauantComponent
				) : (
					this.restaurantDetail(route)
				)}
			</ul>
		);
	}
}

export default PlaceList;

import React from 'react';
import { connect } from 'react-redux';
import Restaurant from '../../components/Restaurant/Restaurant';
import { changeRoute } from '../../actions';

const mapStateToProps = (state) => {
	return {
		route: state.changeRoute.route
	};
};

const mapDispatchToProps = (dispatch) => {
	console.log('PLACELIST IS CALLED');
	return {
		onRouteChange: (routeTo) => dispatch(changeRoute(routeTo))
	};
};

class PlaceList extends React.Component {
	restauantComponent = this.props.restaurants.map((restaurant, i) => {
		const { onRouteChange } = this.props;
		return (
			<Restaurant
				onClickChangeRoute={() => onRouteChange(i)}
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

	render() {
		return (
			<ul className="pl0 pa0 ma0 flex flex-column justify-start list">
				{this.restauantComponent}
			</ul>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);

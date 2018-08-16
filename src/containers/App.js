import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation/Navigation';
import PlaceList from '../components/PlaceList/PlaceList';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';
import SignIn from '../components/SignIn/SignIn';
import './App.css';
import { setSearchField, requestRestaurants } from '../actions';

// this can replace searchField in the state
const mapStateToProps = (state) => {
	return {
		searchField: state.searchPlaces.searchField,
		restaurants: state.requestRestaurants.restaurants,
		pending: state.requestRestaurants.isPending,
		error: state.requestRestaurants.error
	};
};

// dispatch is what triggers the actions
// this can replace onSearchChane(event)
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRestaurants: () => dispatch(requestRestaurants())
	};
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'signIn'
		};
	}

	onRouteChange = (routeTo) => {
		this.setState({
			route: routeTo
		});
	};

	componentDidMount() {
		// fetch('https://jsonplaceholer.typicode.com/users')
		// 	.then((response) => response.json())
		// 	.then((places) => {
		// 		this.setState({ restaurants: places });
		// 	});
		// this.setState({
		// 	restaurants: restaurants
		// });
		this.props.onRequestRestaurants();
	}

	onSearchChange = (event) => {
		this.setState({
			searchField: event.target.value
		});
	};

	render() {
		const { searchField, onSearchChange, restaurants, isPending } = this.props;

		const filteredrestaurants = restaurants.filter((restaurants) => {
			return restaurants.name.toLowerCase().includes(searchField.toLowerCase());
		});

		return (
			<div>
				<Navigation onRouteChange={this.onRouteChange} />
				{this.state.route === 'signIn' ? (
					<SignIn onRouteChange={this.onRouteChange} />
				) : (
					<div className="pa0 ma0 width-middle">
						<SearchBox searchChange={onSearchChange} />
						<Scroll>
							<PlaceList restaurants={filteredrestaurants} />
						</Scroll>
					</div>
				)}
			</div>
		);
	}
}
/**
 * connect() is a higher order function: return another function
 * app knows there is redux store and interested in changes
 * what state should listen to = mapStateToProps, 
 * what action should listen to = mapDispatchToProps
 * the returned objects are passed to App
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);

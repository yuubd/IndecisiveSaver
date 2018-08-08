import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './components/Navigation/Navigation';
import PlaceList from './components/PlaceList/PlaceList';
import SearchBox from './components/SearchBox/SearchBox';
import { restaurants } from './components/Restaurant/restaurants.js';
import Scroll from './components/Scroll/Scroll';
import './App.css';
import { setSearchField } from './actions';

// this can replace searchField in the state
const mapStateToProps = (state) => {
	console.log(state.searchRobots);
	return {
		//searchField: state.searchRobots.searchField
	};
};

// dispatch is what triggers the actions
// this can replace onSearchChane(event)
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	};
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			restaurants: restaurants
		};
	}

	componentDidMount() {}

	// onSearchChange = (event) => {
	// 	this.setState({
	// 		searchfield: event.target.value
	// 	});
	// };

	render() {
		const { restaurants } = this.state;
		const { searchField, onSearchChange } = this.props;
		const filteredrestaurants = restaurants.filter((restaurants) => {
			return restaurants.name
				.toLowerCase()
				.includes(searchField.toLowerCase());
		});

		return (
			<div className="pa0 ma0 width-middle">
				<Navigation />
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<PlaceList restaurants={filteredrestaurants} />
				</Scroll>
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

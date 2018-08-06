import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './components/Navigation/Navigation';
import PlaceList from './components/PlaceList/PlaceList.js';
import SearchBox from './components/SearchBox/SearchBox.js';
import { restaurants } from './components/Restaurant/restaurants';
import Scroll from './components/Scroll/Scroll.js';
import './App.css';
import { setSearchField } from './actions';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField
	};
};
class App extends Component {
	constructor() {
		super();
		this.state = {
			restaurants: restaurants,
			searchfield: ''
		};
	}
	componentDidMount() {}
	onSearchChange = (event) => {
		this.setState({
			searchfield: event.target.value
		});
	};

	render() {
		const { restaurants, searchfield } = this.state;
		const filteredrestaurants = restaurants.filter((restaurants) => {
			return restaurants.name
				.toLowerCase()
				.includes(searchfield.toLowerCase());
		});

		return (
			<div className="pa0 ma0 width-middle">
				<Navigation />
				<SearchBox searchChange={this.onSearchChange} />
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
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);

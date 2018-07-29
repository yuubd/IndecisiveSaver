import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import PlaceList from './components/PlaceList/PlaceList.js';
import SearchBox from './components/SearchBox/SearchBox.js';
import { restaurants } from './components/Restaurant/restaurants';
import Scroll from './components/Scroll/Scroll.js';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			restaurants: restaurants,
			searchfield: ''
		};
	}

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
			<div>
				<Navigation />
				<Scroll>
					<SearchBox searchChange={this.onSearchChange} />
					<PlaceList restaurants={filteredrestaurants} />
				</Scroll>
			</div>
		);
	}
}

export default App;

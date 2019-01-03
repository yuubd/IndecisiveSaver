import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter,
	Switch
} from 'react-router-dom';

import Navigation from '../../components/Navigation/Navigation';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PlaceList from '../PlaceList/PlaceList';
import RestaurantDetail from '../../components/RestaurantDetail/RestaurantDetail.js';
import SearchBox from '../../components/SearchBox/SearchBox';
import Scroll from '../../components/Scroll/Scroll';
import Home from '../../components/Home/Home';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import './App.css';
import { setSearchField, requestRestaurants } from '../../actions';

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

const ff_a = { fontFamily: 'Avenir' };

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				id: '',
				name: '',
				email: '',
				entries: 0,
				joined: ''
			}
		};
	}

	componentDidMount() {
		this.props.onRequestRestaurants();
	}

	loadUserProfile = (user) => {
		this.setState({
			user: {
				id: user.id,
				name: user.name,
				email: user.email,
				entries: user.entries,
				joined: user.joined
			}
		});
	};

	render() {
		const { searchField, onSearchChange, onRouteChange, restaurants } = this.props;

		const filteredrestaurants = restaurants.filter((restaurants) => {
			return restaurants.name.toLowerCase().includes(searchField.toLowerCase());
		});

		const signIn = () => <SignIn />;

		const signUp = () => (
			<SignUp onRouteChange={onRouteChange} loadUserProfile={this.loadUserProfile} />
		);

		const placeList = () => (
			<div className="pa0 ma0 width-middle">
				<SearchBox searchChange={onSearchChange} />
				<PlaceList />
			</div>
		);

		return (
			<div className="maxWidth" style={ff_a}>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Navigation>
							<Route path="/signin" exact component={signIn} />
							<Route path="/signup" component={signUp} />
							<Route exact path="/user/:email" component={placeList} />
							<Route path="/user/:email/:id" component={RestaurantDetail} />
						</Navigation>
					</Switch>
				</Router>
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

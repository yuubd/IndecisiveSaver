import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import PlaceList from '../PlaceList/PlaceList';
import RestaurantDetail from '../../components/RestaurantDetail/RestaurantDetail.js';
import SearchBox from '../../components/SearchBox/SearchBox';
import Scroll from '../../components/Scroll/Scroll';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import './App.css';
import { setSearchField, requestRestaurants, changeRoute } from '../../actions';

// this can replace searchField in the state
const mapStateToProps = (state) => {
	return {
		searchField: state.searchPlaces.searchField,
		restaurants: state.requestRestaurants.restaurants,
		pending: state.requestRestaurants.isPending,
		error: state.requestRestaurants.error,
		route: state.changeRoute.route
	};
};

// dispatch is what triggers the actions
// this can replace onSearchChane(event)
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRestaurants: () => dispatch(requestRestaurants()),
		onRouteChange: (routeTo) => dispatch(changeRoute(routeTo))
	};
};

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
	// onSearchChange = (event) => {
	// 	this.setState({
	// 		searchField: event.target.value
	// 	});
	// };

	render() {
		const {
			searchField,
			onSearchChange,
			onRouteChange,
			restaurants,
			isPending,
			route
		} = this.props;

		const filteredrestaurants = restaurants.filter((restaurants) => {
			return restaurants.name.toLowerCase().includes(searchField.toLowerCase());
		});

		const signIn = <SignIn onRouteChange={onRouteChange} />;
		const signUp = (
			<SignUp
				onRouteChange={onRouteChange}
				loadUserProfile={this.loadUserProfile}
			/>
		);
		const placeList = (
			<div className="pa0 ma0 width-middle">
				<SearchBox searchChange={onSearchChange} />
				<PlaceList restaurants={filteredrestaurants} />
			</div>
		);
		const restaurantDetail = (i) => {
			const { restaurants, onRouteChange } = this.props;
			return (
				<RestaurantDetail
					onClickChangeRoute={() => onRouteChange('home')}
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

		return (
			<div className="maxWidth">
				<Navigation onRouteChange={onRouteChange} displayMenu={route} />
				<Scroll>
					{route === 'home' ? (
						placeList
					) : route === 'signUp' ? (
						signUp
					) : typeof route === 'number' ? (
						restaurantDetail(route)
					) : (
						signIn
					)}
				</Scroll>
				<Footer route={route} />
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

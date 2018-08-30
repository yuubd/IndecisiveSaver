import React from 'react';
import Restaurant from '../Restaurant/Restaurant';
class PlaceList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			route: 'list'
		};
	}
	onClickChangeRoute = (i) => {
		this.setState({
			route: `${this.props.restaurants[i]}`
		});
		console.log(this.state.route);
	};
	restauantComponent = this.props.restaurants.map((restaurant, i) => {
		const { restaurants } = this.props;
		return (
			<Restaurant
				onClickChangeRoute={() => this.onClickChangeRoute(i)}
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
	});
	render() {
		return (
			<ul className="pl0 pa0 ma0 flex flex-column justify-start list">
				{this.state.route === 'list' ? (
					this.restauantComponent
				) : (
					<p>{this.state.route}</p>
				)}
			</ul>
		);
	}
}

export default PlaceList;

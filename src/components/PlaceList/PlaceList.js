import React from 'react';
import Restaurant from '../Restaurant/Restaurant';

const PlaceList = ({ restaurants }) => {
	const restauantComponent = restaurants.map((restaurant, i) => {
		return (
			<Restaurant
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

	return (
		<ul className="pl0 pa0 ma0 flex flex-column justify-start list">
			{restauantComponent}
		</ul>
	);
};

export default PlaceList;

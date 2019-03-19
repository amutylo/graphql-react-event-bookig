import React from 'react';
import './EventItem.css';

const EventItem = props => {
	return (
		<li key={props.eventId} className="events__list-item">
			<div>
				<h1>{props.title}</h1>
				<h2>price</h2>
			</div>
			<div>
				{props.userId === props.creatorId ? (
					<p>You the owner of the event</p>
				) : (
					<button className="btn">View Details</button>
				)}
			</div>
		</li>
	);
};

export default EventItem;

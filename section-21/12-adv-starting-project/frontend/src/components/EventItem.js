import { Link, redirect, useSubmit } from 'react-router-dom';

import classes from './EventItem.module.css';

function EventItem({ event }) {
	const submit = useSubmit();

	function startDeleteHandler() {
		const proceed = window.confirm(
			'Are you sure you want to delete this event?'
		);

		if (proceed) {
			submit(null, { method: 'delete' });
		}
	}

	return (
		<article className={classes.event}>
			<img src={event.image} alt={event.title} />
			<h1>{event.title}</h1>
			<time>{event.date}</time>
			<p>{event.description}</p>
			<menu className={classes.actions}>
				<Link to="edit">Edit</Link>
				<button onClick={startDeleteHandler}>Delete</button>
			</menu>
		</article>
	);
}

export default EventItem;

export async function action({ params }) {
	const eventId = params.eventId;
	const response = await fetch(`http://localhost:8080/events/${eventId}`, {
		method: 'DELETE',
	});

	if (!response.ok) {
		throw new Error('Could not delete event.');
	}

	return redirect('/events');
}

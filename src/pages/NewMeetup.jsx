import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const NewMeetup = () => {
	const history = useHistory();

	const addMeetupHandler = (meetupData) => {
		fetch(
			'https://react-getting-started-b2b1a-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
			{
				method: 'POST',
				body: JSON.stringify(meetupData),
				headers: { 'Content-Type': 'application/json' },
			}
		).then(() => {
			history.replace('/');
		});
	};

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	);
};

export default NewMeetup;

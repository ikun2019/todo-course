import React, { useCallback, useContext } from 'react';
import { FavoritesContext } from '../store/favorite-context';
import MeetupList from '../components/meetups/MeetupList';

const Favorites = () => {
	const favoriteCtx = useContext(FavoritesContext);
	let content;
	if (favoriteCtx.totalFavorites === 0) {
		content = <p>You got no favorites yet.</p>;
	} else {
		content = <MeetupList meetups={favoriteCtx.favorites} />;
	}

	return (
		<section>
			<h1>My Favorites</h1>
			{content}
		</section>
	);
};

export default Favorites;

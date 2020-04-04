import React from 'react';

import { IEpisode, IEpisodeProps } from '../interfaces';

export default function EpisodesList({
  episodes,
  favourites,
  toggleFavAction,
  dispatch,
}: IEpisodeProps): JSX.Element[] {
  return episodes.map((episode: IEpisode) => {
    return (
      <div className='episode-box' key={episode.id}>
        <img
          src={episode.image && episode.image.medium}
          alt={`R and M ${episode.name}`}
        />
        <div>{episode.name}</div>
        <div
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button
            onClick={() =>
              toggleFavAction(dispatch, episode, favourites)
            }
          >
            {favourites.find((fav: IEpisode) => fav.id === episode.id)
              ? 'Unfav'
              : 'Fav'}
          </button>
        </div>
      </div>
    );
  });
}

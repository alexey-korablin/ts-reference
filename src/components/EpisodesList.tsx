import React from 'react';

import { IEpisode } from '../interfaces';

type TProp = {
  episodes: IEpisode[];
  toggleFavAction: any;
  favourites: IEpisode[];
};

export default function EpisodesList({
  episodes,
  toggleFavAction,
  favourites,
}: TProp): JSX.Element[] {
  // const episodes: Array<IEpisode>
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
          <button onClick={() => toggleFavAction(episode)}>
            {favourites.find((fav: IEpisode) => fav.id === episode.id)
              ? 'Unfav'
              : 'Fav'}
          </button>
        </div>
      </div>
    );
  });
}

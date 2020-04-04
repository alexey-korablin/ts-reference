import React, { useEffect, useContext, Suspense } from 'react';

import { IEpisodeProps } from '../interfaces';
import { Store } from '../Store';
import { fetchDataAction, toggleFavAction } from '../actions';

const EpisodesList = React.lazy<any>(() =>
  import('../components/EpisodesList'),
);

export default function HomePage() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    favourites: state.favourites,
    toggleFavAction,
    dispatch,
  };

  return (
    <Suspense fallback={<div>loading...</div>}>
      <article className='episode-layout'>
        <EpisodesList {...props} />
      </article>
    </Suspense>
  );
}

import React, { useContext, Suspense } from 'react';

import { IEpisodeProps } from '../interfaces';
import { Store } from '../Store';
import { toggleFavAction } from '../actions';

const EpisodesList = React.lazy<any>(() =>
  import('../components/EpisodesList'),
);

export default function FavesPage() {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
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

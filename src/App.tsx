import React, {
  Fragment,
  useContext,
  useEffect,
  Suspense,
} from 'react';

import { IAction, IEpisode } from './interfaces';
import { Store } from './Store';

const EpisodesList = React.lazy<any>(() =>
  import('./components/EpisodesList'),
);

export default function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(URL);
    const dataJSON = await data.json();
    dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes,
    });
  };

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode);
    return dispatch({
      type: episodeInFav ? 'REMOVE_FAV' : 'ADD_FAV',
      payload: episode,
    });
  };

  const props = {
    episodes: state.episodes,
    toggleFavAction,
    favourites: state.favourites,
  };

  console.log(state);

  return (
    <Fragment>
      <header className='header'>
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite eposide</p>
        </div>
        <div>Favourites: {state.favourites.length}</div>
      </header>
      <Suspense fallback={<div>loading...</div>}>
        <article className='episode-layout'>
          <EpisodesList {...props} />
        </article>
      </Suspense>
    </Fragment>
  );
}

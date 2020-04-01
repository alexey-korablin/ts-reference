import React, { Fragment, useContext, useEffect } from 'react';

import { Store } from './Store';

interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: { medium: string; original: string };
  summary: string;
  _links: { self: { href: string } };
}

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

  return (
    <Fragment>
      <h1>Altered carbon</h1>
      <p>Pick your favourite eposide</p>
      <section>
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id}>
              <img
                src={episode.image && episode.image.medium}
                alt={`R and M ${episode.name}`}
              />
              <div>{episode.name}</div>
              <div>
                Season: {episode.season} Number: {episode.number}
              </div>
            </section>
          );
        })}
      </section>
    </Fragment>
  );
}

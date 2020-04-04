// import React from 'react'

export type Dispatch = React.Dispatch<IAction>;

export interface IEpisode {
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

export interface IAction {
  type: string;
  payload: Array<IEpisode> | any;
}

export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
}

export interface IEpisodeProps {
  episodes: IEpisode[];
  toggleFavAction: (
    dispatch: Dispatch,
    episode: IEpisode,
    favourites: IEpisode[],
  ) => void;
  favourites: IEpisode[];
  dispatch: Dispatch;
}

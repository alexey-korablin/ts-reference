import { IEpisode, Dispatch } from '../interfaces';

export const fetchDataAction = async (dispatch: Dispatch) => {
  const URL =
    'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
  const data = await fetch(URL);
  const dataJSON = await data.json();
  dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes,
  });
};

export const toggleFavAction = (
  dispatch: Dispatch,
  episode: IEpisode,
  favourites: IEpisode[],
) => {
  const episodeInFav = favourites.includes(episode);
  return dispatch({
    type: episodeInFav ? 'REMOVE_FAV' : 'ADD_FAV',
    payload: episode,
  });
};

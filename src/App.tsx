import React, { useContext } from 'react';
import { Link } from '@reach/router';
import { Store } from './Store';

export default function App(props: any): JSX.Element {
  const { state } = useContext(Store);

  console.log(state);

  return (
    <>
      <header className='header'>
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite eposide</p>
        </div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/faves'>Favourites: {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
}

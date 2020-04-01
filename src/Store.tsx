import React from 'react';

const initialState = {};

export const Store = React.createContext(initialState);

function reducer() {}

export const StoreProvider = (props: any): JSX.Element => (
  <Store.Provider value='test'>{props.children}</Store.Provider>
);

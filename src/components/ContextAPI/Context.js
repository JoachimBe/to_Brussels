import React from 'react';

const DataContext = React.createContext({places : {museum: 'non'}});

export const DataProvider = DataContext.Provider;
export const DataConsumer = DataContext.Consumer;
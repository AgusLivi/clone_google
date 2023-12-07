import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-web-search1.p.rapidapi.com/';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '637ee3cf28mshd7c20c06b70f695p1e8bb7jsn3b7ed2037d31',
        'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com',
      },
    });

    const data = await res.json();

    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);


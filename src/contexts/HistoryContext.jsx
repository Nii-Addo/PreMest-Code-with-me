import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const HistoryContext = createContext();
const { Provider } = HistoryContext;

const HistoryProvider = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState([]);
  return (
    <Provider
      value={{
        searchHistory,
        setSearchHistory,
      }}
    >
      {children}
    </Provider>
  );
};

export { HistoryProvider, HistoryContext };

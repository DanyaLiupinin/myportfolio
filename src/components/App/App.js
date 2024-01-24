import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";

import Main from "../Main/Main";
import DisplayProject from "../DisplayProject/DisplayProject";

import { moviesFetch, mestoFetch } from "../../utils/fetch";

import "./App.css";

// разбудить бэкенд на render
const App = () => {
  useEffect(() => {
    moviesFetch();
    mestoFetch();
  }, []);

  return (
    <div className="app">
      <Main />
      <Routes>
        <Route path="/projects/:name" element={<DisplayProject />} />
      </Routes>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../assets/images/logo-github.png';
import './styles.scss';
import Menu from '../Menu/Menu';
import Faq from '../FAQ/Faq';

function App() {
  const [result, setResult] = useState(null);

  const search = async (searchValue) => {
    try {
      const response = await axios.get('https://api.github.com/search/repositories', {
        params: {
          q: searchValue, // ici on insert la query /repositories?q=searchValue'
        },
      });
      setResult(response.data);
    }
    catch (err) {
      setResult(null);
    }
  };

  return (
    <div className="app">
      <header className="logo">
        <img src={logo} alt="github" className="logo-img" />
        <Menu />
      </header>
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <SearchBar onSearch={search} />
              <Message total={result?.total_count} />
              <ReposResults reposList={result?.items} />
            </>
        )}
        />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

// == Export
export default React.memo(App);

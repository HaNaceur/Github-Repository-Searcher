import React from 'react';

import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../assets/images/logo-github.png';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <header className="logo">
        <img src={logo} alt="github" className="logo-img" />
      </header>
      <SearchBar />
      <Message />
      <ReposResults />
    </div>
  );
}

// == Export
export default React.memo(App);

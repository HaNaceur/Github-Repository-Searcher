import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';

import Form from '../Form/Form';
import postsData from '../../data/repos';

import logo from './logo-github.png';
import './styles.css';
import Repos from '../Repos/Repos';


export default function App() {

  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);


  const loadData = async () => { 
    setIsLoading(true); 
    setErrorMessage(null); 
    try {
      const postsRepositories = await axios.get('https://api.github.com/search/repositories?q=REPOACHERCHER');
      setPosts(postsRepositories.data);
    }
    catch (err) {

      setErrorMessage('An error hapened while data loading.');
    }
    finally {
      setIsLoading(false); 
    }
  };


  const searchRepo = () => {
    const ids = posts.map((loadData) => loadData.id); 
    const maxId = Math.max(...[0, ...ids]); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <Form
        onSubmitForm={searchRepo}
      />
<Repos

/>

     
    </div>
  )}};
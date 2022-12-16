import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';

import Form from '../Form/Form';
import Data from '../../data/repos';

import logo from './logo-github.png';
import './styles.css';
import Repos from '../Repos/Repos';


export default function App() {

 
 const reposData = JSON.stringify(Data);
 
 
  /* useEffect(() => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [repos, setRepos] = useState([]);

  
    try {
      const reposFromLocalStorage = localStorage.getItem('repos');
      if (!reposFromLocalStorage) return;

      const parsedRepos = JSON.parse(reposFromLocalStorage);
      if (!Array.isArray(parsedRepos)) return;
      setRepos(parsedRepos);
    }
    // eslint-disable-next-line no-empty
    catch (err) {
      // on catch au cas où on est une erreur sur le JSON.parse
      setRepos([]); // si on a eu une erreur on met tableau vide pour être sure
    }
  }, []);*/



  /*const loadData = async () => { 
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
  };*/


 /* const searchRepo = () => {
    const ids = posts.map((loadData) => loadData.id); 
    const maxId = Math.max(...[0, ...ids]); */

    const [user, setUser] = useState([]);

  const fetchData = () => {
    return axios.get("https://api.github.com/search/repositories?q=REPOACHERCHER")
          .then((response) => setUser(response.json()))
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
<Form
onSubmitForm={fetchData}
/>
      
<Repos

/>
      </div>
  )};
import 'bootstrap';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import './index.scss';
// import loadProjects from './components/projects/projects';
import './data/projectsData';

import createNavbar from './components/navbar/navbar';
import createHomeView from './components/home/home';


const initializeProjects = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  createHomeView();
  // loadProjects();
};

initializeProjects();

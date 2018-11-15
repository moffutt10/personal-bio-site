import $ from 'jquery';
import 'bootstrap';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import './index.scss';
import loadProjects from './components/projects';
import './data/projectsData';
import photo from './images/me.jpg';

$('#marshall').attr('src', photo);
const initializeProjects = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  loadProjects();
};

initializeProjects();

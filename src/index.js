import 'bootstrap';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import './index.scss';
import createNavbar from './components/navbar/navbar';
import createHomeView from './components/home/home';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  createHomeView();
};

initializeApp();

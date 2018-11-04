import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import loadProjects from './components/projects';
import './data/projectsData';
import photo from './images/me.jpg';

$('#marshall').attr('src', photo);

const initializeProjects = () => {
  loadProjects();
};

initializeProjects();

import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import './components/biography';
import './components/contact';
import './components/projects';
import './components/technology';
import './data/projectsData';

$('#test').on('click', () => {
  $('#words').append('<p>Test</p>');
});

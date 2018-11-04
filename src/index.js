import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import './components/projects';
import './data/projectsData';

$('#test').on('click', () => {
  $('#words').append('<p>Test</p>');
});

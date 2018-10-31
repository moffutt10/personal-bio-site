import $ from 'jquery';
import 'bootstrap';


import './index.scss';

$('#test').on('click', () => {
  $('#words').append('<p>Test</p>');
});

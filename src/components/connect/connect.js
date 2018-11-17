import $ from 'jquery';
import 'bootstrap';
import './connect.scss';

const writeConnect = () => {
  const domString = `
    <div class="container d-flex justify-content-center header mt-4">
      <h1 class="text-dark">Connect</h1>
    </div>
    <h4 class="text-dark">You may also find me on the web at any of the following platforms:</h4>
    <div class="container">
        <ul class="list-inline m-4 d-flex container justify-content-center">
          <li class="list-inline-item m-4">
            <a title="LinkedIn" href="https://www.linkedin.com/in/marshalloffutt/" class="nav-icon">
              <i class="fab fa-linkedin fa-10x"></i>
            </a>
          </li>
          <li class="list-inline-item m-4">
            <a title="Twitter" href="https://twitter.com/marshalloffutt" class="nav-icon">
              <i class="fab fa-twitter fa-10x fa-pulse"></i>
            </a>
          </li>
          <li class="list-inline-item m-4">
            <a title="GitHub" href="https://github.com/marshalloffutt" class="nav-icon">
              <i class="fab fa-github fa-10x"></i>
            </a>
          </li>
        </ul>
    <h4 class="text-dark">Would you like to see my resume? Here you go.</h4>
  `;
  $('#content').html(domString);
  $('#body').css('background-image', 'none');
};

export default writeConnect;

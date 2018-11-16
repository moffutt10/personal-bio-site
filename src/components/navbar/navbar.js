import $ from 'jquery';
import './navbar.scss';

const createNavbar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Marshall Offutt</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" id="navbar-button-home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="navbar-button-tasks">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="navbar-button-done">Projects</a>
        </li>    
        <li class="nav-item">
        <a class="nav-link" id="navbar-button-logout">Connect</a>
      </li>
      </ul>
    </div>
  </nav>
  `;
  $('#navbar').html(domString);
};

export default createNavbar;

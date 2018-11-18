import $ from 'jquery';
import './navbar.scss';
import createHomeView from '../home/home';
import loadProjects from '../projects/projects';
import createAboutMe from '../aboutme/aboutme';

const navbarEvents = () => {
  $('.nav-link').on('click', (e) => {
    if (e.target.id === 'navbar-button-home') {
      createHomeView();
    } else if (e.target.id === 'navbar-button-projects') {
      loadProjects();
    } else if (e.target.id === 'navbar-button-aboutme') {
      createAboutMe();
    }
  });
};

const createNavbar = () => {
  const domString = `
  <nav class="navbar navbar-light navbar-expand-md justify-content-center">
    <a href="/" class="navbar-brand mr-0">Marshall Offutt</a> 
    <button class="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
        <ul class="navbar-nav mx-auto text-center">
            <li class="nav-item">
              <a class="nav-link" id="navbar-button-home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="navbar-button-aboutme">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="navbar-button-projects">Projects</a>
            </li>   
        </ul>
        <ul class="nav navbar-nav flex-row justify-content-center flex-nowrap">
            <li class="nav-item"><a class="nav-link" href="https://github.com/marshalloffutt"><i class="fab fa-github mr-1"></i></a> </li>
            <li class="nav-item"><a class="nav-link" href="https://twitter.com/marshalloffutt"><i class="fab fa-twitter"></i></a> </li>
            <li class="nav-item"><a class="nav-link" href="https://www.linkedin.com/in/marshalloffutt/"><i class="fab fa-linkedin"></i></a> </li>
        </ul>
    </div>
  </nav>
  `;
  $('#navbar').html(domString);
  navbarEvents();
};

export default createNavbar;

import $ from 'jquery';
import './navbar.scss';
import createHomeView from '../home/home';
import loadProjects from '../projects/projects';
import createTechnologies from '../technologies/technologies';
import createAboutMe from '../aboutme/aboutme';
import loadBlogs from '../blog/blog';
import createContact from '../contact/contact';

const navbarEvents = () => {
  $('.nav-link').on('click', (e) => {
    if (e.target.id === 'navbar-button-home') {
      createHomeView();
    } else if (e.target.id === 'navbar-button-projects') {
      loadProjects();
    } else if (e.target.id === 'navbar-button-aboutme') {
      createAboutMe();
    } else if (e.target.id === 'navbar-button-blog') {
      loadBlogs();
    } else if (e.target.id === 'navbar-button-technologies') {
      createTechnologies();
    } else if (e.target.id === 'navbar-button-contact') {
      createContact();
    }
  });
};

const createNavbar = () => {
  const domString = `
  <nav class="navbar navbar-light navbar-expand-md justify-content-center">
    <button class="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse  w-100" id="collapsingNavbar2">
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
            <li class="nav-item">
              <a class="nav-link" id="navbar-button-technologies">Technologies</a>
            </li>            
            <li class="nav-item">
              <a class="nav-link" id="navbar-button-blog">Blog</a>
            </li>   
            <li class="nav-item">
              <a class="nav-link" id="navbar-button-contact">Contact</a>
            </li>   
        </ul>
    </div>
  </nav>
  `;
  $('#navbar').html(domString);
  navbarEvents();
};

export default createNavbar;

import $ from 'jquery';
import getProjects from '../data/projectsData';
import 'bootstrap';

const writeProjects = (projects) => {
  let newString = '';
  newString += '<div class="container d-flex justify-content-center header">';
  newString += '<h1 class="text-light">Recent Works</h1>';
  newString += '</div>';
  projects.forEach((project) => {
    newString += `
    <div class="container d-flex proj-card">
      <div class="info container">
        <h1 class="text-light">${project.title} </h1>
        <h5 class="text-light">${project.description}</h5>
        <p class="text-light">Technologies used: ${project.technologiesUsed}</p>
        <div>
          <a class="link text-light" href="${project.githubUrl}">GitHub link</a>
        </div>
      </div>
      <div class="pic container">
        <img class="screenshot" src="${project.screenshot}">
      </div>
    </div>
    `;
  });
  $('#projectsPage').html(newString);
};

const loadProjects = () => {
  getProjects()
    .then((data) => {
      writeProjects(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default loadProjects;

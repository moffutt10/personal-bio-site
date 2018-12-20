import $ from 'jquery';
import getProjects from '../../data/projectsData';
import 'bootstrap';
import './projects.scss';

const writeProjects = (projects) => {
  let domString = '';
  projects.forEach((project) => {
    domString += `
    <div class="container d-flex proj-card">
      <div class="info container m-2">
        <h1 class="text-dark">${project.title} </h1>
        <h5 class="text-dark">${project.description}</h5>
        <p class="text-dark">Technologies used: ${project.technologiesUsed}</p>
        <div>
          <a class="link text-dark" href="${project.githubUrl}">GitHub link</a>
        </div>
      </div>
      <div class="pic container m-2">
        <img class="screenshot" src="${project.screenshot}">
      </div>
    </div>
    `;
  });
  $('#content').html(domString);
  $('#body').css('background-image', 'none');
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

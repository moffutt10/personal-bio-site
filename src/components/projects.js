import $ from 'jquery';
import getProjects from '../data/projectsData';
import 'bootstrap';

const writeProjects = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    newString += `
    <div class="container">
      <div class="info container">
        <h1 class="text-light">${project.title} </h1>
        <h3 class="text-light">${project.description}</h3>
        <p class="text-light">${project.technologiesUsed}</p>
      </div>
      <div class="pic container">
        <img src="${project.screenshot}">
        <a class="link text-light" href="${project.githubUrl}">GitHub</a>
      </div>
    </div>
    `;
  });
  $('#projectsPage').html(newString);
};

const loadProjects = () => {
  getProjects()
    .then((data) => {
      writeProjects(data.data.projects, data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default loadProjects;

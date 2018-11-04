import $ from 'jquery';
import getProjects from '../data/projectsData';
import 'bootstrap';

const writeProjects = (projects) => {
  let domString = '';
  projects.forEach((project) => {
    domString += `
    <div id='${project.title}' class='card'>
      <img class='card-img-top' src='${project.screenshot}
      <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <h6 class="card-text">${project.description}</h6>
          <p class="technologies-used">${project.technologiesUsed}</p>
          <a href="${project.githubUrl}" class="btn btn-secondary d-flex justify-content-center">GitHub</a>
      </div>
    </div>`;
    if (project.available === true) {
      $('#projectsPage').html(domString);
    }
  });
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

export default { loadProjects };

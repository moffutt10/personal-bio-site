// import $ from 'jquery';
import getProjects from '../data/projectsData';

getProjects.getProjects()
  .then((data) => {
    console.log(data.data.projects, data);
  })
  .catch((error) => {
    console.error({ error });
  });

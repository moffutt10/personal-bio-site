import axios from 'axios';

const getProjects = () => axios.get('http://localhost:3003/projects');

export default { getProjects };

import axios from 'axios';

const getProjects = () => axios.get('https://api.myjson.com/bins/bdfb2');

export default getProjects;

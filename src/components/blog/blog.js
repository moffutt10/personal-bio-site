import $ from 'jquery';
import getBlogs from '../../data/blogsData';
import 'bootstrap';
import './blog.scss';

const writeBlogs = (blogs) => {
  let domString = '';
  domString += '<div class="container d-flex justify-content-center header">';
  domString += '<h1 class="text-dark mt-4">Blog</h1>';
  domString += '</div>';
  blogs.forEach((blog) => {
    domString += `
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">${blog.title}</h2>
            <h6 class="card-subtitle mb-2 text-muted">${blog.Date}</h6>
            <p class="card-text">${blog.entry}</p>
        </div>
    </div>
    `;
  });
  $('#content').html(domString);
};


const loadBlogs = () => {
  getBlogs()
    .then((blogs) => {
      writeBlogs(blogs);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default loadBlogs;

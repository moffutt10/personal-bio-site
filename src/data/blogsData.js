import axios from 'axios';
import apiKeys from '../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBlogs = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/blogs.json`)
    .then((result) => {
      const allBlogsObject = result.data;
      const allBlogsArray = [];
      if (allBlogsObject != null) {
        Object.keys(allBlogsObject).forEach((blogId) => {
          const newBlog = allBlogsObject[blogId];
          newBlog.id = blogId;
          allBlogsArray.push(newBlog);
        });
      }
      resolve(allBlogsArray);
    })
    .catch((err) => {
      reject(err);
    });
});

export default getBlogs;

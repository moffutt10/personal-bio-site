import $ from 'jquery';
import './contact.scss';

const createContact = () => {
  const domString = `
    <div class="container d-flex flex-column p-5 mt-5">
        <h4>You can send me an <span><a href="mailto:marshalloffutt@gmail.com?subject=Hi!!" target="_blank">email</a></span>, or connect with me at any of the following social media platforms:</h4>
        <div class="container">
            <ul id="things" class="list-inline m-4 d-flex container justify-content-center">
                <li class="list-inline-item m-4">
                <a title="LinkedIn" href="https://www.linkedin.com/in/marshalloffutt/" class="things">
                    <i class="fab fa-linkedin fa-6x"></i>
                </a>
                </li>
                <li class="list-inline-item m-4">
                <a title="GitHub" href="https://github.com/marshalloffutt" class="things">
                    <i class="fab fa-github fa-6x"></i>
                </a>
                </li>
            </ul>
        </div>
    </div>
  `;
  $('#content').html(domString);
};

export default createContact;

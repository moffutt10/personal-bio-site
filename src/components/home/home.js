import $ from 'jquery';
import './home.scss';
import photo from '../../images/Marshall-34.jpg';

const createHomeView = () => {
  const domString = `
  <div class="fullPage container d-flex" id="home">
        <div class="container"></div>
        <div class="container mt-4">
          <h1 class="text-light">Marshall Offutt</h1>
          <h2 class="text-light">Full Stack Developer</h2>
          <p class="text-light">I make things.</p>
        </div>
      </div>
    </div>
  `;
  $('#content').html(domString);
  $('#body').css('background-image', `url(${photo})`);
};

export default createHomeView;

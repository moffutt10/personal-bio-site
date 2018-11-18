import $ from 'jquery';
import './home.scss';
import photo from '../../images/Marshall-34.jpg';

const createHomeView = () => {
  const domString = `
  <div class="fullPage container d-flex" id="home">
        <div class="container"></div>
        <div class="container p-4 mt-4" id="homeContent">
          <h1 class="text">Software Developer</h1>
          <h3 class="text">I make things.</h3>
        </div>
      </div>
    </div>
  `;
  $('#content').html(domString);
  $('#body').css('background-image', `url(${photo})`);
};

export default createHomeView;

import $ from 'jquery';
import './home.scss';
import photo from '../../images/Marshall-34.jpg';

const createHomeView = () => {
  const domString = `
  <div class="fullPage container d-flex justify-content-end" id="home">
        <div class="container"></div>
        <div class="container p-4 mt-4" id="homeContent">
          <h1 class="text-light">MARSHALL OFFUTT</h1>
          <h1 class="text-light">DEVELOPER</H1>
          <h1 class="text-light">RUNNER</H1>
          <h1 class="text-light">ADVENTURER</H1>
        </div>
      </div>
    </div>
  `;
  $('#content').html(domString);
  $('#body').css('background-image', `url(${photo})`);
};

export default createHomeView;

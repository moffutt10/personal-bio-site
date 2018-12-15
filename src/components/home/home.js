import $ from 'jquery';
import './home.scss';
import photo from '../../images/me.jpeg';

const createHomeView = () => {
  const domString = `
  <div class="fullPage container d-flex justify-content-end" id="home">
    <div class="container d-flex align-items-center" id="homeContent">
      <div class="container">
        <img id="marshall" class="rounded-circle img-fluid d-block mx-auto" alt="Marshall Offutt">
      </div>
      <div class="container">
        <h1>Marshall Offutt</h1>
        <h2>Full Stack Developer</h2>
        <p>I make things.</p>
      </div>
    </div>
  </div>
  `;
  $('#content').html(domString);
  $('#marshall').attr('src', photo);
};

export default createHomeView;

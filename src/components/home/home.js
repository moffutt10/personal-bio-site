import $ from 'jquery';
import './home.scss';

const createHomeView = () => {
  const domString = `
    <div class="d-flex justify-content-center align-items-center homePage">
      <div>
        <h1 class="name">MARSHALL OFFUTT: {</h1>
        <h1 class="name indent"><span class="deco">Full-Stack Developer,</span></h1>
        <h1 class="name indent">Runner,</h1>
        <h1 class="name indent">Adventurer,</h1>
        <h1 class="name">};</h1>
      </div>
    </div>
  `;
  $('#content').html(domString);
};

export default createHomeView;

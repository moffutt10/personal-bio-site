import $ from 'jquery';
import './home.scss';

const createHomeView = () => {
  const domString = `
    <div class="d-flex justify-content-center align-items-center homePage">
      <div>
        <h2 class="name">MARSHALL OFFUTT: {</h2>
        <h2 class="name indent"><span class="deco">Full-Stack Developer,</span></h2>
        <h2 class="name indent">Runner,</h2>
        <h2 class="name indent">Adventurer,</h2>
        <h2 class="name">};</h2>
      </div>
    </div>
  `;
  $('#content').html(domString);
};

export default createHomeView;

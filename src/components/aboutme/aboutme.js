import $ from 'jquery';
import 'bootstrap';
import './aboutme.scss';
import photo from '../../images/Marshall-5.jpg';

const createAboutMe = () => {
  const domString = `
  <div class="d-flex justify-content-center header">
    <h1 class="text-dark mt-4">About Me</h1>
  </div>
  <div class="d-flex container-fluid justify-content-around mt-4">
    <div class="mr-4">
      <h4 class="text-dark">Hello! I'm Marshall Offutt.</h4>
      <p class="text-dark">I am a full stack developer in Nashville.</p>
      <p class="text-dark">I grew up in south Louisiana, and went to college at Louisiana State University. I chose LSU's Construction Management program, because my passion in work lies in building things. Shortly after graduation, I accepted a job in Nashville as a project manager for a steel detailing arm of a local engineering firm. After nearly a decade of working in the steel detailing industry, I have worked on over 100 projects, including the Music City Center, which had over 11,000 tons of structural steel.</p>
      <p class="text-dark">As rewarding as my professional career in steel structures has been, my love for emerging technologies & computers ultimately informed my decision to attend Nashville Software School. It was here that I fell back in love with learning, and challenged myself in ways I never thought imaginable. Being a developer perfectly marries these passions in my life: building, and technology.</p>
    </div>
    <div>
      <img id="me" class="img-fluid d-block mx-auto" alt="Marshall Offutt">
    </div>
  </div>
  `;
  $('#content').html(domString);
  $('#me').attr('src', photo);
  $('#body').css('background-image', 'none');
};

export default createAboutMe;

import $ from 'jquery';
import 'bootstrap';
import './aboutme.scss';
import photo from '../../images/me.jpeg';

const createAboutMe = () => {
  const domString = `
  <div class="container d-flex flex-column justify-content-center p-5">
        <div>
          <img id="marshall" class="rounded-circle img-fluid d-block mx-auto" alt="Marshall Offutt">
        </div>
        <div class="d-flex container-fluid flex-column mt-5 p-2">
            <h4 class="text-dark">Hi!! I'm Marshall Offutt, and I am an aspiring full-stack developer in Nashville, TN.</h4>
            <p class="text-dark">I am currently in the 8th evening cohort at Nashville Software School, where we are learning JavaScript with the React library, and C# as our front end and back end focuses of study.</p>
            <p class="text-dark">My background is in project management within the steel construction industry. I graduated from LSU with a degree in Construction Management. Shortly after graduation, I accepted a job in Nashville as a project manager for the steel detailing arm of a local engineering firm. After nearly a decade of working in the steel detailing industry, I have worked on over 100 projects, including the Music City Center, which had over 11,000 tons of structural steel.</p>
            <p class="text-dark">As rewarding as my professional career in steel structures has been, my love for emerging technologies & computers ultimately informed my decision to attend Nashville Software School. It was here that I fell back in love with learning, and have challenged myself in ways I never thought imaginable. Being a developer perfectly marries these passions in my life: building, and technology.</p>
      </div>
    </div>
  `;
  $('#content').html(domString);
  $('#marshall').attr('src', photo);
};

export default createAboutMe;

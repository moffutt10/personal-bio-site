import $ from 'jquery';
import 'bootstrap';
import './aboutme.scss';
import photo from '../../images/me.jpeg';

const createAboutMe = () => {
  const domString = `
  <div class="container d-flex flex-column justify-content-center p-5 mt-4">
        <div>
          <img id="marshall" class="rounded-circle img-fluid d-block mx-auto" alt="Marshall Offutt">
        </div>
        <div class="d-flex container-fluid flex-column mt-5 p-2">
            <h4 class="text-dark">Hi!! I'm Marshall Offutt, and I am a full-stack web developer in Nashville, TN.</h4>
            <p class="text-dark"> Some of my earliest
            childhood memories were of booting up the old 486 into
            GeoWorks, or making batch files in DOS to run my old
            favorite computer games. And while the games themselves were
            fun, it was in somehow getting those archaic pieces of
            software to work on our home setup where the true joy was
            found. It was just like solving a puzzle. That love for
            problem-solving is part of why I chose to go into an
            engineering-related field at LSU. There I studied
            Construction Management and ended up working for a
            full-service engineering firm as a project manager for their steel detailing team. After
            nearly a decade of structural steel detailing - and after
            managing over 100 projects - I decided I wanted to build in
            an environment with fewer limitations, where I would have
            more freedom in coming up with creative solutions to
            problems. So I chose to become a software developer at
            Nashville Software School, marrying two great passions of
            my life: building and technology.</p>
      </div>
    </div>
  `;
  $('#content').html(domString);
  $('#marshall').attr('src', photo);
};

export default createAboutMe;

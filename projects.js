const printToDom = (stringToPrint, divId) => {
  selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};


// Begin Project Cards
const projects = [
    {
        title: "My Dino", 
        screenshot: "./screenshots/01.png", 
        description: "An introduction, using the most basic HTML and CSS practice", 
        technologiesUsed: "HTML, CSS",
        available: true,
        // url: "#",
        githubUrl: "https://github.com/moffutt10/my-dino"
      },
      {
        title: "Product Cards", 
        screenshot: "./screenshots/02.png", 
        description: "Practice in mocking a web page using HTML, and CSS",
        technologiesUsed: "HTML, CSS, Version Control with Github",
        available: true,
        // url: "#",
        githubUrl: "https://github.com/moffutt10/product-cards"
      },
      {
        title: "Temperature Converter", 
        screenshot: "./screenshots/03.png", 
        description: "A simple temperature converter",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        // url: "#",
        githubUrl: "https://github.com/moffutt10/temperature-converter"
      },
      {
        title: "Language Translator", 
        screenshot: "./screenshots/04.png", 
        description: "A language translator for a holiday card",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        // url: "#",
        githubUrl: "https://github.com/moffutt10/language-translator"
      },
      {
        title: "Van Gogh's Ear", 
        screenshot: "./screenshots/05a.png", 
        description: "A group project to make a fictional band web site",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Teamwork Version Control with Github",
        available: true,
        // url: "#",
        githubUrl: "https://github.com/nss-evening-cohort-8/bandz-van-gogh-s-ear" 
      },
      {
        title: "Sorting Hat", 
        screenshot: "./screenshots/06.png", 
        description: "A group project to make a fictional band web site",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Teamwork Version Control with Github",
        available: true,
        // url: "#",
        githubUrl: "https://github.com/moffutt10/sorting-hat" 
      }
];

const createHomeView = () => {
  let domString = '';
  domString += `<img class="banana" src="./pics/banana.png"`;
  domString += `<p class="banana-text">Banana. Banana, banana banana banana banana. Banana banana. Banana. Banana banana banana, banana, banana, banana banana. Banana 
  banana, banana banana. Banana banana. Banana banana! Banana? Banana!!! Banana banana banana. Banana banana. Banana, banana banana 
  banana banana. Banana, banana banana, banana banana. Banana banana. Banana banana, banana? Banana, banana banana. Banana!! Banana 
  banana! Banana!!!!!!!! Banana.</p>`;
  printToDom(domString, 'content');
};

const createBio = () => {
  let domString = '';
  domString += `<p>This will be a photo</p>`;
  domString += `<p>This will be a paragraph</p>`;
  printToDom(domString, 'content');
};

const createTechList = () => {
  let domString = '';
  domString += '<h1>Technologies</h1>';
  domString += '<ul>';
    domString += '<li>HTML</li>';
    domString += '<li>CSS</li>';
    domString += '<li>JavaScript</li>';
    domString +- `<li>Git</li>`;
    printToDom(domString, 'content');
};

const createProjectCards = () => {
  let domString = '';
  domString += `<div class="cards-container">`;
  for(i = 0; i < projects.length; i++) {
    if (projects[i].available === true) {
      domString += `<div class="card">`;
      domString +=    `<h3>${projects[i].title}</h3>`;
      domString +=    `<img class="card-pic" src="${projects[i].screenshot}"/>`;
      domString +=    `<p>${projects[i].description}</p>`;
      domString +=    `<p>${projects[i].technologiesUsed}</p>`;
      // domString += `<a href="${projects[i].url}"></a>`;
      domString +=    `<a href="${projects[i].githubUrl}"></a>`;
      domString += `</div>`;
    }
  }
  domString += `</div>`;
  printToDom(domString, 'content');
};

// Event Listeners fron Nav Bar
const listenerEvents = () => {
  document.getElementById('navToHome').addEventListener("click", createHomeView);
  document.getElementById('navToBio').addEventListener("click", createBio);
  document.getElementById('navToTech').addEventListener("click", createTechList);
  document.getElementById('navToProjects').addEventListener("click", createProjectCards);
}

listenerEvents();
const printToDom = (stringToPrint, divId) => {
  selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};

const createHomeView = () => {
  let domString = '';
  domString += `<img class="banana" src="./pics/banana.png"`;
  domString += `<p class="banana-text">Banana. Banana, banana banana banana banana. Banana banana. Banana. Banana banana banana, banana, banana, banana banana. Banana 
  banana, banana banana. Banana banana. Banana banana! Banana? Banana!!! Banana banana banana. Banana banana. Banana, banana banana 
  banana banana. Banana, banana banana, banana banana. Banana banana. Banana banana, banana? Banana, banana banana. Banana!! Banana 
  banana! Banana!!!!!!!! Banana.</p>`;
  printToDom(domString, 'content');
};


// Begin Project Cards
const projects = [
    {
        title: "My Dino", 
        screenshot: "./screenshots/01.png", 
        description: "An introduction, using the most basic HTML and CSS practice", 
        technologiesUsed: "HTML, CSS",
        available: false,
        // url: "#",
        githubUrl: "https://github.com/moffutt10/my-dino"
      },
      {
        title: "Product Cards", 
        screenshot: "./screenshots/02.png", 
        description: "Practice in mocking a web page using HTML, and CSS",
        technologiesUsed: "HTML, CSS, Version Control with Github",
        available: false,
        // url: "#",
        githubUrl: "https://github.com/moffutt10/product-cards"
      },
      {
        title: "Temperature Converter", 
        screenshot: "./screenshots/03.png", 
        description: "A simple temperature converter",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "#",
        githubUrl: "https://github.com/moffutt10/temperature-converter"
      },
      {
        title: "Language Translator", 
        screenshot: "./screenshots/04.png", 
        description: "A language translator for a holiday card",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "#",
        githubUrl: "https://github.com/moffutt10/language-translator"
      },
      {
        title: "Van Gogh's Ear", 
        screenshot: "./screenshots/05a.png", 
        description: "A group project to make a fictional band web site",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Teamwork Version Control with Github",
        available: false,
        url: "#",
        githubUrl: "https://github.com/nss-evening-cohort-8/bandz-van-gogh-s-ear" 
      },
      {
        title: "Sorting Hat", 
        screenshot: "./screenshots/06.png", 
        description: "A group project to make a fictional band web site",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Teamwork Version Control with Github",
        available: false,
        url: "#",
        githubUrl: "https://github.com/moffutt10/sorting-hat" 
      }
];

const createProjectCards = () => {
    let domString = '';
    for(i = 0; i < projects.length; i++) {
        if (projects[i].available === true) {
            domString += `<h3>${projects[i].title}</h3>`;
            domString += `<img src="${projects[i].screenshot}"/>`;
            domString += `<p>${projects[i].description}</p>`;
            domString += `<p>${projects[i].technologiesUsed}</p>`;
            domString += `<a href="${projects[i].url}"></a>`;
            domString += `<a href="${projects[i].githubUrl}"></a>`;
        }
    }
    printToDom(domString, 'content');
};

createProjectCards();

// End Project Cards Section

// Event Listeners fron Nav Bar
// document.getElementById('navToBio').addEventListener("click", bioFunction);
// document.getElementById('navToTech').addEventListener("click", techFunction);
// document.getElementById('navToProjects').addEventListener("click", projectsFunction);
document.getElementById('navToHome').addEventListener("click", (e) => {
  e.preventDefault();
  createHomeView();
});
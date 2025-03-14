/*The idea here is to grab data from my second JS file which contains variables with objects within arrays. My functions are designed to generate the data as you click the header titles. I have been messing around with styles and sorting my data, and styling them accordingly. Ill keep updating this as i go!*/

import { certData, projectData, resumeData } from "./resumewebsite2.js";

document.addEventListener("DOMContentLoaded", () => {

  let mainDiv = document.querySelector("#div_one");

  function displayWelcome() {
    mainDiv.innerHTML =
      `
  <div id="welcome_header">
  <h2 >Welcome!</h2> 
  </div>
  <div id="intro_paragraph">
  <p >My name is Sean Cooper, this is a very basic webpage I have created to display my resume, certificates and projects. Technology is my passion, most of my life I've worked physically demanding jobs (Landscaping, Farming,Delivery Driver). Currently I am studying Cyber Security (self taught) and working towards getting my CompTIA Security+, Network+ and/or the SAL1. Please have a look around, my plan is to add new projects/certs here as time goes on. Have a great day!</p>
  </div>
  `
  };


  function displayCerts() {
    mainDiv.innerHTML = certData.map(certificate =>
      `<div id="cert_div" class="cert_container">
  <a href="${certificate.source}" target="_blank" rel="noopener noreferrer">
  <img id="image_div" class="cert_div" src="${certificate.image}" alt="${certificate.name}"></a>
  <br>
  <p id="name_div">${certificate.name}
  </p>
</div>`
    ).join("");

    const certDivs = document.querySelectorAll(".cert_container")

    certData.forEach((certificate, index) => {
      const certDiv = certDivs[index]; // Get the div for the current certificate
      if (certificate.id === "1") {
        certDiv.classList.add("important_cert");
        console.log(`Added important_cert to: ${certificate.name}`); // Debugging log to make sure proper classes are applied
      } else {
        certDiv.classList.add("normal_cert");
        console.log(`Added normal_cert to: ${certificate.name}`); // Debugging log
      }
    });
  }

  function displayResume() {
    mainDiv.innerHTML = resumeData.map(resume =>
      `<div id="doc_div">
      <a href="${resume.source}" target="_blank" rel="noopener noreferrer">
  <img id="image_div" class="resume_div" src="${resume.image}" alt="${resume.name}">
      </a>
  <p id="name_div">${resume.name}
  </p>
  </div>`
    ).join("");

  }

  // sourcery skip: avoid-function-declarations-in-blocks
  function displayProject() {
    mainDiv.innerHTML = projectData.map(project =>
      `<div id="doc_div">
      <a href="${project.source}" target="_blank" rel="noopener noreferrer">
  <img id="image_div" class="project_div" src="${project.image}" alt="${project.name}"></a>

  <br>
  <p id="name_div" onclick="${project.source}">${project.name}</p>
  </div>`
    ).join("");
  }

  displayWelcome();

  document.querySelector("#homeBtn").addEventListener("click", displayWelcome);
  document.querySelector("#certsBtn").addEventListener("click", displayCerts);
  document.querySelector("#resume").addEventListener("click", displayResume)
  document.querySelector("#projectsBtn").addEventListener("click", displayProject);

});



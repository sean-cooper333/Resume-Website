
const certData = [
  {
    id: "1",
    name: "Google IT Support",
    image: "./images/googleitsupp.png",
    source: "https://www.coursera.org/account/accomplishments/specialization/certificate/CLFYTMLEI2BX",
  },
  {
    id: "2",
    name: "Intro to Networking",
    image: "./images/bitsnbytes.png",
    source: "https://www.coursera.org/account/accomplishments/certificate/IYPTEYF8IT68"
  },
  {
    id: "2",
    name: "Intro to Security",
    image: "./images/defenseagainst.png",
    source: "https://www.coursera.org/account/accomplishments/certificate/QKMFOZALCYZB"
  },
  {
    id: "2",
    name: "Intro to Sys-Admin",
    image: "./images/sysadminit.png",
    source: "https://www.coursera.org/account/accomplishments/certificate/DYT5NG1059PR"
  },
  {
    id: "2",
    name: "Tech Support Fundementals",
    image: "./images/techfund.png",
    source: "https://www.coursera.org/account/accomplishments/certificate/3P3TVUF310B4"
  },
  {
    id: "2",
    name: "Intro to OS",
    image: "./images/osandu.png",
    source: "https://www.coursera.org/account/accomplishments/certificate/HQ032T7KLSF5"
  },
  {
    id: "2",
    name: "Intro to Software Eng.",
    image: "./images/introsoft.png",
    source: "https://www.coursera.org/account/accomplishments/certificate/1Z3WNTNMO36K"
  },
  {
    id: "2",
    name: "HTML, CSS, JS",
    image: "./images/htmlcssjs.png",
    source: "https://www.coursera.org/account/accomplishments/certificate/6TTVTOP53GL4"
  },
  {
    id: "2",
    name: "Intermediate JavaScript",
    image: "./images/jsessentials.png",
    source: "https://www.coursera.org/account/accomplishments/certificate/7SZQ689ECCLV"
  },
  {
    id: "2",
    name: "Intro to Git/GitHub",
    image: "./images/gitngithub.png",
    source: "https://www.coursera.org/account/accomplishments/certificate/9VQOQ1LVYRWF"
  },
  {
    id: "2",
    name: "React",
    image: "./images/devfrontendreact.png",
    source: "https://www.coursera.org/account/accomplishments/certificate/CN10TOFEUFOD"
  }
];

const projectData = [
  {
    id: "2",
    name: "GitHub",
    image: "./images/githubscrnsht.png",
    source: "https://github.com/sean-cooper333?tab=repositories"
  },
];

const resumeData = [
  {
    id: "2",
    name: "Resume",
    image: "./images/resumescrnsht.png",
    source: "Sean-Cooper.pdf"
  }
];

certData.sort((a, b) => a.id - b.id)
export { certData, projectData, resumeData };
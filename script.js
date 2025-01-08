let resume = document.querySelector(".Resume");
let project = document.querySelector(".Projects");
let contact = document.querySelector(".Contact");
let innerbody = document.querySelector(".innerbody");
let githubBtn = document.querySelector(".btn2");
let linkedBtn = document.querySelector("#linkedInBtn");
resume.addEventListener("click", loadPage);

project.addEventListener("click", projectpage);

linkedBtn.addEventListener("click", redirecttoLinkedIn);

function redirecttoLinkedIn () {
  window.location.href = "https://www.linkedin.com/in/gajendra-kumar-arya-006076297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";
}

githubBtn.addEventListener("click", redirecttoGithub());

function redirecttoGithub () {
  window.location.href = "https://github.com/gajendraarya786";
}

function loadPage() {
    fetch("resume.html") // Replace with the path to your HTML file
      .then(response => response.text())
      .then(data => {
       innerbody.innerHTML = data;
      })
      .catch(error => console.error("Error loading page:", error));
  }

  function projectpage() {
    fetch("project.html") // Replace with the path to your HTML file
      .then(response => response.text())
      .then(data => {
       innerbody.innerHTML = data;
      })
      .catch(error => console.error("Error loading page:", error));
  }


  // to add external html and cssfile
  function loadPage2() {
    fetch("page2.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("content").innerHTML = data;

        // Load CSS dynamically
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "styles.css"; // External CSS file
        document.head.appendChild(link);
      })
      .catch(error => console.error("Error loading page:", error));
  }

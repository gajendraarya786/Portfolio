let resume = document.querySelector(".Resume");
let project = document.querySelector(".Projects");
let contact = document.querySelector(".Contact");
let innerbody = document.querySelector(".innerbody");
let githubBtn = document.querySelector(".btn2");
let linkedBtn = document.querySelector("#linkedInBtn");

resume.addEventListener("click", loadPage);
project.addEventListener("click", projectpage);
contact.addEventListener("click", contactpage);

linkedBtn.addEventListener("click", redirecttoLinkedIn);

function redirecttoLinkedIn () {
  window.location.href = "https://www.linkedin.com/in/gajendra-kumar-arya-006076297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";
}

githubBtn.addEventListener("click", redirecttoGithub);

function redirecttoGithub () {
  window.location.href = "https://github.com/gajendraarya786";
}

window.addEventListener("popstate", function (event) {
  if (event.state) {
      loadPage(event.state.path);
  }
});

function loadPage() {
  history.pushState({ path: "index.html" }, "", "index.html");
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


  function contactpage() {
    fetch("contact.html") // Replace with the path to your HTML file
      .then(response => response.text())
      .then(data => {
       innerbody.innerHTML = data;
      })
      .catch(error => console.error("Error loading page:", error));
  }


  setTimeout(() => {
    resume.classList.add('loaded');
  }, 50); // Small delay to ensure the animation is noticeable

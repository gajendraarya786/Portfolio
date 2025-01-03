let resume = document.querySelector(".Resume");
let project = document.querySelector(".Project");
let contact = document.querySelector(".Contact");
let innerbody = document.querySelector(".innerbody");
resume.addEventListener("click", loadPage);

function loadPage() {
    fetch("resume.html") // Replace with the path to your HTML file
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

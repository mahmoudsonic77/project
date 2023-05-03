// log-in and sign-up
const loginBtn = document.getElementById('login-btn');
const loginMenu = document.getElementById('login-menu');

loginMenu.style.display = "none";
loginBtn.addEventListener("click", (event) => {
  if (loginMenu.style.display == "none") {
    loginMenu.style.display = "block";
  } else {
    loginMenu.style.display = "none";
  }
});

const CvBtn = document.getElementById('Cv-btn');
const CvMenu = document.getElementById('Cv-menu');

CvMenu.style.display = "none";
CvBtn.addEventListener("click", (event) => {
  if (CvMenu.style.display == "none") {
    CvMenu.style.display = "block";
  } else {
    CvMenu.style.display = "none";
  }
});
// log-in and sign-up



// contact-us

// contact-us
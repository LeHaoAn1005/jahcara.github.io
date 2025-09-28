document.addEventListener("DOMContentLoaded", function () {
  const elements = [
    document.getElementById("contact-us"),
    document.getElementById("contact-us-information")
  ].filter(Boolean);

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});


const form = document.querySelector("#contact-form form");
const submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", function (e) {
    if (form.checkValidity()) {
      e.preventDefault(); 
      alert("Thank You For Contacting Us");
      window.location.href = "../home/home.html"; 
    } 

    else {
      alert("Please Fill The Form Before Submitting")
    }
  });

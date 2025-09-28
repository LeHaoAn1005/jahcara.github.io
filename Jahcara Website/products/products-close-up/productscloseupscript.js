document.addEventListener("DOMContentLoaded", function () {
  const elements = [
    document.querySelector(".items-main")
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

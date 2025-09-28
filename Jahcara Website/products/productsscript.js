document.addEventListener("DOMContentLoaded", function () {
  const elements = [
    document.getElementById("polo-title"),
    document.getElementById("polo-items"),
    document.getElementById("jacket-title"),
    document.getElementById("jacket-items"),
    document.getElementById("aodai-title"),
    document.getElementById("aodai-items")
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

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1, 
    rootMargin: "0px 0px -100px 0px", 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  const firstSection = document.querySelector("section");
  firstSection.classList.add("reveal");

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
});

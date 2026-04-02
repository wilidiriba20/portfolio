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
  document.querySelectorAll("section").forEach((section) => {
    if (section.getBoundingClientRect().top < window.innerHeight) {
      section.classList.add("reveal");
    } else {
      observer.observe(section);
    }
  });
});

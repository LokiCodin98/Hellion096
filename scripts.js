 
 
 document.getElementById('calculate-edpi').addEventListener('click', () => {
    const dpi = parseFloat(document.getElementById('dpi').value);
    const sens = parseFloat(document.getElementById('sens').value);
    const result = document.getElementById('edpi-result');

    if (isNaN(dpi) || isNaN(sens)) {
      result.textContent = "Please enter valid numbers.";
      return;
    }

    const edpi = dpi * sens;
    result.textContent = `Your eDPI is: ${edpi}`;
  });

  document.getElementById('sens').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault(); 
    document.getElementById('calculate-edpi').click(); 
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


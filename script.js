document.addEventListener('DOMContentLoaded', function () {
  const accordionButtons = document.querySelectorAll('.A-accordion-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const content = button.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
});


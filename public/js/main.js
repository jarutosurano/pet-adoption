// Main JavaScript file for the Pet Adoption website

document.addEventListener('DOMContentLoaded', () => {
  // Filter functionality for pets
  const filterButtons = document.querySelectorAll('.filter-btn');
  const petCards = document.querySelectorAll('[data-pet-type]');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('text-primary'));

      // Add active class to clicked button
      button.classList.add('text-primary');

      const filter = button.textContent.trim();

      // First, hide all pet cards
      petCards.forEach(card => {
        card.classList.add('hidden');
      });

      // Then, show only the ones that match the filter
      if (filter === 'All Pets') {
        petCards.forEach(card => {
          card.classList.remove('hidden');
        });
      } else if (filter === 'Only Dogs') {
        const dogCards = document.querySelectorAll('[data-pet-type="dog"]');
        dogCards.forEach(card => {
          card.classList.remove('hidden');
        });
      } else if (filter === 'Only Cats') {
        const catCards = document.querySelectorAll('[data-pet-type="cat"]');
        catCards.forEach(card => {
          card.classList.remove('hidden');
        });
      }
    });
  });

  // Set the first filter button as active by default
  if (filterButtons.length > 0) {
    filterButtons[0].classList.add('text-primary');
  }
});

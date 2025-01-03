document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('blogSearch').value.toLowerCase();
    const blogCards = document.querySelectorAll('.blog-card');
  
    blogCards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const description = card.querySelector('.card-text').textContent.toLowerCase();
  
      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        card.style.display = 'block'; // Show matching blog
      } else {
        card.style.display = 'none'; // Hide non-matching blogs
      }
    });
  });
  
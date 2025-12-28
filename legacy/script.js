const projectData = {
  bumbly: {
    title: "Bumbly",
    category: "Mobile App Design",
    description: "Bumbly is a revolutionary social networking app designed to facilitate meaningful connections through interest-based groups and events.",
    challenge: "The main challenge was creating a user interface that felt both playful and professional, ensuring high engagement while maintaining a clean aesthetic.",
    solution: "We implemented a vibrant color palette combined with elegant typography and smooth micro-interactions to create a cohesive and inviting user experience.",
    results: "30% increase in daily active users and a 4.8-star rating on the App Store within the first three months."
  },
  finwise: {
    title: "Finwise",
    category: "Website Design",
    description: "Finwise is a personal finance management tool that helps users track their spending, set budgets, and achieve their financial goals.",
    challenge: "Developing a complex dashboard that presents financial data in an easy-to-understand and visually appealing way was the primary obstacle.",
    solution: "A minimalist design approach with clear data visualizations and intuitive navigation allowed users to manage their finances effortlessly.",
    results: "Streamlined financial management for over 50,000 users, resulting in highly positive feedback and increased user retention."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('case-study-modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.querySelector('.close-modal');
  const projectCards = document.querySelectorAll('.project-card');

  const openModal = (projectId) => {
    const data = projectData[projectId];
    if (!data) return;

    modalBody.innerHTML = `
      <div class="modal-header">
        <span class="subtitle">${data.category}</span>
        <h2>${data.title}</h2>
      </div>
      <div class="modal-grid">
        <div class="modal-section">
          <h3>The Story</h3>
          <p>${data.description}</p>
        </div>
        <div class="modal-section">
          <h3>The Challenge</h3>
          <p>${data.challenge}</p>
        </div>
        <div class="modal-section">
          <h3>The Solution</h3>
          <p>${data.solution}</p>
        </div>
        <div class="modal-section">
          <h3>The Results</h3>
          <p>${data.results}</p>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      openModal(projectId);
    });
  });

  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Staggered Entrance Animation for Expertise Cards
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.expertise-card, .project-card, .faq-item').forEach(el => {
    observer.observe(el);
  });
});

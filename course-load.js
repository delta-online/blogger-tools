(function waitForButton() {
  const loadBtn = document.getElementById('loadMoreCourses');
  const viewAllUrl = '/p/courses.html';

  if (!loadBtn) {
    setTimeout(waitForButton, 200);
    return;
  }

  loadBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let hiddenCards = document.querySelectorAll('.hidden-course.hidden');

    if (hiddenCards.length === 0) return;

    // Reveal up to 3 cards
    const revealCount = Math.min(3, hiddenCards.length);
    for (let i = 0; i < revealCount; i++) {
      hiddenCards[i].classList.remove('hidden');
    }

    // Check how many remain after revealing
    hiddenCards = document.querySelectorAll('.hidden-course.hidden');
    const remaining = hiddenCards.length;

    if (remaining === 0) {
      // No more cards to show
      loadBtn.textContent = 'No more results';
      loadBtn.setAttribute('href', 'javascript:void(0)');
      loadBtn.classList.add('disabled');
      loadBtn.style.opacity = '0.6';
      loadBtn.style.pointerEvents = 'none';
    } else if (remaining > 3) {
      // More than 3 remain → show "View All"
      loadBtn.textContent = 'View All';
      loadBtn.setAttribute('href', viewAllUrl);
    }
  });
})();

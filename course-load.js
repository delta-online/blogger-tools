(function waitForButton() {
  const loadBtn = document.getElementById('loadMoreCourses');
  const viewAllUrl = '/p/courses.html';

  if (!loadBtn) {
    setTimeout(waitForButton, 200);
    return;
  }

  loadBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const hiddenCards = document.querySelectorAll('.hidden-course[style*="display: none"]');

    // If 4 or more are still hidden before this click → show 3, then View All
    if (hiddenCards.length > 3) {
      for (let i = 0; i < 3; i++) {
        if (hiddenCards[i]) hiddenCards[i].style.display = 'block';
      }

      const remaining = document.querySelectorAll('.hidden-course[style*="display: none"]').length;

      if (remaining > 3) {
        loadBtn.textContent = 'View All';
        loadBtn.setAttribute('href', viewAllUrl);
      }

    } else if (hiddenCards.length > 0 && hiddenCards.length <= 3) {
      // Reveal all remaining hidden
      hiddenCards.forEach(card => card.style.display = 'block');

      // No more to show? Replace button
      loadBtn.textContent = 'No more results';
      loadBtn.setAttribute('href', 'javascript:void(0)');
      loadBtn.classList.add('disabled');
      loadBtn.style.opacity = '0.6';
      loadBtn.style.pointerEvents = 'none';
    }
  });
})();

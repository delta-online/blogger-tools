(function waitForButton() {
  const loadBtn = document.getElementById('loadMoreCourses');
  const viewAllUrl = '/p/courses.html';

  if (!loadBtn) {
    setTimeout(waitForButton, 200);
    return;
  }

  loadBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const hiddenCards = document.querySelectorAll('.hidden-course.hidden');

    if (hiddenCards.length > 3) {
      for (let i = 0; i < 3; i++) {
        if (hiddenCards[i]) hiddenCards[i].classList.remove('hidden');
      }

      const remaining = document.querySelectorAll('.hidden-course.hidden').length;

      if (remaining > 3) {
        loadBtn.textContent = 'View All';
        loadBtn.setAttribute('href', viewAllUrl);
      }

    } else if (hiddenCards.length > 0 && hiddenCards.length <= 3) {
      hiddenCards.forEach(card => card.classList.remove('hidden'));

      loadBtn.textContent = 'No more results';
      loadBtn.setAttribute('href', 'javascript:void(0)');
      loadBtn.classList.add('disabled');
      loadBtn.style.opacity = '0.6';
      loadBtn.style.pointerEvents = 'none';
    }
  });
})();

(function waitForButton() {
  const loadBtn = document.getElementById('loadMoreCourses');
  const hiddenCards = document.querySelectorAll('.hidden-course');
  const viewAllUrl = '/p/courses.html';

  if (!loadBtn) {
    setTimeout(waitForButton, 200);
    return;
  }

  loadBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (hiddenCards.length <= 3) {
      hiddenCards.forEach(card => card.style.display = 'block');
      loadBtn.style.display = 'none';
    } else {
      loadBtn.textContent = 'View All';
      loadBtn.setAttribute('href', viewAllUrl);
    }
  });
})();

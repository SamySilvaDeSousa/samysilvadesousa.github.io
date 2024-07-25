document.querySelectorAll('[title]').forEach(function(element) {
  element.addEventListener('mouseover', function() {
      element.dataset.title = element.getAttribute('title');
      element.removeAttribute('title');
  });
  element.addEventListener('mouseout', function() {
      element.setAttribute('title', element.dataset.title);
  });
});

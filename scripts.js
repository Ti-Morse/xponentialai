window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('transparent');
  } else {
    header.classList.remove('transparent');
  }
});
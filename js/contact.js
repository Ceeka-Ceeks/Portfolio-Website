// Put this updated JavaScript code in your existing `script.js` file

document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
    // Show the button when scrolling down
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 100) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
  
    // Scroll to top when the button is clicked
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
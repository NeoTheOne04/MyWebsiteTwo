 // Get current page URL
 const currentPage = window.location.pathname.split('/').pop();
    
 // Get all navigation links
 const navLinks = document.querySelectorAll('.nav-menu a');
 
 // Add active class to current page link
 navLinks.forEach(link => {
     if(link.getAttribute('href') === currentPage) {
         link.classList.add('active');
     }
 });
document.getElementById('contact-form').onsubmit = function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  this.reset();
};

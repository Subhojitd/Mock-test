document.getElementById('openModalBtn').addEventListener('click', function() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
  });
  
  window.addEventListener('click', function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
    }
  });
  
  
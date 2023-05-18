document.onreadystatechange = function () {
    var preloader = document.getElementById('preloader');
  
    function fadeOutEffect() {
      preloader.style.opacity = '0';
      setTimeout(function () {
        preloader.style.display = 'none';
      }, 500);
    }
  
    if (document.readyState === 'complete') {
      setTimeout(fadeOutEffect, 2000);
    }
  };
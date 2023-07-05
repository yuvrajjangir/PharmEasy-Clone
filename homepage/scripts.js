function slideBanner(direction) {
    var container = document.querySelector('.banner-container');
    var containerWidth = container.offsetWidth;
    var scrollAmount = containerWidth;
  
    if (direction === 'left' || direction === 'right') {
      container.style.transform = `translateX(-${scrollAmount}px)`;
      setTimeout(function() {
        container.appendChild(container.firstElementChild);
        container.style.transform = 'translateX(0)';
      }, 500);
    } else if (direction === 'right') {
      container.prepend(container.lastElementChild);
      container.style.transform = `translateX(-${scrollAmount}px)`;
      setTimeout(function() {
        container.style.transform = 'translateX(0)';
      }, 500);
    }
  }
  
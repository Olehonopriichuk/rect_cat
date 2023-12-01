(function () {
  const elementsToMove = document.querySelectorAll('.coin__ctyptocurency, .coin__rektcat, .coin__instagram, .coin__usdc, .coin__trader, .coin__tiktok, .coin__youtube, .coin__btc, .coin__eth, .coin__analytic, .coin__website, .coin__telegram, .coin__bloger, .coin__mentor, .coin__usdt, .coin__nft, .coin__twitter, .coin__spaceman');
  const targetElement = document.querySelector('.coin__target-container');
  const coinOrbit = document.querySelector('.coin__orbit');

  let scriptExecuted = false;

  function animateElements() {
    elementsToMove.forEach((element) => {
      element.style.transition = 'transform 2s, opacity 1s';
      const targetRect = targetElement.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const deltaX = targetRect.left - elementRect.left + targetRect.width / 2 - elementRect.width / 2;
      const deltaY = targetRect.top - elementRect.top + targetRect.height / 2 - elementRect.height / 2;
      element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      element.style.opacity = '0';
    });
  }

  function restoreElements() {
    elementsToMove.forEach((element) => {
      element.style.transition = 'transform 2s, opacity 1s';
      element.style.transform = 'translate(0, 0)';
      element.style.opacity = '1';
    });
  }

  function handleScroll() {
    const coinOrbitRect = coinOrbit.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (window.matchMedia('(min-width: 575px)').matches) {
      // Якщо ширина екрану > 575px
      if (coinOrbitRect.top <= 0) {
        if (!scriptExecuted) {
          animateElements();
          scriptExecuted = true;
        }
      } else {
        restoreElements();
        scriptExecuted = false;
      }
    } else {
      const imaginaryHorizontalLine = viewportHeight / 2;
      if (coinOrbitRect.top <= imaginaryHorizontalLine) {
        if (!scriptExecuted) {
          animateElements();
          scriptExecuted = true;
        }
      } else {
        restoreElements();
        scriptExecuted = false;
      }
    }
  }

  handleScroll();

  window.addEventListener('scroll', handleScroll);

  window.addEventListener('resize', handleScroll);
})();

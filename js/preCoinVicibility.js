(function() {
    const elements = document.querySelectorAll('.coin__ctyptocurency, .coin__rektcat, .coin__instagram, .coin__usdc, .coin__trader, .coin__tiktok, .coin__youtube, .coin__btc, .coin__eth, .coin__analytic, .coin__website, .coin__telegram, .coin__bloger, .coin__mentor, .coin__usdt, .coin__nft, .coin__twitter, .coin__spaceman');
    const orbit = document.querySelector('.coin__orbit');


    function updateZIndex() {
    const scrollY = window.scrollY; 
    const orbitTop = orbit.offsetTop; 
    const orbitHeight = orbit.clientHeight; 

    if (scrollY + window.innerHeight < orbitTop + orbitHeight * 0.4) {
        elements.forEach(element => {
        element.style.zIndex = -1;
        });
    } else {
        elements.forEach(element => {
        element.style.zIndex = 1;
        });
    }
    }

    window.addEventListener('scroll', updateZIndex);


    updateZIndex();
})();
  
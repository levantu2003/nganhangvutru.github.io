document.addEventListener('scroll', () => {
    const navbarchange = document.getElementById('change');
    const navbarcurrent = document.getElementById('current');

    if(window.scrollY > 0) {
        navbarchange.style.display = "block"
        navbarcurrent.style.display = "none"
    }
    else {
        navbarchange.style.display = "none"
        navbarcurrent.style.display = "block"
    }
})
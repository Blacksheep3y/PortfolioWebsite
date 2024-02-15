// NAV Menu size change
document.getElementById('mobile-menu').addEventListener('click', function () {
    var navMenu = document.querySelector('.nav-menu');
    var menuToggle = document.querySelector('.menu-toggle');
    var body = document.body;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if (windowWidth >= 801 && menuToggle.classList.contains('open')) {
        menuToggle.classList.remove('open');
        navMenu.style.width = '0';
        body.style.overflow = 'auto'; // Enable scrolling when menu is closed
    } else if (windowWidth >= 801 && !menuToggle.classList.contains('open')) {
        menuToggle.classList.add('open');
        navMenu.style.width = '500px'; // Set your desired width
        navMenu.style.height = '250px'; // Set your desired height
        body.style.overflow = 'hidden'; // Disable scrolling when menu is open
    } else {
        if (menuToggle.classList.contains('open')) {
            menuToggle.classList.remove('open');
            navMenu.style.width = '0';
            navMenu.style.height = '0';
            body.style.overflow = 'auto'; // Enable scrolling when menu is closed
        } else {
            menuToggle.classList.add('open');
            navMenu.style.width = windowWidth + 'px';
            navMenu.style.height = windowHeight + 'px';
            body.style.overflow = 'hidden'; // Disable scrolling when menu is open
        }
    }

    // Change navigation font colors on hover
    const navI = document.querySelectorAll('.navI');
    if (windowWidth >= 801 && windowWidth <= 950) {
        frontendHeading.addEventListener('mouseover', function () {
            navI[0].style.color = '#fff';
            navI[1].style.color = '#fff';
            navI[2].style.color = '#fff';
            navI[3].style.color = '#fff';
        });
        uxuiHeading.addEventListener('mouseover', function () {
            navI[0].style.color = '#fff';
            navI[1].style.color = '#fff';
            navI[2].style.color = '#fff';
            navI[3].style.color = '#fff';
        });
        frontendHeading.addEventListener('mouseout', function () {
            navI[0].style.color = '#366091';
            navI[1].style.color = '#366091';
            navI[2].style.color = '#366091';
            navI[3].style.color = '#366091';
        });
        uxuiHeading.addEventListener('mouseout', function () {
            navI[0].style.color = '#366091';
            navI[1].style.color = '#366091';
            navI[2].style.color = '#366091';
            navI[3].style.color = '#366091';
        });
    }
    else if (windowWidth < 801 && windowWidth > 950) {
        navI[0].style.color = '#366091';
        navI[1].style.color = '#366091';
        navI[2].style.color = '#366091';
        navI[3].style.color = '#366091';
    }
});

// Background-Color Change - Hover H1 Effect
const frontendHeading = document.getElementById('frontendHeading');
const uxuiHeading = document.getElementById('uxuiHeading');
const header = document.getElementById('header');
const bar1 = document.querySelector('.bar:nth-child(1)');
const bar2 = document.querySelector('.bar:nth-child(2)');
const bar3 = document.querySelector('.bar:nth-child(3)');
frontendP = document.querySelector('#frontendPar');
uxuiP = document.querySelector('#uxuiPar');

frontendHeading.addEventListener('mouseover', function () {
    header.style.backgroundColor = '#366091';
    frontendHeading.style.color = '#fff';
    uxuiHeading.style.color = '#fff';
    bar1.style.backgroundColor = '#fff';
    bar2.style.backgroundColor = '#fff';
    bar3.style.backgroundColor = '#fff';
    frontendP.style.color = '#fff';
    uxuiP.style.color = '#fff';
});

frontendHeading.addEventListener('mouseout', function () {
    header.style.backgroundColor = '#fff';
    frontendHeading.style.color = '#366091';
    uxuiHeading.style.color = '#913636';
    bar1.style.backgroundColor = '#366091';
    bar2.style.backgroundColor = '#366091';
    bar3.style.backgroundColor = '#366091';
    frontendP.style.color = '#333';
    uxuiP.style.color = '#333';
});

uxuiHeading.addEventListener('mouseover', function () {
    header.style.backgroundColor = '#913636';
    frontendHeading.style.color = '#fff';
    uxuiHeading.style.color = '#fff';
    bar1.style.backgroundColor = '#fff';
    bar2.style.backgroundColor = '#fff';
    bar3.style.backgroundColor = '#fff';
    frontendP.style.color = '#fff';
    uxuiP.style.color = '#fff';
});

uxuiHeading.addEventListener('mouseout', function () {
    header.style.backgroundColor = '#fff';
    frontendHeading.style.color = '#366091';
    uxuiHeading.style.color = '#913636';
    bar1.style.backgroundColor = '#366091';
    bar2.style.backgroundColor = '#366091';
    bar3.style.backgroundColor = '#366091';
    frontendP.style.color = '#333';
    uxuiP.style.color = '#333';
});
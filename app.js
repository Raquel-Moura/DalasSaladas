function showMenu(){
    let mostrarMenu = document.querySelector('.mobile-menu');
    let menuIcon = document.querySelector ('.mobile-btn i');

    if (mostrarMenu.classList.contains('open')){
        mostrarMenu.classList.remove('open');  
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');


    } else {
        mostrarMenu.classList.add('open');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    }
}
document.getElementById('navbarLogo').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY - header.offsetHeight;

        if (scrollPosition <= 0) {
            header.style.boxShadow = 'none';
        } else {
            header.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.1)';
        }

        let activeSectionIndex = 0;
        sections.forEach((section, i) => {
            const sectionTop = section.offsetTop - 96;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return;
            }
        });

        navItems.forEach(item => item.classList.remove('active'));
        if (navItems[activeSectionIndex]) {
            navItems[activeSectionIndex].classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.salad', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.conteit_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });
});

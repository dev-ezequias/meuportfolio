document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    // Agora isso vai funcionar pois adicionamos a classe .tab-content no HTML
    const sections = document.querySelectorAll('.tab-content'); 

    function ativarAba(event) {
        event.preventDefault();

        navLinks.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        const linkClicado = event.currentTarget;
        linkClicado.classList.add('active');

        // Como adicionamos o # no HTML, o substring(1) agora funciona corretamente
        const targetId = linkClicado.getAttribute('href').substring(1);
        
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', ativarAba);
    });
});
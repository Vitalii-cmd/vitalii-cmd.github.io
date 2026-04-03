document.addEventListener('DOMContentLoaded', () => {
    // Ефект появи тексту
    const title = document.querySelector('.animate-text');
    title.style.opacity = '0';
    title.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        title.style.transition = '1s ease-out';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 300);

    // Додамо простий ефект нахилу для карток без сторонніх бібліотек
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `rotateY(0deg) rotateX(0deg) translateY(0)`;
        });
    });
});

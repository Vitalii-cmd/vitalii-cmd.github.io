// Функція для кнопки "Спробуйте самі"
function tryIt() {
    alert("Відкривається редактор коду (симуляція W3Schools Editor)...");
}

// Автоматична прокрутка мобільного меню до активного пункту
window.addEventListener('DOMContentLoaded', () => {
    const activeLink = document.querySelector('.active-link');
    const sidebar = document.querySelector('.sidebar');
    
    if (activeLink && window.innerWidth <= 768) {
        // Прокрутка сайдбару так, щоб активний лінк був у центрі
        const scrollAmount = activeLink.offsetLeft - (sidebar.clientWidth / 2) + (activeLink.clientWidth / 2);
        sidebar.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
});

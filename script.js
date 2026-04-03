document.addEventListener('DOMContentLoaded', () => {
    // --- Налаштування фону з частинками ---
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    
    // Встановлюємо розмір полотна на весь екран
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Масив частинок
    let particles = [];
    const particleCount = 100; // Кількість частинок

    // Клас частинки
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5; // Розмір (дуже малі)
            this.speedX = (Math.random() - 0.5) * 0.5; // Швидкість по X
            this.speedY = (Math.random() - 0.5) * 0.5; // Швидкість по Y
            this.color = Math.random() > 0.5 ? 'rgba(0, 210, 255, 0.3)' : 'rgba(157, 0, 255, 0.2)';
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Відбивання від стінок
            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Створення частинок
    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    initParticles();

    // Анімування частинок
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищення
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();

    // --- (Опціонально) Ініціалізація VanillaTilt вручну, якщо потрібно ---
    // VanillaTilt.init(document.querySelectorAll(".project-card"), {
    //     max: 10,
    //     speed: 400
    // });
});

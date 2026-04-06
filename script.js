document.addEventListener('DOMContentLoaded', () => {
    // --- Налаштування фону ---
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
 
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();
 
    const particles = [];
    const particleCount = 80;
 
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.size = Math.random() * 1.5 + 0.5;
            this.color = Math.random() > 0.5
                ? 'rgba(0, 210, 255, 0.2)'
                : 'rgba(157, 0, 255, 0.15)';
        }
 
        update() {
            this.x += this.vx;
            this.y += this.vy;
            // БАГ ВИПРАВЛЕНО: було `p.y` — ReferenceError, має бути `this.y`
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
 
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
 
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
 
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // БАГ ВИПРАВЛЕНО: прибрано дублювання логіки руху — тепер використовуємо лише p.update() + p.draw()
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
 
    animate();
});
// БАГ ВИПРАВЛЕНО: прибрано дублікат всього блоку DOMContentLoaded
 

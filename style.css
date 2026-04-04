:root {
    --bg-dark: #050509;
    --card-bg: rgba(20, 20, 35, 0.7);
    --text-main: #e0e6ed;
    --neon-blue: #00d2ff;
    --neon-purple: #9d00ff;
    --python-yellow: #ffd43b;
    --cpp-cyan: #00f2ff;
    --java-orange: #f89820;
    --font-family: 'Poppins', sans-serif;
}

* { box-sizing: border-box; }

body {
    margin: 0; padding: 0;
    font-family: var(--font-family);
    background-color: var(--bg-dark);
    color: var(--text-main);
    overflow-x: hidden;
    min-height: 100vh;
}

#particleCanvas {
    position: fixed; top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: -1; pointer-events: none;
}

.main-wrapper {
    display: flex; flex-direction: column;
    align-items: center; padding: 80px 20px;
    z-index: 1;
}

.hero-section { text-align: center; margin-bottom: 100px; }

.logo {
    font-size: 0.9rem; font-weight: 700; letter-spacing: 6px;
    color: rgba(255, 255, 255, 0.3); text-transform: uppercase;
    margin-bottom: 10px;
}

.glitch-text {
    font-size: clamp(2.5rem, 10vw, 4.5rem);
    font-weight: 700; text-transform: uppercase;
    position: relative; color: #fff;
}

.glitch-text::before, .glitch-text::after {
    content: attr(data-text); position: absolute;
    top: 0; left: 0; width: 100%; height: 100%; opacity: 0.8;
}

.glitch-text::before {
    color: var(--neon-blue); z-index: -1;
    animation: glitch 0.5s infinite;
}

.glitch-text::after {
    color: var(--neon-purple); z-index: -2;
    animation: glitch 0.5s infinite reverse;
    animation-delay: 0.2s;
}

@keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-3px, 3px); }
    40% { transform: translate(-3px, -3px); }
    60% { transform: translate(3px, 3px); }
    80% { transform: translate(3px, -3px); }
    100% { transform: translate(0); }
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 40px; width: 100%; max-width: 1200px;
}

.project-card {
    background: var(--card-bg);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px; padding: 50px 30px;
    backdrop-filter: blur(12px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-style: preserve-3d;
}

.card-content { transform: translateZ(40px); }

.icon-box i { font-size: 60px; margin-bottom: 25px; }

/* Динамічні кольори карток */
.python-icon { color: var(--python-yellow); filter: drop-shadow(0 0 15px var(--python-yellow)); }
.python-card:hover { border-color: var(--python-yellow); box-shadow: 0 10px 40px rgba(255, 212, 59, 0.2); }

.cpp-icon { color: var(--cpp-cyan); filter: drop-shadow(0 0 15px var(--cpp-cyan)); }
.cpp-card:hover { border-color: var(--cpp-cyan); box-shadow: 0 10px 40px rgba(0, 242, 255, 0.2); }

.java-icon { color: var(--java-orange); filter: drop-shadow(0 0 15px var(--java-orange)); }
.java-card:hover { border-color: var(--java-orange); box-shadow: 0 10px 40px rgba(248, 152, 32, 0.2); }

.neon-btn {
    display: inline-flex; align-items: center; gap: 12px;
    padding: 12px 35px; border-radius: 30px;
    text-decoration: none; font-weight: 600;
    border: 2px solid; transition: 0.3s;
    margin-top: 20px;
}

.python-btn { border-color: var(--python-yellow); color: var(--python-yellow); }
.python-btn:hover { background: var(--python-yellow); color: #000; }

.cpp-btn { border-color: var(--cpp-cyan); color: var(--cpp-cyan); }
.cpp-btn:hover { background: var(--cpp-cyan); color: #000; }

.java-btn { border-color: var(--java-orange); color: var(--java-orange); }
.java-btn:hover { background: var(--java-orange); color: #000; }

.locked-card { opacity: 0.4; cursor: not-allowed; filter: grayscale(1); }

.social-links { display: flex; gap: 25px; margin-top: 30px; }
.social-links a { color: #fff; opacity: 0.6; font-size: 1.4rem; transition: 0.3s; }
.social-links a:hover { opacity: 1; transform: translateY(-5px); color: var(--neon-blue); }

@media (max-width: 768px) {
    .main-wrapper { padding: 40px 15px; }
    .hero-section { margin-bottom: 50px; }
}

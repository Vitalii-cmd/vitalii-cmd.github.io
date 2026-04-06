function tryIt() {
    alert("Відкривається редактор коду (симуляція W3Schools Editor)...");
    // Тут можна додати логіку відкриття нового вікна з онлайн-компілятором
}

// Додамо просту логіку для активних посилань у сайдбарі
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.active-link').classList.remove('active-link');
        this.classList.add('active-link');
    });
});


// Ініціалізація стека
let stack = [3, 1, 4, 4]; // Початкові дані як на скріншоті

function updateVisuals() {
    const container = document.getElementById('stack-container');
    const resultDisplay = document.getElementById('stack-result');
    
    // Очищуємо контейнер
    container.innerHTML = '';
    
    // Малюємо елементи
    stack.forEach(val => {
        const item = document.createElement('div');
        item.className = 'stack-item';
        item.innerText = val;
        container.appendChild(item);
    });
}

function pushStack() {
    const newVal = Math.floor(Math.random() * 10); // Випадкове число 0-9
    stack.push(newVal);
    document.getElementById('stack-result').innerText = `Додано: ${newVal}`;
    updateVisuals();
}

function popStack() {
    if (stack.length === 0) {
        document.getElementById('stack-result').innerText = "Стек порожній!";
        return;
    }
    const removed = stack.pop();
    document.getElementById('stack-result').innerText = `Видалено: ${removed}`;
    updateVisuals();
}

function peekStack() {
    if (stack.length === 0) {
        document.getElementById('stack-result').innerText = "Стек порожній!";
    } else {
        const top = stack[stack.length - 1];
        document.getElementById('stack-result').innerText = `Верхній елемент: ${top}`;
    }
}

function isEmptyStack() {
    const empty = stack.length === 0;
    document.getElementById('stack-result').innerText = `Порожній? ${empty}`;
}

function sizeStack() {
    document.getElementById('stack-result').innerText = `Розмір стека: ${stack.length}`;
}

// Перший запуск для відображення початкових даних
updateVisuals();

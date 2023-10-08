document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".square").addEventListener("click", function () {
        draw_square(get_number());
    });
    document.querySelector(".triangle").addEventListener("click", function () {
        draw_triangle(get_number());
    });
    document.querySelector(".circle").addEventListener("click", function () {
        draw_circle(get_number());
    });
});

function get_number() {
    return Number(document.querySelector('input').value) || 0;
}

function draw_square(number) {
    const drawField = document.querySelector('.draw-field');

    for (let i = 0; i < number; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        const size = Math.random() * (300 - 50) + 50; // Размер от 50 до 300
        const x = Math.random() * (1800 - size);
        const y = (Math.random() * (800 - size)) + 88;

        square.style.position = 'absolute';
        square.style.left = x + 'px';
        square.style.top = y + 'px';
        square.style.width = size + 'px';
        square.style.height = size + 'px';
        square.style.backgroundColor = '#FF1A1A';
        square.addEventListener('click', function () {
            square.style.backgroundColor = '#FFFF1A';
            setTimeout(function () {
                square.remove();
            }, 100); // Исчезновение после 0.1 секунды
        })

        drawField.appendChild(square);
    }
}

function draw_triangle(number) {
    const drawField = document.querySelector('.draw-field');

    for (let i = 0; i < number; i++) {
        const triangle = document.createElement('div');
        triangle.classList.add('triangle');

        const size = Math.random() * (300 - 50) + 50; // Размер от 50 до 300
        const x = Math.random() * (1800 - size);
        const y = (Math.random() * (800 - size)) + 88;

        triangle.style.position = 'absolute';
        triangle.style.left = x + 'px';
        triangle.style.top = y + 'px';
        triangle.style.borderLeft = size / 2 + 'px solid transparent';
        triangle.style.borderRight = size / 2 + 'px solid transparent';
        triangle.style.borderBottom = size + 'px solid #1A1AFF';

        triangle.addEventListener('click', function () {
            triangle.style.borderBottom = size + 'px solid #FFFF1A';
            setTimeout(function () {
                triangle.remove();
            }, 100); // Исчезновение после 0.1 секунды
        });

        drawField.appendChild(triangle);
    }
}

function draw_circle(number) {
    const drawField = document.querySelector('.draw-field');

    for (let i = 0; i < number; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        const size = Math.random() * (300 - 50) + 50; // Размер от 50 до 300
        const x = Math.random() * (1800 - size);
        const y = (Math.random() * (800 - size)) + 88;

        circle.style.position = 'absolute';
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
        circle.style.backgroundColor = '#1A8D1A';
        circle.style.borderRadius = '50%'; // Задаем форму круга

        circle.addEventListener('click', function () {
            circle.style.backgroundColor = '#FFFF1A';
            setTimeout(function () {
                circle.remove();
            }, 100); // Исчезновение после 0.1 секунды
        });

        drawField.appendChild(circle);
    }
}
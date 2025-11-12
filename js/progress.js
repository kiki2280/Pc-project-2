document.addEventListener('DOMContentLoaded', () => {
    const numberElement = document.querySelector('.course__progress-label .course__number');
    const progressElement = document.querySelector('progress');
    const courseSection = document.querySelector('.course');

    const maxValue = 1000000;         // Максимум прогресс-бара
    const duration = 5000;            // Длительность анимации
    const stepTime = 40;              // Шаг анимации

    let animated = false;             //чтобы запустить анимацию только один раз

    // Функция плавной линии прогресса
    function animateProgress(finalValue) {
        let currentValue = 0;
        const steps = duration / stepTime;
        const increment = finalValue / steps;

        numberElement.textContent = '0₽';
        progressElement.value = 0;

        const interval = setInterval(() => {
            currentValue += increment;

            if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(interval);
            }

            numberElement.textContent = `${Math.floor(currentValue).toLocaleString('ru-RU')}₽`;
            progressElement.value = currentValue;
        }, stepTime);
    }

    // Проверка, находится ли элемент примерно в центре экрана
    function isInMiddleViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const topThird = windowHeight / 3;
        const bottomThird = windowHeight * 2 / 3;

        // Координата середины элемента
        const elementMiddle = rect.top + rect.height / 2;

        return elementMiddle >= topThird && elementMiddle <= bottomThird;
    }

    // Обработчик скролла
    function onScroll() {
        if (!animated && isInMiddleViewport(courseSection)) {
            animated = true;

            // случайное число от 350000 до 600000
            const randomValue = Math.floor(350000 + Math.random() * (600000 - 350000));

            animateProgress(randomValue);
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
});
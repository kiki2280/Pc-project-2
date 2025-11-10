const modalBtns = document.querySelectorAll('.modal__button');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

// Открытие модального окна по всем кнопкам
modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
        document.body.classList.add('noscroll');
    });
});

// Закрытие по клику вне модального содержимого
modal.addEventListener('click', (e) => {
    const modalContent = e.target.closest('.modal__inner');
    if (!modalContent) {
        modal.style.display = 'none';
        document.body.classList.remove('noscroll');
    }
});

// Закрытие по крестику
if (modalClose) {
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.classList.remove('noscroll');
    });
}

const contents = document.querySelectorAll('.program-line__content');

contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title');
    const descr = elem.querySelector('.program-line__descr');

    title.addEventListener('click', () => {
        // Сначала закрываем все остальные descr
        contents.forEach((otherElem) => {
            const otherDescr = otherElem.querySelector('.program-line__descr');
            if (otherDescr !== descr) {
                otherDescr.classList.remove('active');
            }
        });

        // Открываем/закрываем текущий
        descr.classList.toggle('active');
    });
});

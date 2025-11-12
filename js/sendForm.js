const sendForm = () => {
    const forms = document.querySelectorAll('.modal');

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();

            const text = form.querySelector('input[type="text"]');
            const tel = form.querySelector('input[type="tel"]');
            const email = form.querySelector('input[type="email"]');

            const sendObj = {
                name: text?.value || '',
                phone: tel?.value || '',
                email: email?.value || ''
            };

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(sendObj)
            })
            .then(response => response.json())
            .then(json => {
                console.log('Ответ сервера:', json);

                //  Очистка формы
                form.reset();

                //  Закрытие модалки после успешной отправки
                form.style.display = 'none';
                document.body.classList.remove('noscroll');
            })
            .catch(err => {
                console.error('Ошибка при отправке:', err);
            });
        });
    });
};

sendForm();

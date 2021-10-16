const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert(' Fill in all the fields');
    }
    const object = {
        email: `${email.value}`,
        password: `${password.value}`,
    };
    console.log(object);
    event.currentTarget.reset();
}

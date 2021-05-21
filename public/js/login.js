// activity 18, public/js/loginFormHandler.js

const loginFormHandler = async function(event) {
    event.preventDefault();

    const usernameEl = document.querySelector('#username-login');
    const passwordEl = document.querySelector('#password-login');

    if (username && password) {
        const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({  username: usernameEl.value,
                                password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
        //send user to dashboard if login is OK.
        document.location.replace('./dashboard');
        } else {
        alert('Failed to login');
        }
    }
};

    document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
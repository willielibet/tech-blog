// activity 18, public/js/login.js

// const signupFormHandler = async function(event) {
//     event.preventDefault();
  
//     const username = document.querySelector('#username-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();
  
//     if (username && password) {
//         const response = await fetch('/api/user', {
//         method: 'POST',
//         body: JSON.stringify({ username, password }),
//         headers: { 'Content-Type': 'application/json' },
//         });
     
//         if (response.ok) {
//           document.location.replace('/dashboard');
//           } else {
//           alert('Sign up was not successful!');
//         }

//     }
//   };
  
//   document
//     .querySelector('.signup-form')
//     .addEventListener('submit', signupFormHandler);


const signupFormHandler = async function(event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-input-signup');
  const passwordEl = document.querySelector('#password-input-signup');

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  document.location.replace('/dashboard');
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to sign up');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);

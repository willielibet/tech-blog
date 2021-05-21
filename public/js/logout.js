


const logoutFormHandler = async function() {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        //send user to landing page
      document.location.replace('/');
    } else {
      alert('Failed to log out');
    }
  };
  
  document
  .querySelector('#logout-user')
  .addEventListener('click', logoutFormHandler);
  
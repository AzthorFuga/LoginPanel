function handleLogin(event) {
  event.preventDefault(); // Mencegah form reload halaman

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulasi login (logika ini bisa disesuaikan dengan backend)
  if (username === 'admin' && password === '123') {
    window.location.href = 'http://localhost:8158/Index.html'; // Ganti dengan file HTML panel Anda
  } else {
    alert('Invalid username or password!');
  }
}
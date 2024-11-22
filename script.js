
const loginForm = document.querySelector('.login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        const userData = localStorage.getItem(username);

        if (userData) {
            const storedData = JSON.parse(userData);
            if (storedData.password === password) {
                alert('Login realizado com sucesso!');
                window.location.href = '../home.html'; 
            } else {
                alert('Senha incorreta!');
            }
        } else {
            alert('Usuário não encontrado!');
        }
    });
}



const cadastroForm = document.querySelector('.cadastroForm');
if (cadastroForm) {
    cadastroForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username-cadastro').value.trim();
        const password = document.getElementById('password-cadastro').value.trim();

        if (!username || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (localStorage.getItem(username)) {
            alert('Usuário já cadastrado!');
        } else {
            localStorage.setItem(username, JSON.stringify({ password }));
            alert('Cadastro realizado com sucesso!');
            window.location.href = '../login/index.html';
        }
    });
}

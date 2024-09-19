const users = [
    { username: 'funcionario', password: '123', role: 'Funcionario' },
    { username: 'gerente', password: '1234', role: 'Gerente' },
    { username: 'admin', password: '12345', role: 'Admin' }
  ];
  
  // Evento de login
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
  
    // Verifica se o usuário existe
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      // Redireciona para a página principal com base no tipo de usuário
    //   window.location.href = `dashboard.html?role=${user.role}`;
      window.location.href = `http://127.0.0.1:5500/pagina%202/index.html`;
      return true
    } else {
      errorMsg.textContent = 'Usuário ou senha inválidos';
    }
  });

  function abrirNovaAba(){
    window.open('http://127.0.0.1:5500/pagina%202/index.html');
  }
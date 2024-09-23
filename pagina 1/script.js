// Dados dos usuários corretos para fazer o login e ter o acesso.
const users = [
    {
    role: 'funcionario',
    email: 'funcionario@empresa.com',
    password: 'funcSenha123',
    redirectTo: 'http://127.0.0.1:5500/pagina_funcionario/funcionario.html'
},
    {
    role: 'gerente',
    email: 'gerente@empresa.com',
    password: 'gerenteSenha123',
    redirectTo: 'http://127.0.0.1:5500/pagina_gerente/gerente.html'
},
    {
    role: 'administrador',
    email: 'admin@empresa.com',
    password: 'adminSenha123',
    redirectTo: 'http://127.0.0.1:5500/pagina_adm/adm.html?'
}];

// Variável para contar as tentativas restantes
let attemptsLeft = 3;

// Seleciona os elementos
const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");
const errorMessage = document.getElementById("errorMessage");

// Adiciona o evento de clique ao botão de login
loginBtn.addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

// Verifica se o email e a senha combinam com algum dos usuários cadastrados
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
// Se o usuário for encontrado, redireciona para a página apropriada
        window.location.href = user.redirectTo;
    } else {
      // Decrementa o número de tentativas restantes
        attemptsLeft--;

      // Verifica se ainda há tentativas restantes
    if (attemptsLeft > 0) {
        errorMessage.innerText = `Login ou senha incorretos. Você tem mais ${attemptsLeft} tentativa(s).`;
    } else {
          // Bloqueia após 3 tentativas
        errorMessage.innerText = "Sua conta foi bloqueada após 3 tentativas incorretas.";
        loginBtn.disabled = true; // Desativa o botão de login
    }}});

// aqui eu adicionei uma api de particulas para complemetar o efeito visual da pagina deixando a visibilidade mais agradavel
    particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
          }
        },
        retina_detect: true
      });
      var count_particles, stats, update;
      stats = new Stats();
      stats.setMode(0);
      stats.domElement.style.position = "absolute";
      stats.domElement.style.left = "0px";
      stats.domElement.style.top = "0px";
      document.body.appendChild(stats.domElement);
      count_particles = document.querySelector(".js-count-particles");
      update = function () {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
          count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
      
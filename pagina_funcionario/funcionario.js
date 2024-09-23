// // Função para alternar os detalhes do projeto
// function toggleProjectDetails(projectId) {
//     const detailElement = document.getElementById(`projectDetail${projectId}`);
//     if (detailElement.classList.contains('hidden')) {
//         detailElement.classList.remove('hidden');
//     } else {
//         detailElement.classList.add('hidden');
//     }
// }

// // Notificação de novos produtos/projetos
// function displayNotification(message) {
//     const notificationElement = document.getElementById('notificationMessage');
//     notificationElement.textContent = message;
//     notificationElement.classList.remove('hidden');
    
//     // Esconde a notificação após 5 segundos
//     setTimeout(() => {
//         notificationElement.classList.add('hidden');
//     }, 5000);
// }

// // Exemplo: Exibir notificação ao carregar a página
// window.onload = function() {
//     displayNotification("Novo projeto adicionado: Sistema de Monitoramento de Segurança!");
// };

// // Scroll Suave para navegação entre seções
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    // Simulação de dados e notificações dinâmicas
    let notificationMessage = document.getElementById("notificationMessage");

    // Função para mostrar notificações com animação
    function showNotification(message) {
        notificationMessage.innerHTML = message;
        notificationMessage.style.display = "block";
        notificationMessage.classList.add("slide-in");
        
        // Após 3 segundos, oculta a notificação com animação
        setTimeout(() => {
            notificationMessage.classList.remove("slide-in");
            notificationMessage.classList.add("fade-out");
            setTimeout(() => {
                notificationMessage.style.display = "none";
                notificationMessage.classList.remove("fade-out");
            }, 500);
        }, 3000);
    }

    // Simular uma notificação ao carregar a página
    showNotification("Bem-vindo! Verifique as atualizações sobre os produtos.");

    // Botões para interagir com os projetos (Exemplo)
    let projectButtons = document.querySelectorAll(".project button");

    projectButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            let projectName = this.closest(".project").querySelector("h3").innerText;
            showNotification(`Você está visualizando o projeto: ${projectName}`);
        });
    });

    // Animações ao passar o mouse nos botões
    let buttons = document.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.2s ease-in-out";
        });

        button.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
            this.style.transition = "transform 0.2s ease-in-out";
        });
    });

    // Efeitos de hover em seções da página (Exemplo de produtos)
    let productCards = document.querySelectorAll(".product");

    productCards.forEach(function(card) {
        card.addEventListener("mouseover", function() {
            this.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
            this.style.transition = "box-shadow 0.3s ease";
        });

        card.addEventListener("mouseout", function() {
            this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            this.style.transition = "box-shadow 0.3s ease";
        });
    });

    // Exemplo de manipulação de informações de produtos com animação
    let productDetails = document.querySelectorAll(".product");

    productDetails.forEach(function(product) {
        let moreInfo = document.createElement("div");
        moreInfo.innerHTML = "<p>Detalhes adicionais do produto...</p>";
        moreInfo.style.display = "none";
        product.appendChild(moreInfo);

        product.addEventListener("click", function() {
            if (moreInfo.style.display === "none") {
                moreInfo.style.display = "block";
                moreInfo.classList.add("fade-in");
            } else {
                moreInfo.classList.add("fade-out");
                setTimeout(() => {
                    moreInfo.style.display = "none";
                    moreInfo.classList.remove("fade-out");
                }, 500);
            }
        });
    });
});

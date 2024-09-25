document.addEventListener("DOMContentLoaded", function () {
    // Função para exibir notificações de atualizações
    // A função showNotification() exibe uma mensagem de notificação na página. Ela oculta a notificação automaticamente após 5 segundos.

    function showNotification(message) {
        const notificationElement = document.getElementById('notificationMessage');
        notificationElement.textContent = message;
        notificationElement.classList.remove('hidden');

        setTimeout(() => {
            notificationElement.classList.add('hidden');
        }, 5000); // Esconde a notificação após 5 segundos
    }

    // Simulação de novas atualizações no sistema
    //A função checkForUpdates() simula atualizações no sistema a cada 10 segundos e exibe as mensagens relevantes no balão de notificação.

    function checkForUpdates() {
        // Simulando que uma atualização chegou
        const updates = [
            "Novo funcionário adicionado: Pedro Oliveira",
            "Vendas do mês atualizadas: R$ 600,000",
            "Novo equipamento adicionado ao inventário",
            "Lucros do último mês atualizados: R$ 200,000"
        ];

        // Exibe uma notificação a cada 10 segundos
        let index = 0;
        setInterval(() => {
            if (index < updates.length) {
                showNotification(updates[index]);
                index++;
            }
        }, 10000); // Atualizações simuladas a cada 10 segundos
    }

    
    checkForUpdates();

    // Dados para os gráficos (simulação)
    const salesData = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        datasets: [{
            label: 'Vendas (R$)',
            data: [300000, 400000, 350000, 450000, 500000, 480000, 600000],
            backgroundColor: 'rgba(0, 102, 255, 0.6)',
            borderColor: 'rgba(0, 102, 255, 1)',
            borderWidth: 1
        }]
    };

    const profitsData = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        datasets: [{
            label: 'Lucros (R$)',
            data: [100000, 120000, 110000, 130000, 150000, 140000, 200000],
            backgroundColor: 'rgba(0, 153, 76, 0.6)',
            borderColor: 'rgba(0, 153, 76, 1)',
            borderWidth: 1
        }]
    };

    // Inicializa gráficos usando Chart.js
    //Usando o Chart.js, gráficos interativos de barras e linhas foram criados para representar as vendas e lucros.
    //Os dados são simulados para exemplo, mas você pode integrá-los a uma API ou banco de dados para trazer dados reais.

    const salesChartCtx = document.getElementById('salesChart').getContext('2d');
    const profitsChartCtx = document.getElementById('profitsChart').getContext('2d');

    new Chart(salesChartCtx, {
        type: 'bar',
        data: salesData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(profitsChartCtx, {
        type: 'line',
        data: profitsData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Tornar o layout mais responsivo
    //A função adjustLayout() adapta o layout das "cards" dependendo da largura da janela. Em telas menores, os cartões são exibidos um abaixo do outro.

    function adjustLayout() {
        const cards = document.querySelectorAll('.card');
        if (window.innerWidth < 768) {
            cards.forEach(card => {
                card.style.flex = '100%';
                card.style.marginBottom = '20px';
            });
        } else {
            cards.forEach(card => {
                card.style.flex = '1';
                card.style.marginBottom = '0';
            });
        }
    }

    //O evento window.resize é utilizado para ajustar o layout sempre que a janela for redimensionada.
    window.addEventListener('resize', adjustLayout);
    adjustLayout(); // Ajuste inicial no carregamento da página
});




//A simulação de atualizações automáticas foi implementada para melhorar a experiência do gerente, que poderá ver notificações sobre novos funcionários, vendas ou lucros diretamente no painel.

//Resultado:
// Notificações: Mensagens dinâmicas aparecerão no topo da página para alertar o gerente sobre mudanças recentes.
// Gráficos Responsivos: Os gráficos de vendas e lucros são interativos e redimensionam automaticamente conforme o tamanho da tela.
// Layout Adaptativo: O layout da página ajusta-se de maneira responsiva, facilitando a visualização em diferentes dispositivos.
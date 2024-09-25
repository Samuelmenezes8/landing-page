document.addEventListener("DOMContentLoaded", function () {
    const resourceForm = document.getElementById('resourceForm');
    const resourceList = document.getElementById('resourceList');
    let resources = JSON.parse(localStorage.getItem('resources')) || [];
    let totalProdutosVendidos = 0;  // Variável para armazenar a quantidade de produtos vendidos

    function renderResources() {
        resourceList.innerHTML = '';
        let totalProdutos = 0;
        let produtosEstoque = 0;
        let totalRevenue = 0; // Variável para armazenar o faturamento total
        totalProdutosVendidos = 0; // Reseta o valor a cada chamada

        resources.forEach((resource, index) => {
            totalProdutos += 1;
            produtosEstoque += parseInt(resource.quantity);
            totalRevenue += resource.quantity * resource.price; // Cálculo do faturamento

            // Para simular a venda de produtos, suponha que metade de cada produto foi vendido
            const produtosVendidosPorProduto = Math.floor(resource.quantity / 2);
            totalProdutosVendidos += produtosVendidosPorProduto; // Soma a quantidade vendida

            const li = document.createElement('li');
            li.classList.add('fade-in');

            li.innerHTML = `
                ${resource.type}: ${resource.name} - Quantidade: ${resource.quantity} - Preço: R$${resource.price.toFixed(2)}
                <div>
                    <button onclick="editResource(${index})">Editar</button>
                    <button onclick="removeResource(${index})">Remover</button>
                </div>
            `;

            resourceList.appendChild(li);
        });

        document.getElementById('totalProdutos').textContent = totalProdutos;
        document.getElementById('produtosEstoque').textContent = produtosEstoque;
        document.getElementById('totalRevenue').textContent = `R$ ${totalRevenue.toFixed(2)}`;
        document.getElementById('produtosVendidos').textContent = totalProdutosVendidos; // Atualiza o total de produtos vendidos

        localStorage.setItem('resources', JSON.stringify(resources));
    }

    resourceForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const resourceType = document.getElementById('resourceType').value;
        const resourceName = document.getElementById('resourceName').value;
        const resourceQuantity = document.getElementById('resourceQuantity').value;
        const resourcePrice = document.getElementById('resourcePrice').value;

        const existingResourceIndex = resources.findIndex(resource => resource.name === resourceName);

        if (existingResourceIndex >= 0) {
            resources[existingResourceIndex].quantity = parseInt(resourceQuantity);
            resources[existingResourceIndex].price = parseFloat(resourcePrice);
        } else {
            const newResource = {
                type: resourceType,
                name: resourceName,
                quantity: parseInt(resourceQuantity),
                price: parseFloat(resourcePrice)
            };
            resources.push(newResource);
        }

        resourceForm.reset();
        renderResources();
    });

    window.editResource = function (index) {
        const resource = resources[index];
        document.getElementById('resourceType').value = resource.type;
        document.getElementById('resourceName').value = resource.name;
        document.getElementById('resourceQuantity').value = resource.quantity;
        document.getElementById('resourcePrice').value = resource.price;
    };

    window.removeResource = function (index) {
        resources.splice(index, 1);
        renderResources();
    };

    renderResources();
});





// O administrador pode adicionar novos recursos (equipamentos, veículos, dispositivos).
// Se um recurso já existe, sua quantidade será atualizada em vez de duplicar o recurso.

//O layout permanece responsivo e o código foi pensado para garantir uma interface amigável e intuitiva. A lista de recursos exibe as opções de maneira clara, e as interações são simples.

//Animações: Usei uma animação suave de "fade-in" para cada item da lista ao ser adicionado ou atualizado, tornando a interface mais amigável visualmente.

//Observador de Mutação: A biblioteca MutationObserver é usada para aplicar animações sempre que a lista de recursos é alterada.

//A lista de recursos é armazenada no localStorage do navegador. Assim, quando a página é recarregada, os dados não são perdidos.

// localStorage.getItem('resources'): Busca os dados salvos no navegador. Se não houver dados, inicia com uma lista vazia.

// localStorage.setItem('resources', JSON.stringify(resources)): Salva os recursos no localStorage sempre que a lista é atualizada.
const btnGerarParcelas = document.getElementById("btnGerarParcelas");
const container = document.getElementById("container-inputs");
const parcelas = document.getElementById("parcelas");
let contador = 1;

// Função para adicionar um novo input dinamicamente

function adicionarInput() {
   
    for (contador = 1; contador <= parcelas.value; contador++) {

        const novaLabel = document.createElement("label");
        novaLabel.htmlFor = "input" + contador;
        novaLabel.textContent = "parcela" + contador + ":";

        const novoInput = document.createElement("input");
        novoInput.type = "date";
        novoInput.name = "inputs[]"; // Define o nome do input como um array para envio
        novoInput.id = "input" + contador;
        novoInput.placeholder = "Digite algo";

        const novoInputB = document.createElement("input");
        novoInputB.type = "number";
        novoInputB.name = "inputs[]"; // Define o nome do input como um array para envio
        novoInputB.id = "input" + contador;
        novoInputB.placeholder = "Digite algo";

        const container = document.getElementById("container-inputs");

        // Adiciona o novo input ao container
        container.appendChild(novaLabel);
        container.appendChild(novoInput);
        container.appendChild(novoInputB);
        container.appendChild(document.createElement("br"));
    }
}

btnGerarParcelas.addEventListener('click', async (event) => {
    adicionarInput();
})
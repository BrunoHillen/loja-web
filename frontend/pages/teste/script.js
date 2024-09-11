document.addEventListener("DOMContentLoaded", function() {
    var clienteModal = document.getElementById("clienteModal");
    var produtoModal = document.getElementById("produtoModal");

    var buscarClienteBtn = document.getElementById("buscarClienteBtn");
    var closeClienteModal = document.getElementById("closeClienteModal");
    var buscarProdutoBtn = document.getElementById("buscarProdutoBtn");
    var closeProdutoModal = document.getElementById("closeProdutoModal");

    buscarClienteBtn.onclick = function() {
        clienteModal.style.display = "block";
    }

    closeClienteModal.onclick = function() {
        clienteModal.style.display = "none";
    }

    buscarProdutoBtn.onclick = function() {
        produtoModal.style.display = "block";
    }

    closeProdutoModal.onclick = function() {
        produtoModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == clienteModal) {
            clienteModal.style.display = "none";
        }
        if (event.target == produtoModal) {
            produtoModal.style.display = "none";
        }
    }

    var buscarClienteConfirmBtn = document.getElementById("buscarClienteConfirmBtn");
    buscarClienteConfirmBtn.onclick = function() {
        var buscarClienteInput = document.getElementById("buscarClienteInput").value;
        var clienteResultados = document.getElementById("clienteResultados");

        clienteResultados.innerHTML = "<p>Resultados de busca para: " + buscarClienteInput + "</p>";
    }

    var buscarProdutoConfirmBtn = document.getElementById("buscarProdutoConfirmBtn");
    buscarProdutoConfirmBtn.onclick = function() {
        var buscarProdutoInput = document.getElementById("buscarProdutoInput").value;
        var produtoResultados = document.getElementById("produtoResultados");

        produtoResultados.innerHTML = "<p>Resultados de busca para: " + buscarProdutoInput + "</p>";
    }
});
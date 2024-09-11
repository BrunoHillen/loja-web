import { fetchProduto, fetchProdutoId } from "./fetchApi/fetchProdutos.js";
import { fetchTipos } from "./fetchApi/fetchTipos.js";

window.addEventListener("load", () => {
    console.log(fetchProduto());
    console.log(fetchTipos());
    console.log(fetchProdutoId(1));

});


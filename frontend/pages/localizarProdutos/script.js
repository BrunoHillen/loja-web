import { fetchProduto } from "../../fetchApi/fetchProdutos.js";

const list = document.getElementById("list");

async function listagem() {

    const result = await fetchProduto();
    console.log(result);
    for (let index = 0; index < result.total; index++) {
        const element = result.resultados[index]

        list.innerHTML += `
            <tr>
            <td>${element.nomeProduto}</td>
            <td>${element.preco}</td>
            <td>
            <button type="button">Editar</button>
            </td>
            <td>
            <button type="button">Remover</button>
            </td>
            </tr>

      `
    }

}

listagem();










/*async function listagem(){
    let id;
    const result = await fetchTipos(); 
    console.log(result);
    for (let index = 0; index < result.resultados.length; index++) {
       // lista.innerHTML +=  result.resultados[index].nomeTipo;
       let tr = tipo.insertBefore
        tipo += result.resultados[index].idTipo;
         
        tipo.append(id);
    } 
    
    
}

listagem();*/
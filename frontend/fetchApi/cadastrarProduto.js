import axios from "axios";

export async function createProduto(data) {
    const url = "http://localhost:3000/produtos"
    const res = await axios.post(url, data);
    return res;
    /*console.log(res);
    console.log(res.data.resposta);
    alert(res.data.resposta)  
    window.location.reload();*/
}
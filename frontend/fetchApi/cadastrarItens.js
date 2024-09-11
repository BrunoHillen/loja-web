import axios from "axios";

export async function createItens(data) {
    const url = "http://localhost:3000/itens"
    const res = await axios.post(url, data);
    return res;
  
}
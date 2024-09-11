import axios from "axios";

export async function getProdutoCodBarra(codBarra) {
    const url = `http://localhost:3000/produtos/cod/${codBarra}`
    const res = await axios.get(url, codBarra);
    
    return res;
}
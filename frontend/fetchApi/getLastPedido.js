export async function  getLastPedido() {
    const req = await fetch("http://localhost:3000/pedidos/lastPedido");
    const res = await req.json();
     return res;
}
export async function  getAllCompras() {
    const req = await fetch("http://localhost:3000/pedidos/compras");
    const res = await req.json();
     return res;
}
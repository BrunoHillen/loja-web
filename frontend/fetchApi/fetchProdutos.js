export async function fetchProduto() {
    const req = await fetch("http://localhost:3000/produtos");
    const res = await req.json();
    return res;
}

export async function fetchProdutoId(id) {
    const req = await fetch(`http://localhost:3000/produtos/${id}`);
    const res = await req.json();
    console.log(res);
}
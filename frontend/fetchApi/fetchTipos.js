export async function  fetchTipos() {
    const req = await fetch("http://localhost:3000/tipos");
    const res = await req.json();
    console.log(res);
    return res;
}
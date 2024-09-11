export async function fetchUsuarioId(id) {
    const req = await fetch(`http://localhost:3000/usuarios/${id}`);
    const res = await req.json();
    console.log(res);
}
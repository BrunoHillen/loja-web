const cadastroSimplificado = document.getElementById("cadastroSimplificado");
const cadastroCompleto = document.getElementById("cadastroCompleto");

cadastroSimplificado.addEventListener("click",event=> {
    event.preventDefault();
     window.location.href = "../cadastroUsuarioSimplificado/index.html"
 })

cadastroCompleto.addEventListener("click",event=> {
   event.preventDefault();
    window.location.href = "../cadastroUsuario/index.html"
})
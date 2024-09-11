const alterarendereco = document.getElementById("alterarEndereco");
const alterarTelefone = document.getElementById("alterarTelefone");

alterarTelefone.addEventListener("click",event=> {
    event.preventDefault();
     const id = window.location.href.split("?")[1];
     window.location.href = `../alterarTelefoneUsuario/index.html?${id}`
 })

alterarendereco.addEventListener("click",event=> {
   event.preventDefault();
    const id = window.location.href.split("?")[1];
    window.location.href = `../alterarEnderecoUsuario/index.html?${id}`
})
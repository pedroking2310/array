let usarname = []
let password = []

function cadastrar(){
    let usuarioCadastro = document.getElementById("usuarioCadastro").value
    let senhaCadastro = document.getElementById("senhaCadastro").value
    
        if(usarname.indexOf(usuarioCadastro) == -1){
            usarname.push (usuarioCadastro)
            password.push (senhaCadastro)
            window.location.href = "about.html"
            

        
        }
        
    else{
        alert("Usuario já cadastrado!")
    }
    
}
    
function voltar(){
    window.location.href = "index.html"
}
function logar(){
    let usuarioLogin = document.getElementById("usuarioLogin").value
    if(usarname.indexOf(usuarioLogin) != -1){
        alert("Logado!")
        
    }
}
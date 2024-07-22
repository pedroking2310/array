let frutas = [];
let precos = [];

function cadastro() {
    
    let fruta = document.getElementById("fruta").value
    let preco = Number (document.getElementById("preco").value);
    if (fruta != "" && preco != 0){
    
    frutas.push(fruta);
    precos.push(preco); 
    let mensagem = "lista de frutas"
    for(let produto of frutas ){
        let pos = frutas.indexOf(produto);
    mensagem += "<br>" +produto+ " preço: " + precos[pos];
    
    }
    
    document.getElementById("lista").innerHTML = mensagem;
}else{
    alert(" Preencha corretamente os dois campos")
}
}

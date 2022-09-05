let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvxwyxABCDEFGHIJKLMNOPQRSTUXWYWZ1234567890!@"; //para gerar a senha aleatória
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value; //sizePassword indica o valor do tamnho que o usuárioo definiu para a senha

}
function generatePassword(){
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n)); //gerar número aleatório com base no tamanho que temos.

    }
  
containerPassword.classList.remove("hide");    //retirando a classe hide para 
password.innerHTML = pass;
novaSenha=pass;
}

function copyPassword(){ 
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);//copiar a senha gerada para colocar (mostrar) no html
}

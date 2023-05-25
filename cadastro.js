var clic= document.getElementById("botao")
clic.addEventListener('click', function(clic){
    console.log('teste')
    var nome = document.getElementById("nome");
    var data = document.getElementById("data");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var verificar = true
    var nome1 = nome.value;
    var data1= data.value;
    var email1 = email.value;
    var senha1 = senha.value;
    var t = senha.lenght
    console.log(t);
    if (!email1.match(/^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g)){
        verificar = false
    };

    if(!isNaN(nome1)){
        verificar = false
    }
    if(senha1.lenght < 8){
        verificar = false
    }

    if(verificar){
        alert("Dado(s) valido(s)")


    }else{
        alert("Dado(s) invalido(s)") 
    }
});
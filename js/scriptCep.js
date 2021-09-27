function mascara_cep(){
    var cep= document.getElementById('cep')
    if(cep.value.length == 5 || cpf.value.length == 5){
        cep.value = cep.value += "-"
    } else if(cpf.value.length == 11){
        cep.value = cep.value += "-"
    }
}
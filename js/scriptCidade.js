function gerarCidades(){
    var estado = this.document.getElementById("estado").value;
  
    var cidade = document.getElementById("cidade");
    

    var option ="";

    if(estado ==""){
        limpaCombo();
    }

    if(estado == "MG"){
        limpaCombo();

        option = document.createElement("option");
        option.value ="1";
        option.text ="Lagoa da Prata";
        cidade.add(option);

        option = document.createElement("option");
        option.value ="2";
        option.text ="formigas";
        cidade.add(option);

        option = document.createElement("option");
        option.value ="3";
        option.text ="Belo Horizonte";
        cidade.add(option);
    }

    if(estado =="RJ"){
        limpaCombo();

        option = document.createElement("option");
        option.value ="1";
        option.text ="Angra dos Reis";
        cidade.add(option);

        option = document.createElement("option");
        option.value ="2";
        option.text ="Copa Cabana";
        cidade.add(option);

        option = document.createElement("option");
        option.value ="3";
        option.text ="Parati";
        cidade.add(option);
    }

    if(estado =="SP"){
        limpaCombo();

        option = document.createElement("option");
        option.value ="1";
        option.text ="Adamantina";
        cidade.add(option);

        option = document.createElement("option");
        option.value ="2";
        option.text ="Américo Brasiliense";
        cidade.add(option);

        option = document.createElement("option");
        option.value ="3";
        option.text ="São Paulo";
        cidade.add(option);

        option = document.createElement("option");
        option.value ="4";
        option.text ="Pacaembu";
        cidade.add(option);
    }
    
    
    if(estado =="DF"){
        limpaCombo();

        option = document.createElement("option");
        option.value ="1";
        option.text ="Águas Claras";
        cidade.add(option);

        option = document.createElement("option");
        option.value ="2";
        option.text ="Brasília";
        cidade.add(option);

        option = document.createElement("option");
        option.value ="3";
        option.text ="Ceilândia";
        cidade.add(option);

        option = document.createElement("option");
        option.value ="4";
        option.text ="Gama";
        cidade.add(option);
    }


}

function limpaCombo(){
    var comboCidades = document.getElementById("cidade");

    while (comboCidades.length){
        comboCidades.remove(0);
    }
}



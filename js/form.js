/*window.addEventListener("DOMContentLoaded", function(){

    var form =document.getElementById("my-form");
    var status = document.getElementById("status");

    function sucess(){
        form.reset();
        Button.style ="display: none";
        status.innerHTML ="Formulário envido com sucesso!";
    }
/*
    function error(){
            status.innerHTML = "Oops! Existe algum problema.";
    }

/*
    form.addEventListener("submit", function(ev){
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.data, sucess, error);
    });

    
});

function ajax(method, url, data, success, error){
    var xhr =new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept","application/json");
    xhr.orreadystatechange = function(){
        if(xhr.readyState !== XMLHttpRequest.DONE) return;
        if(xhr.status === 200){
            sucess(xhr.response, xhr.responseType);
        }else{
            error(xhr, status, xhr.response, xhr.responsetype);
        }
    };
    xhr.send(data);
}*/
/*
function sucess(){
    form.reset();
    status.classList.add('sucess');
    status.innerHTML ="Thanks";
}

*/
function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById("txtano");
    var res = window.document.getElementById("res");

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("ERRO - Verifique os dados e tente novamente");
    }else{
        var fsex = window.document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var genero = " ";
        var img = window.document.createElement("img");
        img.setAttribute("id", "foto");
        img.style.borderRadius = "50%";

        if(fsex[0].checked){
            genero = "Homem";

            if(idade >=0 && idade < 10){
                //crianca
                img.setAttribute("src", "imagens/crianca.menino.jpg");
            }else if (idade < 21){
                //adolescente
                img.setAttribute('src', 'imagens/adolescente.menino.jpg');
                img.src = "imagens/adolescente.menino.jpg"
            }else if (idade > 21){
                //adulto
                img.src = "imagens/adulto.homem.jpg"
            }

        }else if (fsex[1].checked){
            genero = "Mulher";

            if(idade >=0 && idade < 10){
                //crianca
                img.setAttribute("src", "imagens/crianca.menina.jpg");
            }else if (idade < 21){
                //adolescente
                img.setAttribute("src", "imagens/adolescente.menina.jpg");
            }else if (idade > 21){
                //adulta
                img.setAttribute("src", "imagens/adulta.mulher.jpg");
            }

        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
    }

}
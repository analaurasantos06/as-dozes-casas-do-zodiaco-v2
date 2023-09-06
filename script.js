function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    
    if(valor=="gemeos"){
        texto.innerHTML = "gemeos";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","300px");
        
    }
    else if(valor=="escorpiao"){
        texto.innerHTML = "escorpiao";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
       
    }
    
    else if(valor=="peixes"){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="sagitario"){
        texto.innerHTML = "sagitario";
        imagem.setAttribute("src","img/sargitario.png");
        imagem.setAttribute("width","300px");
        
    }
    else if(valor=="aquario"){
        texto.innerHTML = "aquario";
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="leao"){
        texto.innerHTML = "leao";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="libra"){
        texto.innerHTML = "libra";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="cancer"){
        texto.innerHTML = "cancer";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="virgem"){
        texto.innerHTML = "virgem";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="touro"){
        texto.innerHTML = "touro";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor=="capricornio"){
        texto.innerHTML = "capricornio";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","300px");
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }

}
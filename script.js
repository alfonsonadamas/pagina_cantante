function editar(num2) {
    switch (num2) {
        case 1:
             var nombre = document.getElementById("nombre")
             nombre.textContent = "Kidd Keo"
             var texto = document.getElementById("texto")
             texto.textContent = "Pàdua Keoma, más conocido como Kidd Keo, es uno de los artistas más influyentes del momento y un referente de la escena trap en español."
             var vid = document.querySelector(".video")
             vid.innerHTML = '<iframe width="853" height="480" src="https://www.youtube.com/embed/w6VCjpkBvuA" title="Kidd Keo - A.N.A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
             

        break;

        case 2:
            nombre = document.getElementById("nombre")
            nombre.textContent = "Gera Mx"
            texto = document.getElementById("texto")
            texto.textContent = 'Gerardo Daniel Torres Montante, mejor conocido por su nombre artístico Gera MX, es un rapero y compositor mexicano. Su nombre artístico proviene de las primeras cuatro letras de su nombre real, "Gera" y la abreviatura del sello "Mexamafia", la abreviatura "MX" proviene de "México".'
            vid = document.querySelector(".video")
            vid.innerHTML = '<iframe width="853" height="480" src="https://www.youtube.com/embed/Pcu7mEsuhKE" title="Gera MX - Huracán ✨🌪✨" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
             

        break;

        case 3:
            nombre = document.getElementById("nombre")
            nombre.textContent = "Duki"
            texto = document.getElementById("texto")
            texto.textContent = 'Mauro Ezequiel Lombardo, conocido artísticamente como Duki, es un rapero, trapero y compositor argentino, considerado la voz líder de la música trap en Argentina, debido a sus múltiples éxitos con sus sencillos y su particular y distintiva voz y puesta en escena.'
            vid = document.querySelector(".video")
            vid.innerHTML = '<iframe width="853" height="480" src="https://www.youtube.com/embed/ymvYySd_P2E" title="DUKI - GIVENCHY (Video Oficial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
           

        break;
    
        default:
            break;
    }
}

function seleccion(num) {
    switch (num) {
        case 1:
            window.location.href = "cantante.html"
            break;
        case 2:
            window.location.href = "cantante1.html"
            break;
        case 3:
            window.location.href = "cantante2.html"
            break;
        
        default:
            break;
    }
}

function banner() {
            var nombre = document.getElementById("nombre")
            nombre.textContent = "Gera Mx"
            var texto = document.getElementById("texto")
            texto.textContent = 'Gerardo Daniel Torres Montante, mejor conocido por su nombre artístico Gera MX, es un rapero y compositor mexicano. Su nombre artístico proviene de las primeras cuatro letras de su nombre real, "Gera" y la abreviatura del sello "Mexamafia", la abreviatura "MX" proviene de "México".'
            var vid = document.querySelector(".video")
            vid.innerHTML = '<iframe width="853" height="480" src="https://www.youtube.com/embed/Pcu7mEsuhKE" title="Gera MX - Huracán ✨🌪✨" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
             
}


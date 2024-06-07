// Index - botão alterar tema
function toggleDarkTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('dark');{

        // Incompleto, vou terminar - Letícia
    }
}

// Seleciona a imagem
var image = document.getElementById("interactive-image");

// Adiciona um ouvinte de eventos para o evento de passagem do mouse
image.addEventListener("mouseover", function() {
    // Altera o tamanho da imagem ao passar o mouse
    image.style.transform = "scale(1.1)";
});

// Adiciona um ouvinte de eventos para o evento de retirada do mouse
image.addEventListener("mouseout", function() {
    // Retorna ao tamanho original da imagem quando o mouse é retirado
    image.style.transform = "scale(1)";
});

//analisando possibilidades de interatividade no site usando js /\





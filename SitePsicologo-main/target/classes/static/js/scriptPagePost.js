function getResponseApi() {
    fetch("http://localhost:8080/postagens")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data.forEach(function(post) {
                addPost(post)
                // console.log(post);
            });
        });
}


function addPost(post) {
    // Seleciona a div onde as postagens serão inseridas
    const postagensContainer = document.getElementById("postagens");

    // Cria a estrutura HTML para uma nova postagem com flip card
    const postElement = document.createElement("div");
    postElement.className = "col-md-4";
    postElement.innerHTML = `
        <div onclick ="redirectToPosts()" class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <p class="title">${post.titulo}</p>
                </div>
                <div class="flip-card-back">
                    <p>${post.resumo}</p>
                    <p>${post.autor}</p>
                    <p>${post.dataPostagem}</p>
                </div>
            </div>
        </div>
    `;

    // Adiciona a nova postagem ao container de postagens
    postagensContainer.querySelector('.row').appendChild(postElement);
}
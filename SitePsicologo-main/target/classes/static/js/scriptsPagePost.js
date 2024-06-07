
function getIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function getResponseApi() {
    const postId = getIdFromUrl();
    fetch(`http://localhost:8080/postagem/${postId}`)
        .then(response => response.json())
        .then(post => addPost(post))
}


function addPost(post) {
    // Seleciona a div onde as postagens serão inseridas
    const postagensContainer = document.getElementById("postagens");

    // Cria a estrutura HTML para uma nova postagem com flip card
    const postElement = document.createElement("div");
    postElement.className = "col-md-4";
    postElement.innerHTML = `
        <div class="flip-card">
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

function deletePost() {
    const postId = getIdFromUrl();
    fetch(`http://localhost:8080/postagem/${postId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            alert('Postagem deletada com sucesso!');
            window.location.href = '/posts.html'; 
        }
    });
}


function updateData(){
    const postId = getIdFromUrl();
    window.location.href = `/updatePost.html?id=${postId}`;
}
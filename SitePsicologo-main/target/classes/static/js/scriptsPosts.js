function getResponseApi() {
    fetch("http://localhost:8080/postagem")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data.forEach(function(post) {
                addPost(post)
            });
        });
}

function addPost(post) {
    const postagensContainer = document.getElementById("postagens");

    const postElement = document.createElement("div");
    postElement.className = "col-md-4";
    postElement.innerHTML = `
        <div class="flip-card" onclick="redirectToPagePost(${post.id})">
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

    postagensContainer.querySelector('.row').appendChild(postElement);
}


function redirectToPagePost(id) {
    window.location.href = `/pagePost.html?id=${id}`;
}

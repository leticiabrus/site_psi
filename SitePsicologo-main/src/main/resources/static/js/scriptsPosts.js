function getResponseApi() {
    fetch("http://localhost:8080/postagem")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data.forEach(function(post) {
                addPost(post);
            });
        });
}

function addPost(post) {
    const postagensContainer = document.getElementById("postagens");

    const postElement = document.createElement("div");
    postElement.className = "col-md-4";
    postElement.innerHTML = `
        <div class="card">
            <a class="card1" href="pagePost.html?id=${post.id}">
                <p>${post.titulo}</p>
                <p class="small">${post.resumo}</p>
                <div class="go-corner">
                    <div class="go-arrow">
                        →
                    </div>
                </div>
            </a>
        </div>
    `;

    postagensContainer.querySelector('.row').appendChild(postElement);
}

function redirectToPagePost(id) {
    window.location.href = `/pagePost.html?id=${id}`;
}
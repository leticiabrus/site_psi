// Função para obter o ID da postagem da URL
function getIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Função para buscar os detalhes da postagem da API e adicionar na página
function getResponseApi() {
    const postId = getIdFromUrl();
    fetch(`http://localhost:8080/postagem/${postId}`)
        .then(response => response.json())
        .then(post => addPost(post))
        .catch(error => console.error('Erro ao buscar postagem:', error));
}

// Função para adicionar os detalhes da postagem na página
function addPost(post) {
    // Seleciona a div onde as postagens serão inseridas
    const postagensContainer = document.getElementById("postagens");

    // Cria a estrutura HTML para a postagem
    const postElement = document.createElement("div");
    postElement.className = "col-md-8 offset-md-2";
    postElement.innerHTML = `
        <article class="mb-5">
            <h2 class="mb-3">${post.titulo}</h2>
            <p><strong>Autor:</strong> ${post.autor}</p>
            <p><strong>Data da Postagem:</strong> ${post.dataPostagem}</p>
            <hr>
            <p><strong>Resumo:</strong></p>
            <p style="word-wrap: break-word;">${post.resumo}</p>
            <hr>
            <p><strong>Conteúdo da Postagem:</strong></p>
            <p style="word-wrap: break-word;">${post.conteudo}</p>
        </article>
    `;

    // Adiciona a postagem ao container de postagens
    postagensContainer.querySelector('.row').appendChild(postElement);
}

// Função para excluir a postagem
function deletePost() {
    const postId = getIdFromUrl();
    fetch(`http://localhost:8080/postagem/${postId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                alert('Postagem deletada com sucesso!');
                window.location.href = '/posts.html';
            } else {
                alert('Erro ao deletar postagem.');
            }
        })
        .catch(error => console.error('Erro ao deletar postagem:', error));
}

// Função para redirecionar para a página de edição da postagem
function updateData() {
    const postId = getIdFromUrl();
    window.location.href = `/updatePost.html?id=${postId}`;
}
function createPost() {
    var postagem = {
        "titulo": document.getElementById("postTitle").value,
        "resumo": document.getElementById("postSummary").value,
        "conteudo": document.getElementById("postContent").value,
        "dataPostagem": document.getElementById("postDate").value,
        "autor": document.getElementById("postAuthor").value
    };
    
    console.log(postagem);

    fetch('http://localhost:8080/postagem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postagem)
    })
    .then(data => {
        alert("Postagem criada com sucesso!");
        window.location.href = "posts.html"; 
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Ocorreu um erro ao criar a postagem.");
    });
}


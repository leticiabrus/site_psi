function registerPsicologo() {
    var psicologo = {
        "nomeCompleto": document.getElementById("fullName").value,
        "dataNascimento": document.getElementById("birthDate").value,
        "dataFormacao": document.getElementById("graduationDate").value,
        "resumoProfissional": document.getElementById("professionalResume").value,
        "email": document.getElementById("email").value,
        "crp": document.getElementById("crp").value
    };
    
    console.log(psicologo);

    fetch('http://localhost:8080/psicologo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(psicologo)
    })
    .then(data => {
        alert("Psicologo cadastrado com sucesso!");
        window.location.href = "psicologos.html"; 
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Ocorreu um erro ao cadastrar o novo psicologo.");
    });
}


function getIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function getResponseApi() {
    const psicologoId = getIdFromUrl();
    fetch(`http://localhost:8080/psicologo/${psicologoId}`)
        .then(response => response.json())
        .then(psicologo => showData(psicologo))
}

function showData(psicologo) {
    const nomeCompleto = document.getElementById("fullName")
    const dataNascimento = document.getElementById("birthDate")
    const dataFormacao = document.getElementById("graduationDate")
    const resumoProfissional = document.getElementById("professionalResume")
    const emailTeste = document.getElementById("email")
    const crp = document.getElementById("crp")
    console.log(psicologo.resumoProfissional)
    nomeCompleto.textContent = psicologo.nomeCompleto
    dataNascimento.value = psicologo.dataNascimento
    dataFormacao.value = psicologo.dataFormacao
    resumoProfissional.textContent = psicologo.resumoProfissional
    emailTeste.textContent = psicologo.email
    crp.textContent = psicologo.crp

}

function updatePsicologo () {
    const psicologoId = getIdFromUrl();

    var psicologo = {
        "id": psicologoId,
        "nomeCompleto": document.getElementById("fullName").value,
        "dataNascimento": document.getElementById("birthDate").value,
        "dataFormacao": document.getElementById("graduationDate").value,
        "resumoProfissional": document.getElementById("professionalResume").value,
        "email": document.getElementById("email").value,
        "crp": document.getElementById("crp").value
    };
    
    fetch('http://localhost:8080/psicologo', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(psicologo)
    })
    .then(data => {
        alert("Dados do psicologo atualizados com sucesso!");
        window.location.href = "psicologos.html"; 
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Ocorreu um erro ao atualizar dados do psicologo.");
    });

}

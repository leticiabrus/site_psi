function getResponseApi() {
    fetch("http://localhost:8080/psicologo")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data.forEach(function(psicologo) {
                addPsicologo(psicologo)
            });
        });
}


function addPsicologo(psicologo) {
    const psicologoContainer = document.getElementById("psicologos");

    const psicologoElement = document.createElement("div");
    psicologoElement.className = "col-md-4";
    psicologoElement.innerHTML = `
        <div class="card mb-4 shadow-sm">
            <div class="card-body">
                <h5 class="card-title">Dr. ${psicologo.nomeCompleto}</h5>
                <p class="card-text">Data de Nascimento: ${psicologo.dataNascimento}</p>
                <p class="card-text">Data de Formação: ${psicologo.dataFormacao}</p>
                <p class="card-text">Resumo do Currículo: ${psicologo.resumoProfissional}.</p>
                <p class="card-text">Email: ${psicologo.email}</p>
                <p class="card-text">CRP: ${psicologo.crp}</p>
                <a class="edit text-black" onclick="updatePsicologo(${psicologo.id})" 
                    style="
                        float: right;
                        margin-left: 5px;
                        margin-bottom: 5px;
                        color: black;
                ">
                    <ion-icon name="create-outline"></ion-icon>
                </a>
                <a class="trash text-black" onclick="deletePsicologo(${psicologo.id})" 
                    style="
                        float: right;
                        margin-left: 5px;
                        margin-bottom: 5px;
                        color: black;
                ">
                    <ion-icon name="trash-outline"></ion-icon>
                </a>
            </div>
        </div>
    `;

    psicologoContainer.querySelector('.row').appendChild(psicologoElement);
}

function redirectToPosts(psicologoId){
    window.location.href = `/pagePost.html?id=${psicologoId}`;
}

function deletePsicologo(psicologoId){
    fetch(`http://localhost:8080/psicologo/${psicologoId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            alert('Psicologo deletado com sucesso!');
            window.location.href = '/psicologos.html';
        }
    });
}


function updatePsicologo(psicologoId){
    window.location.href = `/updatePsicologo.html?id=${psicologoId}`;
}



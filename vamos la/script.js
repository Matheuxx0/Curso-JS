function validarFormulario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }
    alert("Formulário enviado com sucesso!");
    return true;
}
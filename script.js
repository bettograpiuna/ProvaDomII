// Seleção de elementos
const formulario = document.getElementById('meuFormulario');
const listaUsuarios = document.getElementById('listaUsuarios');
const btnLimpar = document.getElementById('btnLimpar');

// b) Atribuir Eventos: Usando addEventListener para o 'submit'
formulario.addEventListener('submit', function(event) {
    
    // c) Prevenindo Comportamento Padrão
    event.preventDefault();

    // Capturando valores dos campos
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const telefone = document.getElementById('telefone').value;
    const nascimento = document.getElementById('nascimento').value;
    const email = document.getElementById('email').value;

    // d) Validação Simples: Verificando se campos estão vazios
    if (nome === "" || senha === "" || telefone === "" || nascimento === "" || email === "") {
        console.error("Erro: Todos os campos devem ser preenchidos!");
        alert("Por favor, preencha todos os campos antes de enviar.");
        return; // Interrompe a execução
    }

    // e) Adicionando Informações Dinamicamente
    // Criando o elemento container para o novo usuário
    const divUsuario = document.createElement('div');
    divUsuario.classList.add('card-usuario');

    // Criando o conteúdo com os dados
    divUsuario.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Tel:</strong> ${telefone}</p>
        <p><strong>Nascimento:</strong> ${nascimento}</p>
    `;

    // Adicionando à lista usando appendChild
    listaUsuarios.appendChild(divUsuario);

    // Limpar o formulário após o sucesso
    formulario.reset();
    console.log("Dados enviados com sucesso e adicionados à lista!");
});

// f) Botão de Reset: Limpar a lista de elementos adicionados
btnLimpar.addEventListener('click', function() {
    listaUsuarios.innerHTML = "";
    console.log("A lista de usuários foi limpa.");
});
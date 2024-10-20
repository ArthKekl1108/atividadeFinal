document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const novaLinha = document.createElement('tr');
    const colunaNome = document.createElement('td');
    const colunaEmail = document.createElement('td');
    colunaNome.textContent = nome;
    colunaEmail.textContent = email;
    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaEmail);
    document.querySelector('#tabela-cadastros tbody').appendChild(novaLinha);
    document.getElementById('form-cadastro').reset();
});

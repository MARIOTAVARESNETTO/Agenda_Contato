const form = document.getElementById('form-contato');
const nomesContato = [];
const numerosContato = [];

let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(numerosContato.includes(inputNumeroContato.value)){
        alert(`Esse número: ${inputNumeroContato.value} já foi adicionado`)
    }else{
        nomesContato.push(inputNomeContato.value);
        numerosContato.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
        }

        inputNomeContato.value = '';
        inputNumeroContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
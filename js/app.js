let amigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById ('nome-amigo');
   
    if(nomeAmigo.value ==''){
        alert('Escreva o nome de um amigo');
        return;
    }
    if(amigos.includes(nomeAmigo.value)) {
        alert('Amigo já adicionado!');
        return;
    }
    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.value);
    if (listaAmigos.textContent == '') {
    listaAmigos.textContent = nomeAmigo.value;
    }else{
    listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }
    nomeAmigo.value = '';
     
    atualizarLista();
    atualizarSorteio();
}

function sortear(){
    embaralhar(amigos);
    if(amigos.length < 4){
        alert ('não é possivel sortear, número de amigos é insuficiente.');
        return;
    }
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
    

}
function excluirAmigo(index){
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio (){
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista(){
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });
        
        lista.appendChild(paragrafo);
    }
   
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById ('nome-amigo').value = '';
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

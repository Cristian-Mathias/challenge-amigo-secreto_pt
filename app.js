let amigos = [];

function atualizarListaAmigos(amigos) {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }

}

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/;

    if (!regex.test(nome)) {
        alert("Por favor, insira um nome válido (mínimo 3 letras, apenas letras e espaços).");
        document.getElementById("amigo").value = "";
        return;
    }

    amigos.push(nome.toUpperCase());
    document.getElementById("amigo").value = "";

    atualizarListaAmigos(amigos);

}

 function sortearAmigo() {
        if (amigos.length === 0) {
            alert("A lista de amigos está vazia. Adicione pelo menos um nome para sortear.");
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        const amigoSorteado = amigos[indiceAleatorio];

        document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado.toUpperCase()}</strong>`;
    }
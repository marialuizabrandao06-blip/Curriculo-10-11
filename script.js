const nome = document.querySelector("#nome");

const botaoeditar = document.querySelector("#editar");

const botaoSair = document.querySelector("#sair");

botaoeditar.addEventListener("click", function(){
 const novoNome = prompt("Digite seu nome:");
 if(novoNome !== null && novoNome.trim() !== "") {
    nome.textContent = novoNome.trim();
 }

 const novaCidade = prompt("Digite sua cidade:");
 if(novaCidade !== null && novaCidade.trim() !== "") {
    cidade.textContent = novaCidade.trim();
 }
});

botaoSair.addEventListener("click", function(){
    const resposta = confirm("Deseja  realmente sair do perfil?");
    if (resposta) {
        alert("Voce saiu do perfil!");
    }
    });



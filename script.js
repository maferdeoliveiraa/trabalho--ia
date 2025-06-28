// Lista inicial de missões de IA
let missoes = [
  "Criar um chatbot para ajudar idosos a tomar remédios",
  "Desenvolver uma IA que reconheça plantas medicinais",
  "Construir um sistema de recomendação de filmes",
  "Criar um classificador de imagens de doenças em animais",
  "Programar uma IA que reconheça emoções em vozes humanas"
];

// Função para gerar uma missão aleatória
function gerarMissao() {
  const indice = Math.floor(Math.random() * missoes.length);
  return missoes[indice];
}

// Função para exibir a missão no card
function exibirMissao() {
  const missao = gerarMissao();
  document.getElementById("missionText").textContent = missao;
}

// Função para adicionar uma nova missão
function adicionarMissao() {
  const nova = prompt("Digite a nova missão de Inteligência Artificial:");
  if (nova && nova.trim() !== "") {
    missoes.push(nova.trim());
    alert("Nova missão adicionada com sucesso!");
  } else {
    alert("Missão inválida. Tente novamente.");
  }
}

// Event listeners
document.getElementById("generateBtn").addEventListener("click", exibirMissao);
document.getElementById("addBtn").addEventListener("click", adicionarMissao);
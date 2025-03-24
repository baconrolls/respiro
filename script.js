// Array de mensagens motivacionais para cada carta 
const messages = [
  "Tire um tempo para você. Respire e relaxe.",
  "Hidrate sua pele e sinta-se renovado(a).",
  "Faça uma pausa e aproveite o aroma do seu perfume favorito.",
  "Desacelere com um banho relaxante.",
  "Cuidar de si é um ato de amor próprio.",
  "Aplique creme e sinta-se abraçado(a) pelo autocuidado.",
  "Respire fundo. O agora é seu!",
  "Um sorriso e um toque de perfume mudam o dia!",
  "Uma pausa para um chá pode fazer milagres.",
  "Pequenos gestos de autocuidado fazem toda a diferença.",
  "O autocuidado é um presente diário para você.",
  "Dê a si mesmo(a) um momento só seu.",
  "Crie um ritual diário de bem-estar e relaxamento.",
  "Sinta-se bem com você. O autocuidado é fundamental.",
  "Mude sua energia com um pouco de música e descanso.",
  "Explore um hobby novo: pintura, leitura ou dança.",
  "Dance livremente. A música tem poder de cura.",
  "Medite por 5 minutos e recarregue sua energia.",
  "Que tal uma caminhada ao ar livre para relaxar?",
  "Escute seu álbum favorito e se desconecte por um tempo.",
  "Tire um tempo para escrever sobre seus sentimentos.",
  "Um bom livro pode ser o seu refúgio do estresse.",
  "Pratique gratidão. Isso transforma o dia.",
  "Mergulhe em uma nova atividade criativa.",
  "Respire fundo, relaxe e se concentre no presente.",
  "Arrume seu espaço e sinta a energia mudar.",
  "Cozinhe uma receita simples e saboreie o momento.",
  "O tempo para si é essencial. Cuide-se com carinho.",
  "Tire um tempo para a natureza e se renove.",
  "Seja gentil consigo mesmo(a). O mundo já é rápido demais.",
  "Escolha um perfume que te faça sentir bem e espalhe boas energias.",
  "Troque a pressa por um momento de pausa e bem-estar."
];


function showCard(cardNumber) {
  const resultContainer = document.getElementById("resultContainer");
  const resultMessage = document.getElementById("resultMessage");

  // Esconde todas as cartas
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.display = "none";
    card.removeAttribute("onclick"); // Remove o evento de clique
  });

  // Mostra a carta selecionada
  const selectedCard = document.querySelector(`.card[data-card-number="${cardNumber}"]`);
  if (selectedCard) {
    selectedCard.style.display = "block";
    selectedCard.querySelector("img").style.width = "350px";  // Ajuste do tamanho da imagem
  }

  // Exibe uma mensagem aleatória
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  resultMessage.textContent = randomMessage;
  resultContainer.style.display = "block";
}

function backToMain() {
  const resultContainer = document.getElementById("resultContainer");
  const cards = document.querySelectorAll(".card");

  resultContainer.style.display = "none"; // Esconde o container de resultado

  // Mostra todas as cartas de volta
  cards.forEach((card) => {
    card.style.display = "block";
    card.setAttribute("onclick", `showCard(${card.dataset.cardNumber})`);
  });
}


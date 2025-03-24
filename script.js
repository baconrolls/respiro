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
  "Troque a pressa por um momento de pausa e bem-estar.",
   "Reserve um momento para sua mente e corpo.",
  "A vida é curta. Relaxe e aproveite cada momento.",
  "Autocuidado é essencial. Não deixe para depois.",
  "Ame-se o suficiente para descansar.",
  "Um bom livro pode ser seu melhor amigo.",
  "Respire, relaxe e seja grato(a) pelo agora.",
  "Mude a energia com uma música tranquila.",
  "A natureza tem o poder de te acalmar.",
  "Cada pausa é um convite ao bem-estar.",
  "Medite e acalme a mente.",
  "Faça algo criativo e se divirta.",
  "Dedique tempo para si mesmo(a) todos os dias.",
  "Dê valor aos pequenos momentos de paz.",
  "A energia positiva começa com você.",
  "Liberte-se do estresse com uma caminhada.",
  "Viva o presente e relaxe no momento.",
  "O autocuidado é uma escolha, faça dela um hábito.",
  "Renove suas energias com uma boa pausa.",
  "Ame-se primeiro para poder amar o mundo ao seu redor.",
  "Aproveite um tempo sem pressa, você merece.",
  "Cada sorriso seu reflete sua beleza interna.",
  "A vida acontece nos pequenos momentos.",
  "Não apresse seu tempo. O descanso é essencial.",
  "Desconecte-se para reconectar com você.",
  "Faça algo que te traga alegria agora.",
  "A paz começa com um simples gesto de carinho por si mesmo(a).",
  "Sua mente merece um tempo tranquilo.",
  "Relaxe, respire, e permita-se descansar.",
  "Sinta a calma de um ambiente organizado e harmonioso.",
  "Dedique 5 minutos para fazer algo que te acalma.",
  "Troque a rotina por um momento de prazer."
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


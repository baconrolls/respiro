// Array de mensagens motivacionais para cada carta 
const messages = [
  "Reserve um momento para você. Uma máscara capilar e uma pausa fazem maravilhas!",
  "Seu bem-estar importa! Passe um creme hidratante e sinta-se renovado(a).",
  "Respire fundo, sinta o aroma do seu perfume favorito e aproveite o momento.",
  "Pequenos rituais fazem toda a diferença. Cuide-se como você merece!",
  "Desacelere. Um banho relaxante pode transformar seu dia.",
  "A verdadeira beleza vem do equilíbrio. Tire um tempo para você hoje.",
  "Seu corpo é seu templo. Cuide dele com carinho e atenção.",
  "Aplique aquele hidratante especial e sinta-se abraçado(a) pelo autocuidado.",
  "Tomar um café com calma ou fazer skincare? Escolha um momento só seu!",
  "Se presentear com um perfume é lembrar a si mesmo(a) que você merece o melhor.",
  "A rotina é corrida, mas sua pele merece um minuto extra de carinho.",
  "Cuide da sua pele como cuida dos seus sonhos: com amor e dedicação.",
  "Um creme, um aroma suave e um momento de pausa fazem milagres!",
  "Respire fundo e sinta-se presente. O agora também é seu!",
  "A pele bem cuidada reflete o amor que você tem por si mesmo(a).",
  "Um toque de perfume, um sorriso e o dia já começa melhor!",
  "Desligue um pouco o mundo lá fora e aproveite um momento só seu.",
  "Cuidar de si não é luxo, é necessidade. Um creme, um banho quente… você merece!",
  "Faça algo por você hoje, nem que seja apenas hidratar os lábios.",
  "A pressa do dia a dia não pode roubar seu momento de bem-estar.",
  "Uma pausa, um chá, um creme… transforme o simples em especial.",
  "O toque da sua pele hidratada é um lembrete de que você se ama.",
  "Permita-se relaxar. Um banho perfumado muda tudo!",
  "Seu tempo é precioso. Se cuidar é uma forma de se respeitar!",
  "Cuidar da mente e do corpo é um investimento em você mesmo(a).",
  "Autocuidado é um gesto de amor próprio. Pratique todos os dias!",
  "Seu perfume favorito pode ser um abraço invisível durante o dia.",
  "Abrace seus momentos de descanso, eles fazem você florescer.",
  "Se olhe no espelho e sorria. Você merece esse carinho!",
  "Dê uma pausa para um toque de bem-estar. Sua pele e sua mente agradecem.",
  "Mais do que estética, autocuidado é qualidade de vida.",
  "Não é só um creme, é um lembrete diário do seu valor.",
  "O aroma certo pode transformar seu dia. Escolha o que te faz feliz!",
  "Pequenos rituais diários fazem grandes mudanças na sua autoestima.",
  "Um simples creme pode ser um gesto de carinho consigo mesmo(a).",
  "Hoje, faça algo por você. Pequenos gestos importam!",
  "Pele bem cuidada, mente tranquila. O autocuidado é um presente diário.",
  "Respire, relaxe, cuide-se. Você merece se sentir bem!",
  "O tempo que você investe em si reflete em tudo ao seu redor.",
  "Hoje é um ótimo dia para começar um novo ritual de autocuidado!",
  "Cuidar de si não é egoísmo, é equilíbrio. Permita-se!",
  "O autocuidado começa nos detalhes: um perfume, um óleo essencial, um carinho.",
  "Que tal um banho mais demorado hoje? Deixe o estresse escorrer pelo ralo!",
  "Sentir-se bem na própria pele é o melhor presente que você pode se dar.",
  "Hidrate sua pele, sua alma e seu coração. O carinho começa por você!",
  "Nada como um perfume marcante para lembrar o quão especial você é.",
  "Hoje, troque a pressa por um momento de pausa e autocuidado.",
  "Borrife seu perfume favorito e espalhe boas energias por onde passar.",
  "Cuidar de si é um ato de amor. Faça disso um hábito diário!",
  "Pequenos momentos de bem-estar fazem toda a diferença no seu dia.",
  "Dê a si mesmo(a) o presente do descanso e do cuidado.",
  "Cada minuto que você dedica a si mesmo(a) vale ouro.",
  "Seja gentil consigo mesmo(a). O mundo já tem pressa demais.",
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


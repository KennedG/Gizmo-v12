module.exports = {
  name: "cantadas",
  aliases: ['cantada'],
  category: "fun",
  description: "bot lhe manda cantadas",
  usage: "cantadas",
  run: async (client, message) => {

let respostas = [

  'As rosas são vermelhas, violetas são azuis, eu não posso rimar, mas posso namorar com você?',
  'Se você está aqui, quem está gerenciando o céu?',
  'Se você segurar 8 rosas na frente de um espelho, verá 9 das coisas mais bonitas do mundo!',
  'Onde é que eu deixo meu currículo para concorrer à vaga de amor da sua vida?',
  'Pessoa Incrivel igual a você, nem o Google encontra.',
  'O amor não é mais do que a poesia cantada pelo coração.',
  'Aprendi a tocar violão e até a escrever poesia, descobri onde nascem os mares, a paz, o amor e até a alegria. Hoje eu sei qual a origem da beleza: você.',
  'Acabei de tomar o maior susto da minha vida. Por momentos, pensei que tinha morrido e ido para o céu, pois tem um anjo na minha frente.',
  'Já imaginei como seria a nossa vida juntos muitas vezes, mas tenho certeza de que nem o mais louco dos sonhos iria se comparar com a realidade de ter você ao meu lado.',
  'Um dia me perguntaram:"O que você viu nela?". Eu respondi: "O que faltava em mim".',
  'Tem como não sorrir quando me lembro de você?',
  'Fui ver a previsão do tempo e li que vai rolar um clima entre nós.',
  'Eu te conheço? Nossa, desculpa… É que você parece muito com a minha próxima namorada/ o meu próximo namorado.',
  'Sabe o que combina com você? Eu!',
]

const BallNum = Math.floor(Math.random() * respostas.length); 

message.channel.send(respostas[BallNum]);

}}
import recipeImg from '../../public/projects/recipes-img.png';

export const projects = [
  {
    id: 0,
    name: 'User Hub',
    text: 'Projeto Full Stack desenvolvido com next.js e node.js/mongoDB. Nesse projeto desenvolvi um user hub onde é possivel criar contas e administra-la, com uma conta criada nesse user hub é possivel usar essa mesma conta em outros projetos que criei. Como esse site consome uma API que está hospedada em um cloud free leva pelo menos 3 minutos para iniciar o back-end.',
    gihubLink: 'https://github.com/Arthur-Jr/user-hub?tab=readme-ov-file',
    siteLink: 'https://user-hub-kappa.vercel.app',
  },
  {
    id: 1,
    name: 'Recipes',
    text: 'Projeto desenvolvido em next.js com foco em Front End, onde consome uma API de receitas de terceiros. O foco da projeto é a busca de receitas por nome do prato, ingredientes e categoria, com um design ituitivo e responsivo para também poder ser consumido em dispositivos mobile.',
    gihubLink: 'https://github.com/Arthur-Jr/recipe',
    siteLink: 'https://main.dqgery3y364u2.amplifyapp.com',
  },
  {
    id: 2,
    name: 'Spotify Clone',
    text: 'Projeto desenvolvido em next.js e tailwind. Foi desenvolvido um clone da inreface web de 2023 do spotify, com foco em copiar um design e refaze-lo com HTML e CSS.',
    gihubLink: 'https://github.com/Arthur-Jr/spotify-cln',
    siteLink: 'https://spotify-cln-iota.vercel.app',
  },
  {
    id: 3,
    name: 'TV Shows Schedule',
    text: 'Projeto Full Stack desenvolvido com next.js e next.js API Route. Nesse projeto desenvolvi um calendario de programas de tv, onde é possivel adicionar um programa que esteja atualmente indo ao ar. Esse projeto consome a mesma API que o user hub para lidar com as contas, logo é nescessario esperar os 3 minutos para acessar o back end se for logar ou criar uma conta, mas é possivel usar esse projeto sem uma conta.',
    gihubLink: 'https://github.com/Arthur-Jr/schedule',
    siteLink: 'https://schedule-arthur-jr.vercel.app',
  }
];


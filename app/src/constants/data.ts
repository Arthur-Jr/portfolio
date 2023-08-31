import frontLogo from '../../public/frontend-icon.png';
import backLogo from '../../public/backend-icon.png';
import codeLogo from '../../public/code-icon.png';

export const links = [
  {
    name: 'sobre',
    hash: '#about',
  },
  {
    name: 'stacks',
    hash: '#stacks'
  },
  {
    name: 'projetos',
    hash: '#projects'
  },
  {
    name: 'contato',
    hash: '#contact'
  },
  {
    name: 'socials',
    hash: '#socials'
  }
]

export const aboutMeText = `
  Minha jornada em desenvolvimento web começou em 2020 onde eu fiquei fascinado em como a programação resolve problemas de diferentes maneiras com diferentes ferramentas, dentro e fora do código, e como isso sempre gera um novo desafio e um novo aprendizado.
`;

export const stackData = [
  {
    title: 'Front End',
    desciption: 'Meus conhecimentos de front se baseiam em React, mas acredito que com os fundamentos que adqueri trabalhando com react me qualificam para aprender outros frameworks com mais facilidade.',
    logo: frontLogo,
    list: [
      'HTML',
      'CSS',
      'React',
      'Next',
      'Jest',
      'Redux',
      'Tailwind',
      'SASS',
      'Responsive Design'
    ]
  },
  {
    title: 'Back End',
    desciption: 'Em back eu tive dois focos que foi aprender a trabalhar com Node.js e Springboot, a ideia era saber trabalhar com linguagem de tipagem forte e fraca. Também tenho experiência com bancos de dados NOSQL e SQL.',
    logo: backLogo,
    list: [
      'SpringBoot',
      'Node.js',
      'Rest',
      'JWT',
      'MongoDB',
      'MySQL',
      'Junit',
      'Unity tests',
      'Integration testing',
    ]
  },
  {
    title: 'Dev Tools',
    desciption: 'Aqui encontramos fundamentos da programação, como linguagens vanilla, e também ferramentas nescessarias para versionamento de código e deploy de aplicações.',
    logo: codeLogo,
    list: [
      'Javascript',
      'Typescript',
      'Java',
      'Git',
      'GitHub',
      'Docker',
      'Linux',
      'Terminal',
      'NPM',
    ]
  }
]

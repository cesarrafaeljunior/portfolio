import { IProjects } from "../interfaces/databases";
import iconCard from "../assets/img/icons/iconCard.png";

export const projects: IProjects[] = [
  {
    name: "Port Geek",
    description:
      "Site que possibilita ao usuário, gerar seu próprio portifólio, podendo optar por escolher qualquer um dos Layouts disponíveis na aplicação, o gerador recupera todas as informações inseridas pelo usuário posicionando-as no Layout.",
    image: iconCard,
    type: "Front end",
    repository: "https://github.com/cesarrafaeljunior/port-geek",
    deploy: "https://port-geek-main.vercel.app/",
    techs: [
      "React",
      "TypeScript",
      "Styled-Components",
      "Axios",
      "Router-Dom",
      "Hook Forms",
    ],
    team: true,
  },
  {
    name: "MKS Sistemas",
    description:
      "Um aplicativo de E-commerce, onde o usuário pode adicionar e remover itens de um carrinho, existe também a possibilidade de aumentar a quantidade de um mesmo item, o que altera automaticamente o valor total do carrinho.",
    image: iconCard,
    type: "Front end",
    repository: "https://github.com/cesarrafaeljunior/teste_tecnico_mks",
    deploy:
      "https://teste-tecnico-16mhh7qbb-cesarrafaeljunior.vercel.app/mainPage",
    techs: [
      "React",
      "TypeScript",
      "Redux-Toolkit",
      "Styled-Components",
      "Axios",
      "Router-Dom",
    ],
    team: false,
  },
  {
    name: "Market Maker",
    description:
      "Market Maker é uma API para bares e restaurantes locais que tem como finalidade, aumentar a produtividade e velocidade de comunicação dos garçoms com os demais funcionários da cozinha. É possível registrar pedidos, mesas, funcionários, além de obter hitóricos de pedidos de cada mesa específica, para informações detalhadas acesse o repositório da aplicação",
    image: iconCard,
    type: "Back end",
    repository: "https://github.com/cesarrafaeljunior/market-maker",
    deploy: null,
    techs: ["Node", "TypeORM", "Express", "Jest", "Postgress"],
    team: true,
    documentation: "https://market-maker-api.onrender.com/",
  },
  // {
  //   name: "Tech Registration",
  //   description:
  //     "Um site desenvolvido para que o usuário consiga registrar as tecnologias que utiliza para desenvolvimento no seu dia a dia, além de conseguir também especificar qual o seu nível de aprendizado. A aplicação contem um sistema de registro, login e autenticação de usuário.",
  //   image: iconCard,
  //   type: "Front end",
  //   repository: "https://github.com/cesarrafaeljunior/techRegistration",
  //   deploy:
  //     "https://teste-tecnico-16mhh7qbb-cesarrafaeljunior.vercel.app/mainPage",
  //   techs: [
  //     "React",
  //     "TypeScript",
  //     "Styled-Components",
  //     "Axios",
  //     "Router-Dom",
  //     "Hook Forms",
  //   ],
  //   team: false,
  // },
  {
    name: "Hamburger Shop",
    description:
      "Um E-commerce básico de lanches e bebidas, é possível adicionar e remover os itens do carrinho, a medida que o valor total do carrinho se altera conforme a quantidade de itens adicionados.",
    image: iconCard,
    type: "Front end",
    repository: "https://github.com/cesarrafaeljunior/e-commerce-hamburgueria",
    deploy:
      "https://react-entrega-s1-hamburgueria-da-kenzie-cesarrafaeljunior-19.vercel.app/",
    techs: ["React", "Styled-Components", "Axios"],
    team: false,
  },
  {
    name: "Finances Control",
    description:
      "Um aplicativo simples que permite o usuário controlar suas finanças, podendo optar por registrar entradas ou saídas de dinheiro, com o cálculo acontecendo automaticamente.",
    image: iconCard,
    type: "Front end",
    repository: "https://github.com/cesarrafaeljunior/FinancesControl",
    deploy: "https://react-entrega-s1-nu-kenzie-cesarrafaeljunior.vercel.app/",
    techs: ["React"],
    team: false,
  },
  {
    name: "Kiosque Api",
    description:
      "Um sistema de pedidos para um quiosque que interage com uma base de dados em memória.",
    image: iconCard,
    type: "Back end",
    repository: "https://github.com/cesarrafaeljunior/kiosque_api",
    deploy: null,
    techs: ["Python"],
    team: false,
  },
  {
    name: "Pet Kare Api",
    description:
      "Um sistema simples que ajuda donos de Peth Shop a guardar dados de animais.",
    image: iconCard,
    type: "Back end",
    repository: "https://github.com/cesarrafaeljunior/pet_kare_api",
    deploy: null,
    techs: ["Python", "Django"],
    team: false,
  },
  {
    name: "Bandkamp Api",
    description:
      "Um sistema que permite usuários registrarem seus almbums e suas músicas .",
    image: iconCard,
    type: "Back end",
    repository: "https://github.com/cesarrafaeljunior/bandkamp_api",
    deploy: null,
    techs: ["Python", "Django", "Rest_Framework"],
    team: false,
  },
];

import { IProjects } from "../interfaces/databases";
import PortGeek from "../assets/img/capas/capa_1.png";
import Mks from "../assets/img/capas/capa_2.png";
import Bg from "../assets/img/bg/odssey_bg.jpg";

export const projects: IProjects[] = [
  {
    name: "Port Geek",
    description:
      "Site que possibilita ao usuário, gerar seu próprio portifólio, podendo optar por escolher qualquer um dos Layouts disponíveis na aplicação, o gerador recupera todas as informações inseridas pelo usuário posicionando-as no Layout.",
    image: Bg,
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
    image: Bg,
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
];

export interface IProjects {
  name: string;
  description: string;
  image: string;
  type: string;
  repository: string | null;
  deploy: string | null;
  techs: string[];
  team: boolean;
}

export interface ICardInfos {
  name: string;
  image: string;
  type: string;
  description: string;
}

export interface IProjects {
  name: string;
  description: string;
  image: string | null;
  type: string;
  repository: string | null;
  deploy: string | null;
  techs: string[];
  team: boolean;
  documentation?: String;
}

export interface ICardInfos {
  name: string;
  image: string;
  type: string;
  description: string;
}

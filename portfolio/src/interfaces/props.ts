import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface INavOptions {
  route?: String;
  navOption: string;
}

export interface IPhrase {
  phrase: string;
}

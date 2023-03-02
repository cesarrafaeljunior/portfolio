import { createContext, useState } from "react";
import { projects } from "../database";
import { IProjects } from "../interfaces/databases";
import { IChildren } from "../interfaces/props";

export interface IProjectsContext {
  projectsFiltered: IProjects[];
  projectsFilter: (data: Event) => void;
}

export const projectContext = createContext<IProjectsContext>(
  {} as IProjectsContext
);

export const ProjectProvider = ({ children }: IChildren) => {
  const [projectsFiltered, setProjectsFiltered] =
    useState<IProjects[]>(projects);

  const projectsFilter = (e: Event) => {};

  return (
    <projectContext.Provider value={{ projectsFiltered, projectsFilter }}>
      {children}
    </projectContext.Provider>
  );
};

"use client";

import { ProjectDisplayer } from "@/components/common/ProjectDisplayer.tsx/ProjectDisplayer";
import { ProjectDisplayerModal } from "@/components/common/ProjectDisplayer.tsx/ProjectDisplayerModal/ProjectDisplayerModal";
import applicationData from "../../data/applicationData.json";
import { useReducer } from "react";
import { ProjectProps } from "@/shared/interfaces";

const initialState = {
  displayModal: false,
  selectedProject: {} as ProjectProps,
};

type Action =
  | { type: "OPEN_MODAL"; project?: ProjectProps }
  | { type: "CLOSE_MODAL" };

function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        displayModal: true,
        selectedProject: action.project || state.selectedProject,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        displayModal: false,
      };
    default:
      return state;
  }
}
export default function Projects() {
  const [modalController, dispatch] = useReducer(reducer, initialState);

  function handleCardClick(project: ProjectProps) {
    dispatch({ type: "OPEN_MODAL", project });
  }

  return (
    <div className="flex flex-col items-center gap-[5vh] xs:py-[5vh] md:p-[5vw]">
      <h1 className="font-bold">Projects</h1>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 place-content-between">
        {applicationData.projects.map((project, index) => (
          <ProjectDisplayer
            key={index}
            project={project}
            isFunctional
            handleClick={handleCardClick}
          />
        ))}
      </div>
      {modalController.displayModal && (
        <ProjectDisplayerModal
          project={modalController.selectedProject}
          handleClick={() => dispatch({ type: "CLOSE_MODAL" })}
        />
      )}
    </div>
  );
}

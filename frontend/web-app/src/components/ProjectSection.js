import React from "react";
import Card from "./Card";
import { ThemeContext } from "../context/ThemeContext";

const ProjectSection = ({ ordered_projects, svg_name }) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <section className="p-2 m-2 mb-20 text-xl text-base-content">
      <div className="flex justify-center p-4">
        <div
          className="flex flex-wrap justify-center gap-x-4 gap-y-8 xl:gap-12 w-4/5
						2xl:w-full items-end 2xl:justify-center self-center justify-self-center"
        >
          <div
            id={
              theme === "light"
                ? `${svg_name}_light_projects`
                : `${svg_name}_dark_projects`
            }
            className="p-4 m-4 hidden 2xl:flex
                        2xl:w-full 2xl:h-full 2xl:min-w-[50vw] 2xl:min-h-[50vh]"
          ></div>
          {ordered_projects.map((project) => {
            return (
              <Card
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                tags={project.tags}
                new={project.new}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

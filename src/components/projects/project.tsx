import { useEffect, useState } from "react";
import "./project.css";
import ProjectCard from "./project_card";
const ProjectSection = () => {
  const [projects, setprojects] = useState<any[]>([]);

  const fetchGithub = async () => {
    fetch("https://gh-pinned-repos.egoist.dev/?username=xxamer")
      .then((response) => response.json())
      .then((data) => setprojects(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchGithub();
  }, []);

  return (
    <section className="ProjectSection">
      <div className="Container">
        <h1 className="SynthTitle BigText">Proyectos</h1>
        <div className="row">
          {projects.map((project, key) => {
            return (
              <div className="col-3 mr-4">
                <ProjectCard key={key} title={project.repo}></ProjectCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

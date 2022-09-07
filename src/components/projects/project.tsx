import { useEffect, useState } from "react";
import "./project.css";
const ProjectSection = () => {
  const [projects, setprojects] = useState();

const fetchGithub = async() => {
    fetch("https://gh-pinned-repos.egoist.dev/?username=xxamer")
    .then((response) => response.json())
    .then((data) => setprojects(data))
    .catch((err) => console.log(err));
}

  useEffect(() => {
    fetchGithub();
  }, []);

  return <section className="ProjectSection">
    <h1>A</h1>
  </section>;
};

export default ProjectSection;

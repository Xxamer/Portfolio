import ProjectInterface from "../../interface/project";

const ProjectCard = (props: ProjectInterface) => {
return (
    <div className="ProjectCard">
        <h1 className="SynthTitle MediumText"> {props?.title}</h1>
    </div>
)
}

export default ProjectCard;

const ProjectCard = (props: any) => {
return (
    <div className="ProjectCard">
        <h1 className="SynthTitle MediumText">Esto es una {props?.title}</h1>
    </div>
)
}

export default ProjectCard;
import "../ProjectsPage.css"


const Project = ({project}) => {
    return (
        <div
            className="project"
        >
            {project.title}
            <br></br>
            <br></br>
            {project.description}
        </div>
    )
}

export default Project

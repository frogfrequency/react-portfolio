import "../ProjectsPage.css"


const Project = ({project, colorScheme}) => {
    return (
        <div
            className="project"
            style={{backgroundColor: colorScheme.color2}}
        >
            <h3>{project.title}</h3>
            <br></br>
            <br></br>
            {project.description}
        </div>
    )
}

export default Project

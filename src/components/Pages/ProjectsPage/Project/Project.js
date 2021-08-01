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
            
            <a href={project.link}>
                open project
            </a>
            

        </div>
    )
}

export default Project

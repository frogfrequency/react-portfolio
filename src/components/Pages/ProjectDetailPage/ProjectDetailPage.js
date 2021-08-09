import PageTitle from "../PageTitle"

const ProjectDetailPage = ({ project, colorScheme }) => {
    return (
        <div className='page'>
            <PageTitle
                colorScheme={colorScheme}
                title='projects'
                subHeader='a collection of some of my coding projects'
            />

            <div className='project-detail-page'>
                <h1>project: {project.title}</h1>
                
                {project.description}
            </div>
            <a href={project.tryoutLink} target="_blank">try it out</a>
        </div>
    )
}

export default ProjectDetailPage

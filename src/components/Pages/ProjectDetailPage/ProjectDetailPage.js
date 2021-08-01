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
                <br></br>
                <br></br>
                {project.description}
            </div>
        </div>
    )
}

export default ProjectDetailPage

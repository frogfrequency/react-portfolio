import PageTitle from "../PageTitle"
import PictureShow from "./PictureShow/PictureShow"
import ProjectDetails from "./ProjectDetails/ProjectDetails"

const ProjectDetailPage = ({ project, colorScheme }) => {
    return (
        <div className='page'>
            <PageTitle
                colorScheme={colorScheme}
                title='projects'
                subHeader='a collection of some of my coding projects'
            />
            <div id='detail-page-content'>
                <PictureShow
                    project={project}
                />
                
                <ProjectDetails
                    project={project}
                />
            </div>
            
        </div>
    )
}

export default ProjectDetailPage

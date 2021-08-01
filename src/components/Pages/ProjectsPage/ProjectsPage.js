import "../../Pages/Page.css";
import PageTitle from "../PageTitle";
import Project from "./Project/Project";
import { projects } from "../../../projects"


const ProjectsPage = ({ colorScheme, title, subHeader }) => {
    return (
        <div className='page'>
            <PageTitle
                colorScheme={colorScheme}
                title={title}
                subHeader={subHeader}
            />
            <div className='projects-container'>
                {projects.map((project) => (
                    <Project project={project} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsPage
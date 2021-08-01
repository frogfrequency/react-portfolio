import "../../Pages/Page.css";
import PageTitle from "../PageTitle";
import Project from "./Project/Project";
import { projects } from "../../../projects";
import {
    Link
} from "react-router-dom";



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
                    <Link to={`/${project.title}`} key={project.title} style={{color: colorScheme.color4, textDecoration: 'none'}}>
                        <Project project={project} colorScheme={colorScheme}/>
                    </Link>
                ))}
                
            </div>


            



        </div>
    )
}

export default ProjectsPage
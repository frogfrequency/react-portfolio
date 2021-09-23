
import "../../Pages/Page.css";
import PageTitle from "../PageTitle";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "../../../projects";
import {
    Link
} from "react-router-dom";


import { FadeIn, TitleEffectIn } from "../../../utility"



const ProjectsPage = ({ colorScheme, title, subHeader }) => {
    return (
        <FadeIn>
        <div className='page'>
        <TitleEffectIn>
            <PageTitle
                colorScheme={colorScheme}
                title={title}
                subHeader={subHeader}
            />
        </TitleEffectIn>
        
            
            <div className='projects-container'>
                {projects.map((project) => (
                    <Link
                        to={`/projects/${project.title}`}
                        key={project.title}
                        style={
                            {
                                color: colorScheme.color4,
                                textDecoration: 'none',
                                margin: '20px'
                            }
                        }>
                        <ProjectCard project={project} colorScheme={colorScheme}/>
                    </Link>
                ))}
                
            </div>



        </div>
        </FadeIn>
    )
}

export default ProjectsPage
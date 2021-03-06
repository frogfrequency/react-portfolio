import { Link } from "react-router-dom";

import { FadeIn, TitleEffectIn } from "../../../utility"

import PageTitle from "../PageTitle";
import ProjectCard from "./ProjectCard/ProjectCard";

import "../../Pages/Page.css";


const ProjectsPage = ({ colorScheme, title, subHeader, projects }) => { // add projects(app.js state) here and delete fileimport

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
                            to={`/projects/${project.key}`}
                            key={project.key}
                            style={
                                {
                                    color: colorScheme.color4,
                                    textDecoration: 'none',
                                    margin: '20px'
                                }
                            }>
                            <ProjectCard
                                project={project}
                                colorScheme={colorScheme}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </FadeIn>
    )
}

export default ProjectsPage
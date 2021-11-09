import { useState } from 'react';
import PictureShow from "./PictureShow/PictureShow"
import ProjectDetails from "./ProjectDetails/ProjectDetails"
import { IoReturnUpBack } from "react-icons/io5";

import { FadeIn, } from "../../../utility"


import {
    Link
} from "react-router-dom";


const ProjectDetailPage = ({ project, colorScheme, textContent }) => {
    
    const [hoverStatusGoBack, setHoverStatusGoBack] = useState(false)
    
    return (
        <FadeIn>
            <div className='page'>

                <div className='project-overview-button-container'>
                    <Link
                        className='project-overview-button'
                        style={
                            {
                                textDecoration: 'none',
                                color: hoverStatusGoBack ? colorScheme.color3 : colorScheme.color4
                            }
                        }
                        to="/projects"
                        onMouseEnter={() => setHoverStatusGoBack(true)}
                        onMouseLeave={() => setHoverStatusGoBack(false)}
                    >
                        <IoReturnUpBack size='30px' style={{marginRight:'10px'}}/>
                        {textContent.projectsPage.backToProjectsOverview}
                    </Link>
                </div>


                
                <div id='detail-page-content'>
                    <PictureShow
                        project={project}
                    />
                    
                    <ProjectDetails
                        project={project}
                        colorScheme={colorScheme}
                        textContent={textContent}
                    />
                </div>
                
            </div>
        </FadeIn>
    )
}

export default ProjectDetailPage

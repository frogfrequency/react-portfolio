import { useState } from 'react';
import PageTitle from "../PageTitle"
import PictureShow from "./PictureShow/PictureShow"
import ProjectDetails from "./ProjectDetails/ProjectDetails"
import { IoReturnUpBack } from "react-icons/io5";

import {
    Link
} from "react-router-dom";


const ProjectDetailPage = ({ project, colorScheme }) => {
    
    const [hoverStatusGoBack, setHoverStatusGoBack] = useState(false)
    
    return (
        <div className='page'>
            {/* <PageTitle
                colorScheme={colorScheme}
                title='projects'
                subHeader='a collection of some of my coding projects'
            /> */}

            <div className='project-overview-button-container'>
                <Link
                    className='project-overview-button'
                    style={
                        {
                            textDecoration: 'none',
                            color: hoverStatusGoBack ? colorScheme.color3 : colorScheme.color4
                        }
                    }
                    to="/"
                    onMouseEnter={() => setHoverStatusGoBack(true)}
                    onMouseLeave={() => setHoverStatusGoBack(false)}
                >
                    <IoReturnUpBack size='30px' style={{marginRight:'10px'}} />back to projects overview
                </Link>
            </div>


            
            <div id='detail-page-content'>
                <PictureShow
                    project={project}
                />
                
                <ProjectDetails
                    project={project}
                    colorScheme={colorScheme}
                />
            </div>
            
        </div>
    )
}

export default ProjectDetailPage

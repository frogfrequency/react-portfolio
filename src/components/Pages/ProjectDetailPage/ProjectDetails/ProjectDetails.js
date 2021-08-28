import { useState } from 'react';
import { FiExternalLink } from "react-icons/fi";
import { GiMagnifyingGlass } from "react-icons/gi";
import { AiFillGithub } from "react-icons/ai";

const ProjectDetails = ({ project, colorScheme }) => {
    
    const [hoverStatus, setHoverStatus] = useState({tryout:false, sourceCode:false})

    const handleHover = (what) => {
        let newHoverStatus = {...hoverStatus};
        newHoverStatus[what] = true;
        setHoverStatus(newHoverStatus);
    }

    const handleUnhover = (what) => {
        let newHoverStatus = {...hoverStatus};
        newHoverStatus[what] = false;
        setHoverStatus(newHoverStatus);
    }
    
    
    return (
        <div
            id='project-details'
        >
            <div id='project-details-header' style={{ borderColor: colorScheme.color2 }}>
                <div id='project-details-title'>{project.title}</div>
                <div id='project-details-technologies'>{project.type}</div>
            </div>
            <br></br>
            <br></br>
            <div id='project-detail-description'>{project.description}</div>
            <br></br>
            <div id='project-detail-nav'>
                {project.tryoutLink != undefined ? <a
                    href={project.tryoutLink}
                    target="_blank"
                    className='project-detail-nav-button'
                    style={
                        {
                            color: hoverStatus.tryout ? colorScheme.color3 : colorScheme.color4,
                            backgroundColor: colorScheme.color2,
                        }
                    }
                    onMouseEnter={() => handleHover('tryout')}
                    onMouseLeave={() => handleUnhover('tryout')}
                >
                    <FiExternalLink className='icon'/> try it out 
                </a> : ''}
                
                <a
                    href={project.sourcecodeLink}
                    target="_blank"
                    className='project-detail-nav-button'
                    style={
                        {
                            color: hoverStatus.sourceCode ? colorScheme.color3 : colorScheme.color4,
                            backgroundColor: colorScheme.color2,
                        }
                    }
                    onMouseEnter={() => handleHover('sourceCode')}
                    onMouseLeave={() => handleUnhover('sourceCode')}
                >
                    <AiFillGithub className='icon'/> view sourcecode 
                </a>
            </div>



            
            <br></br>
            <br></br>
            <div id='project-detail-detailInformation'>{project.detailInformation}</div>
            <br></br>
            <br></br>
            <div>technologies used: {project.technology}</div>
        </div>
    )
}

export default ProjectDetails

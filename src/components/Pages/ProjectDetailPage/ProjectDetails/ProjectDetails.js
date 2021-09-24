import { useState } from 'react';
import { FiExternalLink } from "react-icons/fi";
import { GiMagnifyingGlass } from "react-icons/gi";
import { AiFillGithub } from "react-icons/ai";

const ProjectDetails = ({ project, colorScheme, textContent }) => {
    
    let textProcessed = project.detailInformation;
    textProcessed = textProcessed.split('\\n').map(str => <p>{str}</p>);

    const [hoverStatus, setHoverStatus] = useState({tryout:false, sourceCode:false, additionalLink:false,})

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
                {project.tryoutLink ? <a
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
                    <FiExternalLink className='icon'/>{textContent.projectsPage.tryItOut}
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
                    <AiFillGithub className='icon'/>{textContent.projectsPage.viewSourcecode}
                </a>

                {project.additionalLink ? <a 
                    href={project.additionalLink.target}
                    target="_blank"
                    className='project-detail-nav-button'
                    style={
                        {
                            color: hoverStatus.additionalLink ? colorScheme.color3 : colorScheme.color4,
                            backgroundColor: colorScheme.color2,
                        }
                    }
                    onMouseEnter={() => handleHover('additionalLink')}
                    onMouseLeave={() => handleUnhover('additionalLink')}
                >
                    <FiExternalLink className='icon'/> {project.additionalLink.text}
                </a> : ''}
                

            </div>



            
            <br></br>
            <br></br>
            <div id='project-detail-detailInformation'>{textProcessed}</div>
            <br></br>
            <br></br>
            <div>{textContent.projectsPage.technologiesUsed}: {project.technology}</div>
            <br></br>
            <br></br>
        </div>
    )
}

export default ProjectDetails

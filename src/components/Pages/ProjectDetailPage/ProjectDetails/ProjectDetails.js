import { FiExternalLink } from "react-icons/fi";
import { GiMagnifyingGlass } from "react-icons/gi";

const ProjectDetails = ({ project, colorScheme }) => {
    return (
        <div
            id='project-details'
        >
            <div id='project-details-header' style={{ borderColor: colorScheme.color2 }}>
                <div id='project-details-title'>{project.title}</div>
                <div>{project.type}</div>
            </div>
            <br></br>
            <br></br>
            <div id='project-detail-description'>{project.description}</div>
            <br></br>
            <div id='project-detail-nav'>
                <a
                    href={project.tryoutLink}
                    target="_blank"
                    style={
                        {
                            textDecoration: 'none',
                            color: colorScheme.color4,
                            display: 'flex',
                            alignItems: 'center'
                        }
                    }
                    // onMouseEnter={}
                    // onMouseLeave={}
                >
                    try it out <FiExternalLink className='icon' style={{color: 'black'}}/>
                </a>

                <a
                    href={project.sourcecodeLink}
                    target="_blank"
                    style={
                        {
                            textDecoration: 'none',
                            color: colorScheme.color4,
                        }
                    }
                    // onMouseEnter={}
                    // onMouseLeave={}
                >
                    view sourcecode <GiMagnifyingGlass className='icon' style={{color: 'black'}}/>
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

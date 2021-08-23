import "../ProjectsPage.css"
import { useState } from 'react';
import chess_hovered from "../../../../pictures/chess/chess_hovered.png"

import { pictureCollection } from "../../../../pictureHandler.js";


const ProjectCard = ({ project, colorScheme }) => {


    const [isHovered, setIsHovered] = useState(false);
    const [pictureName, setPictureName] = useState(`${project.picKey}_unhovered`);

    const handleHover = (newColorSchemes) => {
        setIsHovered(true);
        setPictureName(`${project.picKey}_hovered`);
    }

    const handleUnhover = (newColorSchemes) => {
        setIsHovered(false);
        setPictureName(`${project.picKey}_unhovered`);
    }

    return (
        <div
            className="project-card"
            style={
                {
                    backgroundColor: colorScheme.color2,
                    boxShadow: isHovered ? '10px 10px 10px rgb(15, 15, 15)' : '5px 5px 10px rgb(15, 15, 15)'
                }
            }
            onMouseEnter={() => handleHover()}
            onMouseLeave={() => handleUnhover()}
        >
            <div
                className={isHovered ? 'card-image-hovered' : 'card-image-unhovered'}
                style={
                    {
                        // backgroundImage: `url("${process.env.PUBLIC_URL}/pictures/${project.picKey}/${project.picKey}_${isHovered ? '' : 'un'}hovered.png")`,
                        backgroundImage: `url(${pictureCollection[pictureName]})`
                    }
                }
            />

            {/* <img src={pictureCollection[pictureName]}></img> */}

            <h3 className='project-card-title'>{project.title}</h3>
            <div className='project-card-description'>
                {project.type}
            </div>
            <div className='project-card-description'>
                {project.technology}
            </div>
        </div>
    )
}

export default ProjectCard

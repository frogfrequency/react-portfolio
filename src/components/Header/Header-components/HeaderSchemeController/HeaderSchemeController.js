import { BsSkipEndFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import './HeaderSchemeController.css';
import "../../Header.css"
import { useState } from 'react';
import {Link} from "react-router-dom";




const HeaderSchemeController = ({ colorScheme, onClickFunc, textContent }) => {

    const [skipIsHovered, changeSkipIsHovered] = useState(false);
    const handleSkipHover = () => { changeSkipIsHovered(true) }
    const handleSkipUnhover = () => { changeSkipIsHovered(false) }

    const [gearIsHovered, changeGearIsHovered] = useState(false);
    const handleGearHover = () => { changeGearIsHovered(true) }
    const handleGearUnhover = () => { changeGearIsHovered(false) }

    return (

        <div
            className='color-scheme-controller'
            style={{ backgroundColor: colorScheme.color1, color: colorScheme.color4}}
        // onClick={onClickFunc}
        >
            {textContent.header.colorSchemes}

            <BsSkipEndFill
                className='pointer'
                onMouseEnter={handleSkipHover}
                onMouseLeave={handleSkipUnhover}
                style={{ marginTop: '2px', marginLeft: '2px', color: skipIsHovered ? colorScheme.color3 : colorScheme.color4 }}
                onClick={() => {
                    onClickFunc();
                }}
                size={'1.3em'}
            />
            <Link to="/color-control">
            <BsFillGearFill
                className='pointer'
                onMouseEnter={handleGearHover}
                onMouseLeave={handleGearUnhover}
                style={{ marginTop: '7px', marginLeft: '2px', color: gearIsHovered ? colorScheme.color3 : colorScheme.color4 }}

                size={'0.9em'}
            />
            </Link>


        </div>

    )
}

export default HeaderSchemeController

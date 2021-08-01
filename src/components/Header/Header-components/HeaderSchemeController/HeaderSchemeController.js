import { BsSkipEndFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import './HeaderSchemeController.css';
import "../../Header.css"
import { useState } from 'react';
import {Link} from "react-router-dom";




const HeaderSchemeController = ({ colorScheme, onClickFunc }) => {

    const [skipIsHovered, changeSkipIsHovered] = useState(false);
    const handleSkipHover = () => { changeSkipIsHovered(true) }
    const handleSkipUnhover = () => { changeSkipIsHovered(false) }

    const [gearIsHovered, changeGearIsHovered] = useState(false);
    const handleGearHover = () => { changeGearIsHovered(true) }
    const handleGearUnhover = () => { changeGearIsHovered(false) }

    return (

        <div
            className='header-element'
            style={{ backgroundColor: colorScheme.color1, color: colorScheme.color4 }}
        // onClick={onClickFunc}
        >
            color schemes

            <BsSkipEndFill
                className={skipIsHovered ? 'pointer' : ''}
                onMouseEnter={handleSkipHover}
                onMouseLeave={handleSkipUnhover}
                style={{ marginTop: '3px', marginLeft: '2px', color: skipIsHovered ? colorScheme.color3 : colorScheme.color4 }}
                onClick={() => {
                    onClickFunc();
                }}
                size={'1.3em'}
            />
            <Link to="/color-control">
            <BsFillGearFill
                className={gearIsHovered ? 'pointer' : ''}
                onMouseEnter={handleGearHover}
                onMouseLeave={handleGearUnhover}
                style={{ marginTop: '3px', marginLeft: '2px', color: gearIsHovered ? colorScheme.color3 : colorScheme.color4 }}

                size={'0.9em'}
            />
            </Link>


        </div>

    )
}

export default HeaderSchemeController

import { BsSkipEndFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import './HeaderSchemeController.css';
import "../../Header.css"
import { useState } from 'react';



const HeaderSchemeController = ({colorScheme, onClickFunc, selectColorPage}) => {
    
    const [skipIsHovered, changeSkipIsHovered] = useState(false);
    const handleSkipHover = () => {changeSkipIsHovered(true)}
    const handleSkipUnhover = () => {changeSkipIsHovered(false)}

    const [gearIsHovered, changeGearIsHovered] = useState(false);
    const handleGearHover = () => {changeGearIsHovered(true)}
    const handleGearUnhover = () => {changeGearIsHovered(false)}

    return (

        <div
            className='header-element'
            style={{ backgroundColor: colorScheme.color1, color: colorScheme.color4 }}
            // onClick={onClickFunc}
        >
                color schemes

            { skipIsHovered ? (
                    <BsSkipEndFill
                    onMouseEnter={handleSkipHover}
                    onMouseLeave={handleSkipUnhover}
                    style={{ marginTop:'3px', marginLeft: '2px', color: colorScheme.color3}}
                    onClick={() => {
                        onClickFunc();
                    }}
                    size={'1.3em'}
                    />
            ) : (
                <BsSkipEndFill
                    onMouseEnter={handleSkipHover}
                    onMouseLeave={handleSkipUnhover}
                    style={{ marginTop:'3px', marginLeft: '2px', color: colorScheme.color4}}
                    onClick={() => {
                        onClickFunc();
                      }}
                    size={'1.3em'}
                />
            )
            }

          
            { gearIsHovered ? (

                    <BsFillGearFill
                    onMouseEnter={handleGearHover}
                    onMouseLeave={handleGearUnhover}
                    style={{ marginTop:'3px', marginLeft: '2px', color: colorScheme.color3}}
                    onClick={() => {
                        selectColorPage('ColorSchemePage')
                      }}
                    size={'0.9em'}
                    />

            ) : (

                    <BsFillGearFill
                    onMouseEnter={handleGearHover}
                    onMouseLeave={handleGearUnhover}
                    style={{ marginTop:'3px', marginLeft: '2px', color: colorScheme.color4}}
                    onClick={() => {
                        selectColorPage('ColorSchemePage')
                      }}
                    size={'0.9em'}
                />

              
                
            )
            }

        </div>
        
    )
}

export default HeaderSchemeController

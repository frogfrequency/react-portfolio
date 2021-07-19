import { BsSkipEndFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import './HeaderSchemeController.css';
import { useState } from 'react';



const HeaderSchemeController = ({colorScheme, onClickFunc}) => {
    
    const [skipIsHovered, changeSkipIsHovered] = useState(false);
    const handleSkipHover = () => {changeSkipIsHovered(true)}
    const handleSkipUnhover = () => {changeSkipIsHovered(false)}

    const [gearIsHovered, changeGearIsHovered] = useState(false);
    const handleGearHover = () => {changeGearIsHovered(true)}
    const handleGearUnhover = () => {changeGearIsHovered(false)}

    return (

        <div
            className='color-scheme-controller'
            style={{ backgroundColor: colorScheme.color1, color: colorScheme.color4 }}
            // onClick={onClickFunc}
        >
                colorschemes

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
                        onClickFunc();
                      }}
                    size={'0.9em'}
                    />

            ) : (

                    <BsFillGearFill
                    onMouseEnter={handleGearHover}
                    onMouseLeave={handleGearUnhover}
                    style={{ marginTop:'3px', marginLeft: '2px', color: colorScheme.color4}}
                    onClick={() => {
                        onClickFunc();
                      }}
                    size={'0.9em'}
                />

              
                
            )
            }

        </div>
        
    )
}

export default HeaderSchemeController

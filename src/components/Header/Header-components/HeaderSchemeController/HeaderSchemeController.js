import { BsSkipEndFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import './HeaderSchemeController.css';
import { useState } from 'react';



const HeaderSchemeController = ({colorScheme, onClickFunc,gearButtonColor,skipButtonColor,handleSkipHover,handleSkipUnhover, handleGearHover,handleGearUnhover}) => {
    
    // //// start of state ,,,,,,,,,,,,,,,,,,,,,,
    // const [skipButtonColor, toggleSkipColor] = useState(colorScheme.color4)


    // const handleSkipHover = () => {
    //     toggleSkipColor(colorScheme.color3);
    // }
    // const handleSkipUnhover = () => {
    //     toggleSkipColor(colorScheme.color4);
    // }

    // const [gearButtonColor, toggleGearColor] = useState(colorScheme.color4)
        
    // const handleGearHover = () => {
    //     toggleGearColor(colorScheme.color3);
    // }
    // const handleGearUnhover = () => {
    //     toggleGearColor(colorScheme.color4);
    // }
    // //// end of state ''''''''''''''''''''''''''''

    return (

        <div
            className='color-scheme-controller'
            style={{ backgroundColor: colorScheme.color1, color: colorScheme.color4 }}
            // onClick={onClickFunc}
        >
                colorschemes
                <BsSkipEndFill
                    onMouseEnter={handleSkipHover}
                    onMouseLeave={handleSkipUnhover}
                    style={{ marginTop:'3px', marginLeft: '2px', color: skipButtonColor}}
                    onClick={() => {
                        onClickFunc();
                      }}
                    size={'1.3em'}
                />
                <BsFillGearFill
                    onMouseEnter={handleGearHover}
                    onMouseLeave={handleGearUnhover}
                    style={{ marginTop:'3px', marginLeft: '2px', color: gearButtonColor}}
                    onClick={() => {
                        onClickFunc();
                      }}
                    size={'0.9em'}
                />
        </div>
        
    )
}

export default HeaderSchemeController

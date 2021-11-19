import { useState } from "react";
import { HiAdjustments } from "react-icons/hi";

import "../../ColorSchemePage.css"


const CustomizationPanelElement = ({ text, boxColor, colorScheme, setShowPicker, setPickerColor, setColorBeingChanged, boxId }) => {

    const [adjustButtonHoverStatus, setAdjustButtonHoverStatus] = useState(false);

    const handleAdjustMouseEnter = () => {
        setAdjustButtonHoverStatus(true)
    }

    const handleAdjustMouseLeave = () => {
        setAdjustButtonHoverStatus(false)
    }

    const handleChangeColorButton = (boxColor) => {
        setPickerColor(boxColor);
        setShowPicker(true);
        setColorBeingChanged(boxId);
    }


    return (

        <div className='customization-panel-content-element'>
            {text}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                
                <div
                    className='color-box'
                    style={{ backgroundColor: boxColor, cursor: 'pointer' }}
                    onClick={() => handleChangeColorButton(boxColor)}
                />

                &nbsp;&nbsp;

                <HiAdjustments
                    onMouseEnter={handleAdjustMouseEnter}
                    onMouseLeave={handleAdjustMouseLeave}
                    style={{ color: adjustButtonHoverStatus ? colorScheme.color3 : colorScheme.color4, cursor: 'pointer' }}
                    onClick={() => handleChangeColorButton(boxColor)}
                />

            </div>
        </div>

    )
}

export default CustomizationPanelElement

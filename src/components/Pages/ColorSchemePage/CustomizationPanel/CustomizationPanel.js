import { SketchPicker } from 'react-color';
import { RiSave3Fill } from "react-icons/ri";
import { FaUndo } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";

import { CustomizationPanelEffect, ColorPickerEffect } from "../../../../utility";

import ColorPreview from '../../../../components/Header/Header-components/ColorPreview/ColorPreview';
import CustomizationPanelElement from "./CustomizationPanelElement/CustomizationPanelElement";

import "../ColorSchemePage.css"


const CustomizationPanel = ({ thisColorScheme, colorScheme, saveAndSetNewColorScheme, setActiveCustomizationId, textContent }) => {

    const [hoverStatuses, setHoverStatuses] = useState([false, false, false]);

    const handleMouseEnter = (idx) => {
        let newHoverStatuses = [...hoverStatuses];
        newHoverStatuses[idx] = true;
        setHoverStatuses(newHoverStatuses);
        // maybe add functionality for tooltip here
    }

    const handleMouseLeave = (idx) => {
        let newHoverStatuses = [...hoverStatuses];
        newHoverStatuses[idx] = false;
        setHoverStatuses(newHoverStatuses);
        // maybe add functionality for tooltip here
    }

    const oldColorScheme = { ...thisColorScheme };
    const [newColorScheme, setNewColorScheme] = useState(thisColorScheme);
    const [showPicker, setShowPicker] = useState(false);
    const [pickerColor, setPickerColor] = useState('#fff');
    const [colorBeingChanged, setColorBeingChanged] = useState(null);


    const pickerColorChange = (newColor) => {
        setPickerColor(newColor);
        let newColorSchemeCopy = { ...newColorScheme };
        let objectColorKey = 'color' + colorBeingChanged
        newColorSchemeCopy[objectColorKey] = newColor.hex;
        setNewColorScheme(newColorSchemeCopy);
    }

    const resetNewColorScheme = () => {
        setNewColorScheme(oldColorScheme);
    }

    function giveColorName(idx) {
        switch (idx) {
            case 1:
                return textContent.colorSchemePage.backgroundColor
            case 2:
                return textContent.colorSchemePage.backgroundStylingColor
            case 3:
                return textContent.colorSchemePage.textStylingColor
            case 4:
                return textContent.colorSchemePage.textColor
            default:
                return 'error in giveColorName'
        }
    }



    return (
        <div>
            <CustomizationPanelEffect>
                <div
                    id='customization-panel'
                    style={{ backgroundColor: colorScheme.color2, borderColor: colorScheme.color1 }}
                >
                    <MdClose
                        size='1.3em'
                        id='closeX'
                        style={{ color: hoverStatuses[2] ? colorScheme.color3 : colorScheme.color4, cursor: 'pointer' }}
                        onClick={() => setActiveCustomizationId(null)}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={() => handleMouseLeave(2)}
                    />

                    <div id='customization-panel-header' style={{ borderColor: colorScheme.color3 }}>
                        <div>
                            {textContent.colorSchemePage.adjustColorsFor}
                        </div>

                        <ColorPreview
                            colorScheme={thisColorScheme}
                        />
                    </div>

                    <div id='customization-panel-content'>
                        <CustomizationPanelElement
                            text={textContent.colorSchemePage.backgroundColor}
                            boxColor={newColorScheme.color1}
                            colorScheme={colorScheme}
                            setShowPicker={setShowPicker}
                            setPickerColor={setPickerColor}
                            setColorBeingChanged={setColorBeingChanged}
                            boxId={1}
                        />
                        <CustomizationPanelElement
                            text={textContent.colorSchemePage.backgroundStylingColor}
                            boxColor={newColorScheme.color2}
                            colorScheme={colorScheme}
                            setShowPicker={setShowPicker}
                            setPickerColor={setPickerColor}
                            setColorBeingChanged={setColorBeingChanged}
                            boxId={2}
                        />
                        <CustomizationPanelElement
                            text={textContent.colorSchemePage.textStylingColor}
                            boxColor={newColorScheme.color3}
                            colorScheme={colorScheme}
                            setShowPicker={setShowPicker}
                            setPickerColor={setPickerColor}
                            setColorBeingChanged={setColorBeingChanged}
                            boxId={3}
                        />
                        <CustomizationPanelElement
                            text={textContent.colorSchemePage.textColor}
                            boxColor={newColorScheme.color4}
                            colorScheme={colorScheme}
                            setShowPicker={setShowPicker}
                            setPickerColor={setPickerColor}
                            setColorBeingChanged={setColorBeingChanged}
                            boxId={4}
                        />
                    </div>


                    <div className='customization-panel-action-bar'>

                        <RiSave3Fill
                            size='1.3em'
                            style={{ color: hoverStatuses[0] ? colorScheme.color3 : colorScheme.color4, cursor: 'pointer' }}
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={() => handleMouseLeave(0)}
                            onClick={() => saveAndSetNewColorScheme(newColorScheme)}
                        />

                        &nbsp;&nbsp;&nbsp;&nbsp;

                        <FaUndo
                            style={{ color: hoverStatuses[1] ? colorScheme.color3 : colorScheme.color4, cursor: 'pointer' }}
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={() => handleMouseLeave(1)}
                            onClick={resetNewColorScheme}
                        />

                    </div>

                    {showPicker ? (
                        <>
                            <br/>
                            {textContent.colorSchemePage.pickNew} {giveColorName(colorBeingChanged)}
                            <br/>
                            <br/>

                            <ColorPickerEffect>
                                <SketchPicker
                                    color={pickerColor}
                                    onChange={updatedColor => pickerColorChange(updatedColor)}
                                />
                            </ColorPickerEffect>
                        </>

                    ) : (
                        null
                    )}
                </div>
            </CustomizationPanelEffect>
        </div>
    )
}

export default CustomizationPanel

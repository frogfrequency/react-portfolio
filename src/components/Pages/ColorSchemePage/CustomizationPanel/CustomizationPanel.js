import "./CustomizationPanel.css"
import "../ColorSchemePage.css"
import "../../../ColorPreview/ColorPreview.css"
import { SketchPicker } from 'react-color';
import { RiSave3Fill } from "react-icons/ri";
import { FaUndo } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import ColorPreview from '../../../ColorPreview/ColorPreview';
import CustomizationPanelElement from "./CustomizationPanelElement/CustomizationPanelElement";

const CustomizationPanel = ({thisColorScheme, colorScheme, saveAndSetNewColorScheme, setActiveCustomizationId}) => {

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


    const oldColorScheme = {...thisColorScheme};
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
                return 'background color'
            case 2:
                return 'background styling color'
            case 3:
                return 'text styling color'
            case 4:
                return 'text color'
            default:
                return 'error in giveColorName'

        }
    }

    return (
        <div
            id='customization-panel'
            style={{ backgroundColor: colorScheme.color2, borderColor: colorScheme.color1 }}
        >


                {hoverStatuses[2] ? (
                    <MdClose
                    size='1.3em'
                    id='closeX'
                    style={{color: colorScheme.color3}}
                    onClick={() => setActiveCustomizationId(null)}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => handleMouseLeave(2)}
                />
                ) : (
                    <MdClose
                    size='1.3em'
                    id='closeX'
                    style={{color: colorScheme.color4}}
                    onClick={() => setActiveCustomizationId(null)}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => handleMouseLeave(2)}
                />
                )}

                






            
            <div id='customization-panel-header' style={{ borderColor: colorScheme.color3 }}>
                <div>adjust colors for: </div>

                <ColorPreview
                    colorScheme={thisColorScheme}
                />
            </div>

            <div id='customization-panel-content'>
                <CustomizationPanelElement
                    // thisColorScheme={thisColorScheme}
                    text={'background color'}
                    boxColor={newColorScheme.color1}
                    colorScheme={colorScheme}
                    setShowPicker={setShowPicker}
                    setPickerColor={setPickerColor}
                    setColorBeingChanged={setColorBeingChanged}
                    boxId={1}
                />
                <CustomizationPanelElement
                    // thisColorScheme={thisColorScheme}
                    text={'background styling color'}
                    boxColor={newColorScheme.color2}
                    colorScheme={colorScheme}
                    setShowPicker={setShowPicker}
                    setPickerColor={setPickerColor}
                    setColorBeingChanged={setColorBeingChanged}
                    boxId={2}
                />
                <CustomizationPanelElement
                    // thisColorScheme={thisColorScheme}
                    text={'text styling color'}
                    boxColor={newColorScheme.color3}
                    colorScheme={colorScheme}
                    setShowPicker={setShowPicker}
                    setPickerColor={setPickerColor}
                    setColorBeingChanged={setColorBeingChanged}
                    boxId={3}
                />
                <CustomizationPanelElement
                    // thisColorScheme={thisColorScheme}
                    text={'text color'}
                    boxColor={newColorScheme.color4}
                    colorScheme={colorScheme}
                    setShowPicker={setShowPicker}
                    setPickerColor={setPickerColor}
                    setColorBeingChanged={setColorBeingChanged}
                    boxId={4}
                />
            </div>

            <div className='customization-panel-action-bar'>
                {hoverStatuses[0] ? (
                    <RiSave3Fill
                        size='1.3em'
                        style={{color: colorScheme.color3}}
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={() => handleMouseLeave(0)}
                        onClick={() => saveAndSetNewColorScheme(newColorScheme)}
                    />
                ): (
                    <RiSave3Fill
                        size='1.3em'
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={() => handleMouseLeave(0)}
                        onClick={() => saveAndSetNewColorScheme(newColorScheme)}
                    />
                )
                }


                &nbsp;&nbsp;&nbsp;&nbsp;


                {hoverStatuses[1] ? (
                    <FaUndo
                        style={{color: colorScheme.color3}}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={() => handleMouseLeave(1)}
                        onClick={resetNewColorScheme}
                    />
                ): (
                    <FaUndo
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={() => handleMouseLeave(1)}
                        onClick={resetNewColorScheme}
                    />
                )
                }


            </div>

            {showPicker ? (
                <>
                    <br></br>
                    pick new {giveColorName(colorBeingChanged)}
                    <br></br>
                    <br></br>


                    <SketchPicker
                        color={pickerColor}
                        onChange={updatedColor => pickerColorChange(updatedColor)}
                    />
                </>

            ) : (
                null
            )}

        </div>
    )
}

export default CustomizationPanel

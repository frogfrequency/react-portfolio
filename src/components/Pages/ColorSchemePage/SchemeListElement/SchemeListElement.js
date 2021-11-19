import { useState } from "react";
import { BsFillGearFill } from "react-icons/bs";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import CustomizationPanel from "../CustomizationPanel/CustomizationPanel";

import "./SchemeListElement.css"


const SchemeListElement = ({ thisColorScheme, colorScheme, setColorScheme, deleteColorScheme, activeCustomizationId, setActiveCustomizationId, saveAndSetNewColorScheme, textContent }) => {

    const [hoverStatuses, updateHoverStatuses] = useState({ inactive: false, gear: false, bin: false });

    const handleMouseEnter = (symbol) => {
        let hoverStatusesCopy = { ...hoverStatuses };
        hoverStatusesCopy[symbol] = true;
        updateHoverStatuses(hoverStatusesCopy);
    }
    const handleMouseLeave = (symbol) => {
        let hoverStatusesCopy = { ...hoverStatuses };
        hoverStatusesCopy[symbol] = false;
        updateHoverStatuses(hoverStatusesCopy);
    }

    const handleBinClick = (id) => {
        if (id !== colorScheme.schemeId) {
            deleteColorScheme(id);
        }
        else {
            alert(textContent.colorSchemePage.alertText);
        }
    }

    const handleInactiveClick = (id) => {
        handleMouseLeave('inactive');
        setColorScheme(id)
    }

    const handleGearClick = (id) => {
        setActiveCustomizationId(id);
    }


    return (
        <div className='page-box-container'>

            <div className='page-color-box' style={{ backgroundColor: thisColorScheme.color1, color: thisColorScheme.color4 }}>{thisColorScheme.schemeId}</div>
            <div className='page-color-box' style={{ backgroundColor: thisColorScheme.color2 }}></div>
            <div className='page-color-box' style={{ backgroundColor: thisColorScheme.color3 }}></div>
            <div className='page-color-box' style={{ backgroundColor: thisColorScheme.color4 }}></div>

            &nbsp;

            {thisColorScheme.schemeId === colorScheme.schemeId ? (
                <FaCircle
                    className='color-container-symbol'
                    style={{ color: colorScheme.color4 }}
                />
            ) : (
                <FaRegCircle
                    className='color-container-symbol pointer'
                    style={{ color: hoverStatuses.inactive ? colorScheme.color3 : colorScheme.color4 }}
                    onMouseEnter={() => handleMouseEnter('inactive')}
                    onMouseLeave={() => handleMouseLeave('inactive')}
                    onClick={() => handleInactiveClick(thisColorScheme.schemeId)}
                />
            )}

            <BsFillGearFill
                className='color-container-symbol pointer'
                style={{ color: hoverStatuses.gear ? colorScheme.color3 : colorScheme.color4 }}
                onMouseEnter={() => handleMouseEnter('gear')}
                onMouseLeave={() => handleMouseLeave('gear')}
                onClick={() => handleGearClick(thisColorScheme.schemeId)}
            />

            <MdDelete
                className='color-container-symbol pointer'
                style={{ color: hoverStatuses.bin ? colorScheme.color3 : colorScheme.color4 }}
                onMouseEnter={() => handleMouseEnter('bin')}
                onMouseLeave={() => handleMouseLeave('bin')}
                onClick={() => handleBinClick(thisColorScheme.schemeId)}
                size={'1.15em'}
            />

            {activeCustomizationId === thisColorScheme.schemeId ? (
                <CustomizationPanel
                    thisColorScheme={thisColorScheme}
                    colorScheme={colorScheme}
                    saveAndSetNewColorScheme={saveAndSetNewColorScheme}
                    setActiveCustomizationId={setActiveCustomizationId}
                    textContent={textContent}
                />
            ) : (
                null
            )}
        </div>
    )
}

export default SchemeListElement

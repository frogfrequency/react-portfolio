import { useState } from "react";
import "./SchemeListElement.css"
import { BsFillGearFill } from "react-icons/bs";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "../CustomizationPanel/CustomizationPanel.css"
import CustomizationPanel from "../CustomizationPanel/CustomizationPanel";
// import { CustomizationPanel } from "../CustomizationPanel/CustomizationPanel"



const SchemeListElement = ({ thisColorScheme, colorScheme, setColorScheme, deleteColorScheme, activeCustomizationId, setActiveCustomizationId, handleDefineTheColorSchemes, theColorSchemes, nextColorScheme, saveAndSetNewColorScheme }) => {

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
            alert("Sry you cannot delete a scheme that is currently active");
        }
    }

    const handleInactiveClick = (id) => {
        handleMouseLeave('inactive');
        setColorScheme(id)
    }

    const handleGearClick = (id) => {
        setActiveCustomizationId(id);
    }

    // ------------- END OF STATE ------------

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
                <>
                {hoverStatuses.inactive ? (
                    <FaRegCircle
                        className='color-container-symbol pointer'
                        style={{ color: colorScheme.color3 }}
                        onMouseEnter={() => handleMouseEnter('inactive')}
                        onMouseLeave={() => handleMouseLeave('inactive')}
                        onClick={() => handleInactiveClick(thisColorScheme.schemeId)}
                    />
                ) : (
                    <FaRegCircle
                        className='color-container-symbol'
                        style={{ color: colorScheme.color4 }}
                        onMouseEnter={() => handleMouseEnter('inactive')}
                        onMouseLeave={() => handleMouseLeave('inactive')}
                        onClick={() => handleInactiveClick(thisColorScheme.schemeId)}
                    />
                )
                }

                </>
            )
            }

            {hoverStatuses.gear ? (
                <BsFillGearFill
                    className='color-container-symbol pointer'
                    style={{ color: colorScheme.color3 }}
                    onMouseEnter={() => handleMouseEnter('gear')}
                    onMouseLeave={() => handleMouseLeave('gear')}
                    onClick={() => handleGearClick(thisColorScheme.schemeId)}
                />
            ): (
                <BsFillGearFill
                    className='color-container-symbol'
                    style={{ color: colorScheme.color4 }}
                    onMouseEnter={() => handleMouseEnter('gear')}
                    onMouseLeave={() => handleMouseLeave('gear')}
                    // onClick={() => handleGearClick} // this is theoretically not needed since it cant be clicked without being hovered
                />
            )
            }

            {hoverStatuses.bin ? (
                <MdDelete
                    className='color-container-symbol pointer'
                    style={{ color: colorScheme.color3 }}
                    onMouseEnter={() => handleMouseEnter('bin')}
                    onMouseLeave={() => handleMouseLeave('bin')}
                    onClick={() => handleBinClick(thisColorScheme.schemeId)}
                    size={'1.15em'}
                />
            ): (
                <MdDelete
                    className='color-container-symbol'
                    style={{ color: colorScheme.color4 }}
                    onMouseEnter={() => handleMouseEnter('bin')}
                    onMouseLeave={() => handleMouseLeave('bin')}
                    onClick={() => handleBinClick(thisColorScheme.schemeId)}
                    size={'1.15em'}
                />
            )
            }
        {activeCustomizationId === thisColorScheme.schemeId ? (
            
            <CustomizationPanel
                activeCustomizationId={activeCustomizationId}
                thisColorScheme={thisColorScheme}
                colorScheme={colorScheme}
                handleDefineTheColorSchemes={handleDefineTheColorSchemes}
                theColorSchemes={theColorSchemes}
                setColorScheme={setColorScheme}
                nextColorScheme={nextColorScheme}
                saveAndSetNewColorScheme={saveAndSetNewColorScheme}
            />
        ) : (
            null
        )
        }
        

        </div>
    )
}

export default SchemeListElement

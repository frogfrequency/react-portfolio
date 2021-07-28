import { useState } from "react";
import "./SchemeListElement.css"
import { BsFillGearFill } from "react-icons/bs";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { colorSchemes, giveNextSchemeId, defineNewColorSchemes } from "../../../../color-schemes"

let color

const SchemeListElement = ({ thisColorScheme, colorScheme, setColorScheme, nextColorScheme }) => {

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
        console.log(`handleBinClick fires with: ${id}`)
        console.log(`the current scheme id is: ${colorScheme.schemeId}`)
        if (id !== colorScheme.schemeId) {
            let newColorSchemes = colorSchemes.filter(scheme => scheme.schemeId != id);
            defineNewColorSchemes(newColorSchemes);
            let currentSchemeId = colorScheme.schemeId;
            setColorScheme(0);
        }
        else {
            alert("Sry you cannot delete a scheme that is currently active");
        }
    }



    const handleOnClick = () => { }; // boilerplate here



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
                    onClick={() => handleOnClick}
                />
            ) : (
                <>
                {hoverStatuses.inactive ? (
                    <FaRegCircle
                        className='color-container-symbol'
                        style={{ color: colorScheme.color3 }}
                        onMouseEnter={() => handleMouseEnter('inactive')}
                        onMouseLeave={() => handleMouseLeave('inactive')}
                        onClick={() => setColorScheme(thisColorScheme.schemeId)}
                    />
                ) : (
                    <FaRegCircle
                        className='color-container-symbol'
                        style={{ color: colorScheme.color4 }}
                        onMouseEnter={() => handleMouseEnter('inactive')}
                        onMouseLeave={() => handleMouseLeave('inactive')}
                        onClick={() => handleOnClick}
                    />
                )
                }

                </>
            )
            }

            {hoverStatuses.gear ? (
                <BsFillGearFill
                    className='color-container-symbol'
                    style={{ color: colorScheme.color3 }}
                    onMouseEnter={() => handleMouseEnter('gear')}
                    onMouseLeave={() => handleMouseLeave('gear')}
                    onClick={() => handleOnClick}
                />
            ): (
                <BsFillGearFill
                    className='color-container-symbol'
                    style={{ color: colorScheme.color4 }}
                    onMouseEnter={() => handleMouseEnter('gear')}
                    onMouseLeave={() => handleMouseLeave('gear')}
                    onClick={() => handleOnClick}
                />
            )
            }

            {hoverStatuses.bin ? (
                <MdDelete
                    className='color-container-symbol'
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




            
           


        </div>
    )
}

export default SchemeListElement

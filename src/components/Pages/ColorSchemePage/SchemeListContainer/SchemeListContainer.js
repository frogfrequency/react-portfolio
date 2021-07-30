import SchemeListElement from "../SchemeListElement/SchemeListElement"
import { GoPlus } from "react-icons/go";
import "./SchemeListContainer.css";
import "../../../../App.css"
import "../ColorSchemePage.css"
import { useState } from 'react';
import { generateNewId } from "../../../../utility"

const SchemeListContainer = ({colorScheme, setColorScheme, theColorSchemes, deleteColorScheme, handleDefineTheColorSchemes, nextColorScheme, saveAndSetNewColorScheme}) => {
    
    const [addButtonHoverStatus, setAddButtonHoverStatus] = useState(
        false
    )
    const handleAddButtonMouseEnter = () => {
        setAddButtonHoverStatus(true);
    }
    const handleAddButtonMouseLeave = () => {
        setAddButtonHoverStatus(false);
    }
    
    const [activeCustomizationId, setActiveCustomizationId] = useState(null); // change this to null



    const addColorScheme = () => {
        console.log('addColorScheme called');
        let newId = generateNewId(theColorSchemes);
        let newScheme = {
            schemeId: newId,
            color1: 'rgb(10, 10, 10)',
            color2: 'rgb(40, 40, 40)',
            color3: 'rgb(170, 170, 170)',
            color4: 'rgb(220, 220, 220)'
        }

        let theSchemes = [...theColorSchemes]
        theSchemes.push(newScheme);
     
        handleDefineTheColorSchemes(theSchemes);
    }
    
    
    return (
        <div>


            {theColorSchemes.map((scheme) => (
                        
                            <SchemeListElement
                                key={scheme.schemeId}
                                thisColorScheme={scheme}
                                colorScheme={colorScheme}
                                setColorScheme={setColorScheme}
                                deleteColorScheme={deleteColorScheme}
                                activeCustomizationId={activeCustomizationId}
                                setActiveCustomizationId={setActiveCustomizationId}
                                handleDefineTheColorSchemes={handleDefineTheColorSchemes}
                                theColorSchemes={theColorSchemes}
                                nextColorScheme={nextColorScheme}
                                saveAndSetNewColorScheme={saveAndSetNewColorScheme}
                            ></SchemeListElement>
                        
                    ))}

            {addButtonHoverStatus ? (
    
                <div
                    className='addSchemeButton pointer'
                    onMouseEnter={handleAddButtonMouseEnter}
                    onMouseLeave={handleAddButtonMouseLeave}
                    style={{color: colorScheme.color3}}
                    onClick={() => addColorScheme()}
                >
                    add new scheme
                    <GoPlus id='addSchemePlusSign' size={'1.1em'}/>
                </div>

            ) : (

                <div
                    className='addSchemeButton'
                    onMouseEnter={handleAddButtonMouseEnter}
                    onMouseLeave={handleAddButtonMouseLeave}
                    // onMouseClick={}
                >
                    add new scheme
                    <GoPlus id='addSchemePlusSign' size={'1.1em'}/>
                </div>

            )
            }
            
        </div>
    )
}

export default SchemeListContainer

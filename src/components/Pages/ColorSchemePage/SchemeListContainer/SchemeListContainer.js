import SchemeListElement from "../SchemeListElement/SchemeListElement"
import { GoPlus } from "react-icons/go";
import "./SchemeListContainer.css";
import "../../../../App.css"
import "../ColorSchemePage.css"
import { useState } from 'react';
import { generateNewId } from "../../../../utility"

const SchemeListContainer = ({ colorScheme, setColorScheme, theColorSchemes, deleteColorScheme, handleDefineTheColorSchemes, saveAndSetNewColorScheme, textContent }) => {

    const [addButtonHoverStatus, setAddButtonHoverStatus] = useState(
        false
    )
    const handleAddButtonMouseEnter = () => {
        setAddButtonHoverStatus(true);
    }
    const handleAddButtonMouseLeave = () => {
        setAddButtonHoverStatus(false);
    }

    const [activeCustomizationId, setActiveCustomizationId] = useState(null);



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
                    saveAndSetNewColorScheme={saveAndSetNewColorScheme}
                    textContent={textContent}
                ></SchemeListElement>
            ))}

            <div
                className={addButtonHoverStatus ? 'addSchemeButton pointer' : 'addSchemeButton'}
                onMouseEnter={handleAddButtonMouseEnter}
                onMouseLeave={handleAddButtonMouseLeave}
                style={{ color: addButtonHoverStatus ? colorScheme.color3 : colorScheme.color4 }}
                onClick={() => addColorScheme()}
            >
                {textContent.colorSchemePage.addScheme}
                <GoPlus id='addSchemePlusSign' size={'1.1em'} />
            </div>
        </div>
    )
}

export default SchemeListContainer

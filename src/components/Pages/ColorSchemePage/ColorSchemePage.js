import ColorPreview from "../../ColorPreview/ColorPreview"
import PageTitle from "../PageTitle"
import { colorSchemes } from "../../../color-schemes.js"
import SchemeListElement from "./SchemeListElement/SchemeListElement"
import SchemeListContainer from "./SchemeListContainer/SchemeListContainer"
import CustommizationPanel from "./CustomizationPanel/CustomizationPanel"
import "./ColorSchemePage.css"

const ColorSchemePage = ({activePage, colorScheme, title, subHeader, setColorScheme, nextColorScheme, theColorSchemes, deleteColorScheme, handleDefineTheColorSchemes}) => {
    


    return (
        <div className="page">
            {activePage === 'ColorSchemePage' ? (
                <>
                   <PageTitle
                        colorScheme={colorScheme}
                        title={title}
                        subHeader={subHeader}
                    />
                    <div id="color-control">
                    <SchemeListContainer
                        colorScheme={colorScheme}
                        setColorScheme={setColorScheme}
                        nextColorScheme={nextColorScheme}
                        theColorSchemes={theColorSchemes}
                        deleteColorScheme={deleteColorScheme}
                        handleDefineTheColorSchemes={handleDefineTheColorSchemes}
                    />
                    <CustommizationPanel/>
                    </div>
                </>
            ) : (
                null
            )
            }
        </div>
    )
}

export default ColorSchemePage

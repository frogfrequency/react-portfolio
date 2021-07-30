import PageTitle from "../PageTitle"
import SchemeListContainer from "./SchemeListContainer/SchemeListContainer"
import "./ColorSchemePage.css"

const ColorSchemePage = ({activePage, colorScheme, title, subHeader, setColorScheme, nextColorScheme, theColorSchemes, deleteColorScheme, handleDefineTheColorSchemes, saveAndSetNewColorScheme}) => {
    


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
                        theColorSchemes={theColorSchemes}
                        deleteColorScheme={deleteColorScheme}
                        handleDefineTheColorSchemes={handleDefineTheColorSchemes}
                        nextColorScheme={nextColorScheme}
                        saveAndSetNewColorScheme={saveAndSetNewColorScheme}
                    />
                    
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

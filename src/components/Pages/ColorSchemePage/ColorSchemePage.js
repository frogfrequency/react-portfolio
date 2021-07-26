import ColorPreview from "../../ColorPreview/ColorPreview"
import PageTitle from "../PageTitle"
import { colorSchemes } from "../../../color-schemes.js"
import SchemeListElement from "./SchemeListElement/SchemeListElement"

const ColorSchemePage = ({activePage, colorScheme, title, subHeader, setColorScheme}) => {
    


    return (
        <div className="page">
            {activePage === 'ColorSchemePage' ? (
                <>
                   <PageTitle
                            colorScheme={colorScheme}
                            title={title}
                            subHeader={subHeader}
                    />
                    
                    <div>here are the schemes:</div>

                    {colorSchemes.map((scheme) => (
                        <>
                        {/* <ColorPreview colorScheme={colorSchemes[scheme.schemeId]}></ColorPreview> */}
                        <SchemeListElement
                            // insert key prop here to avoid warning message?
                            thisColorScheme={colorSchemes[scheme.schemeId]}
                            colorScheme={colorScheme}
                            setColorScheme={setColorScheme}
                        ></SchemeListElement>
                        </>
                    ))}

                          


                </>
            ) : (
                null
            )
            }
        </div>
    )
}

export default ColorSchemePage

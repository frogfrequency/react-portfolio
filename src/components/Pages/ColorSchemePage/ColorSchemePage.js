import { FadeIn, TitleEffectIn } from "../../../utility"

import PageTitle from "../PageTitle"
import SchemeListContainer from "./SchemeListContainer/SchemeListContainer"

import "./ColorSchemePage.css"


const ColorSchemePage = ({  colorScheme, title, subHeader, setColorScheme, theColorSchemes, deleteColorScheme,
                            handleDefineTheColorSchemes, saveAndSetNewColorScheme, textContent }) => {

    return (
        <FadeIn>
            <div className="page">

                <TitleEffectIn>
                    <PageTitle
                        colorScheme={colorScheme}
                        title={title}
                        subHeader={subHeader}
                    />
                </TitleEffectIn>

                <div id="color-control">
                    <SchemeListContainer
                        colorScheme={colorScheme}
                        setColorScheme={setColorScheme}
                        theColorSchemes={theColorSchemes}
                        deleteColorScheme={deleteColorScheme}
                        handleDefineTheColorSchemes={handleDefineTheColorSchemes}
                        saveAndSetNewColorScheme={saveAndSetNewColorScheme}
                        textContent={textContent}
                    />
                </div>
                
            </div>
        </FadeIn>
    )
}

export default ColorSchemePage

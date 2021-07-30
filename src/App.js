import './App.css';
import { useState } from 'react';



import Header from './components/Header/Header';

import { colorSchemes, giveNextSchemeId } from "./color-schemes.js"
import AboutPage from './components/Pages/AboutPage/AboutPage';
import ProjectsPage from './components/Pages/ProjectsPage/ProjectsPage';
import ColorSchemePage from './components/Pages/ColorSchemePage/ColorSchemePage';
import HeaderPageSelect from './components/Header/Header-components/HeaderPageSelect/HeaderPageSelect';





function App() {

    
    // ACTIVE SCHEME

    const [colorScheme, defineActiveColorScheme] = useState(
        colorSchemes[0]
    )

    document.body.style.backgroundColor = colorScheme.color1;


    const nextColorScheme = () => {
        let nextId = giveNextSchemeId(theColorSchemes, colorScheme.schemeId);
        let requestedScheme = theColorSchemes.filter(scheme => scheme.schemeId === nextId)[0];
        defineActiveColorScheme(requestedScheme);
    } 

    const setColorScheme = (id) => {
        let requestedScheme = theColorSchemes.filter(scheme => scheme.schemeId === id)[0];
        defineActiveColorScheme(requestedScheme);
    }



    // COLORSCHEMES

    const [theColorSchemes, defineTheColorSchemes] = useState(colorSchemes)

    const handleDefineTheColorSchemes = (newColorSchemes) => {
        defineTheColorSchemes(newColorSchemes);
    }

    const deleteColorScheme = (id) => {
        let newColorSchemes = theColorSchemes.filter(scheme => scheme.schemeId !== id);
        defineTheColorSchemes(newColorSchemes);
    }

    const saveAndSetNewColorScheme = (newColorScheme) => {
        let newTheColorSchemes = [...theColorSchemes];
        newTheColorSchemes = newTheColorSchemes.filter(scheme => scheme.schemeId !== newColorScheme.schemeId);
        newTheColorSchemes.push(newColorScheme);
        newTheColorSchemes.sort(function(a, b) {
            return a.schemeId - b.schemeId;
        });
        handleDefineTheColorSchemes(newTheColorSchemes);
        if (colorScheme.schemeId === newColorScheme.schemeId) {defineActiveColorScheme(newColorScheme)};
    }


    // ACTIVEPAGE SELECT

    const [activePage, setActivePage] = useState(
        'ColorSchemePage'
    )

    const handlePageSelect = (whatPage) => {
        setActivePage(whatPage);
    }


    // SELECTOR MENU VISIBILITY

    const [pageSelectorVisibility, setPageSelectorVisibility] = useState(
        [false, false]
    )

    const handleSelectorVisibility = (visibility) => {
        setPageSelectorVisibility(visibility);
    }


    // --------- END OF STATE ---------

    return (
        
        <div
            className="App"
            style={{ backgroundColor: colorScheme.color1, color: colorScheme.color4 }}
        > 
            
            <HeaderPageSelect
                colorScheme={colorScheme}
                onSelect={handlePageSelect}
                selectorVisibility={pageSelectorVisibility}
                handleSelectorVisibility={handleSelectorVisibility}
            />

            <Header
                colorScheme={colorScheme}
                nextColorScheme={nextColorScheme}
                selectColorPage={handlePageSelect}
                selectorVisibility={pageSelectorVisibility}
                handleSelectorVisibility={handleSelectorVisibility}
            />
            
            <AboutPage
                activePage={activePage}
                colorScheme={colorScheme}
                title={'about'}
                subHeader={'useful information about this website'}
                
            />

            <ProjectsPage
                activePage={activePage}
                colorScheme={colorScheme}
                title={'projects'}
                subHeader={'a collection of some of my coding projects'}

            />

            <ColorSchemePage
                activePage={activePage}
                colorScheme={colorScheme}
                title={'color control'}
                subHeader={`don't like the default color schemes? create your own here!`}
                setColorScheme={setColorScheme}
                nextColorScheme={nextColorScheme}
                theColorSchemes={theColorSchemes}
                deleteColorScheme={deleteColorScheme}
                handleDefineTheColorSchemes={handleDefineTheColorSchemes}
                saveAndSetNewColorScheme={saveAndSetNewColorScheme}
            />
                
        </div>
    );
}




export default App;
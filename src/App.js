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
    const nextColorScheme = () => {
        let nextId = giveNextSchemeId(theColorSchemes, colorScheme.schemeId);
        let requestedScheme = theColorSchemes.filter(scheme => scheme.schemeId === nextId)[0];
        defineActiveColorScheme(requestedScheme);
    } 

    const setColorScheme = (id) => {
        console.log(`setColorScheme called with: ${id}`)
        
        let requestedScheme = theColorSchemes.filter(scheme => scheme.schemeId === id)[0];
        let requestedSchemeId = requestedScheme.schemeId;
        console.log(requestedSchemeId);
        defineActiveColorScheme(requestedScheme);
    }


    // COLORSCHEMES

    const [theColorSchemes, defineTheColorSchemes] = useState(
        colorSchemes
    )

    const handleDefineTheColorSchemes = (newColorSchemes) => {
        console.log('aaaand handleDefineTheColorSchemes is calle as well with:')
        console.log(newColorSchemes);
        defineTheColorSchemes(newColorSchemes);
    }

    const deleteColorScheme = (id) => {
        let newColorSchemes = theColorSchemes.filter(scheme => scheme.schemeId !== id);
        defineTheColorSchemes(newColorSchemes);
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
            />
                
        </div>
    );
}




export default App;
import './App.css';
import { useState } from 'react';



import Header from './components/Header/Header';

import { colorSchemes } from "./color-schemes.js"
import AboutPage from './components/Pages/AboutPage/AboutPage';
import ProjectsPage from './components/Pages/ProjectsPage/ProjectsPage';
import ColorSchemePage from './components/Pages/ColorSchemePage/ColorSchemePage';
import HeaderPageSelect from './components/Header/Header-components/HeaderPageSelect/HeaderPageSelect';





function App() {

    const [colorScheme, setColorScheme] = useState(
        colorSchemes[0]
    )
    const updateColorScheme = () => {
        let newId = (colorScheme.schemeId + 1) % colorSchemes.length; // increasing the current schemeId by one
        setColorScheme(colorSchemes[newId]); // setting colorScheme(state) to next scheme
    }



    const [activePage, setActivePage] = useState(
        'ProjectsPage'
    )

    const handlePageSelect = (whatPage) => {
        setActivePage(whatPage);
    }

    const [pageSelectorVisibility, setPageSelectorVisibility] = useState(
        [false, false]
    )

    const handleSelectorVisibility = (visibility) => {
        setPageSelectorVisibility(visibility);
    }


    // --------- end of state ---------

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
                updateColorScheme={updateColorScheme}
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
            />
                
        </div>
    );
}




export default App;
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
        false
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
                visibility={pageSelectorVisibility}
                handleSelectorVisibility={handleSelectorVisibility}
            />

            <Header
                colorScheme={colorScheme}
                updateColorScheme={updateColorScheme}
                selectColorPage={handlePageSelect}
                handleSelectorVisibility={handleSelectorVisibility}
            />
            
            <AboutPage
                activePage={activePage}
                setActivePage={setActivePage}
                colorScheme={colorScheme}
            />

            <ProjectsPage
                activePage={activePage}
                setActivePage={setActivePage}
                colorScheme={colorScheme}
            />

            <ColorSchemePage
                activePage={activePage}
                setActivePage={setActivePage}
                colorScheme={colorScheme}
            />

        </div>
    );
}




export default App;
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { languagePackages } from './languagePackages';
import { projectsEnglish, projectsGerman } from "./projects";
import { literatureEnglish, literatureGerman } from "./literatureElements";
import { colorSchemes, giveNextSchemeId } from "./color-schemes.js";

import Header from './components/Header/Header';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import ProjectsPage from './components/Pages/ProjectsPage/ProjectsPage';
import ColorSchemePage from './components/Pages/ColorSchemePage/ColorSchemePage';
import HeaderPageSelect from './components/Header/Header-components/HeaderPageSelect/HeaderPageSelect';
import ProjectDetailPage from './components/Pages/ProjectDetailPage/ProjectDetailPage';
import LiteraturePage from './components/Pages/LiteraturePage/LiteraturePage';
import HomePage from './components/Pages/HomePage/HomePage';

import './App.css';

function App() {


    // state: active scheme 

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


    // state: colorschemes

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
        newTheColorSchemes.sort(function (a, b) {
            return a.schemeId - b.schemeId;
        });
        handleDefineTheColorSchemes(newTheColorSchemes);
        if (colorScheme.schemeId === newColorScheme.schemeId) { defineActiveColorScheme(newColorScheme) };
    }


    // state: selector menu visibility

    const [pageSelectorVisibility, setPageSelectorVisibility] = useState(
        [false, false]
    )

    const handleSelectorVisibility = (visibility) => {
        setPageSelectorVisibility(visibility);
    }


    // state: language select (setting textContent, projects and literatureElements)

    const [textContent, setTextContent] = useState(
        languagePackages.english
    )

    const [projects, setProjects] = useState(
        projectsEnglish
    )

    const [literatureElements, setLiteratureElements] = useState(
        literatureEnglish
    )

    const setGerman = () => {
        setTextContent(languagePackages.german)
        setProjects(projectsGerman)
        setLiteratureElements(literatureGerman)
    }

    const setEnglish = () => {
        setTextContent(languagePackages.english)
        setProjects(projectsEnglish)
        setLiteratureElements(literatureEnglish)
    }


    // --------- END OF STATE ---------  //

    return (
        <Router>
            <div
                className="App"
                style={{ backgroundColor: colorScheme.color1, color: colorScheme.color4 }}
            >
                <HeaderPageSelect
                    colorScheme={colorScheme}
                    selectorVisibility={pageSelectorVisibility}
                    handleSelectorVisibility={handleSelectorVisibility}
                    textContent={textContent}
                />

                <Header
                    colorScheme={colorScheme}
                    nextColorScheme={nextColorScheme}
                    selectorVisibility={pageSelectorVisibility}
                    handleSelectorVisibility={handleSelectorVisibility}
                    setGerman={setGerman}
                    setEnglish={setEnglish}
                    textContent={textContent}
                />

                {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
                <Switch>

                    <Route path="/about">
                        <AboutPage
                            colorScheme={colorScheme}
                            title={textContent.titles.aboutTitle}
                            subHeader={textContent.titles.aboutSubheader}
                            textContent={textContent}
                        />
                    </Route>

                    <Route path="/color-control">
                        <ColorSchemePage
                            colorScheme={colorScheme}
                            title={textContent.titles.colorControlTitle}
                            subHeader={textContent.titles.colorControlSubheader}
                            setColorScheme={setColorScheme}
                            theColorSchemes={theColorSchemes}
                            deleteColorScheme={deleteColorScheme}
                            handleDefineTheColorSchemes={handleDefineTheColorSchemes}
                            saveAndSetNewColorScheme={saveAndSetNewColorScheme}
                            textContent={textContent}
                        />
                    </Route>

                    {projects.map((project) => (
                        <Route path={`/projects/${project.key}`} key={project.key}>
                            <ProjectDetailPage
                                project={project}
                                colorScheme={colorScheme}
                                textContent={textContent}
                            />
                        </Route>
                    ))}

                    <Route path="/projects">
                        <ProjectsPage
                            colorScheme={colorScheme}
                            title={textContent.titles.projectsTitle}
                            subHeader={textContent.titles.projectsSubheader}
                            projects={projects}
                        />
                    </Route>

                    <Route path="/literature">
                        <LiteraturePage
                            colorScheme={colorScheme}
                            title={textContent.titles.literatureTitle}
                            subHeader={textContent.titles.literatureSubheader}
                            textContent={textContent}
                            literatureElements={literatureElements}
                        />
                    </Route>

                    <Route path="/">
                        <HomePage
                            colorScheme={colorScheme}
                            homePageTextContent={textContent.homePage}
                        />
                    </Route>
                    
                </Switch>        
            </div>
        </Router>
    );
}




export default App;
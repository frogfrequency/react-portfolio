import "./HeaderPageSelect.css"
import { useState } from 'react';
import { Link } from "react-router-dom";

const HeaderPageSelect = ({ colorScheme, selectorVisibility, handleSelectorVisibility }) => {

    const defaultHoverStatuses = { ProjectsPage: false, ColorSchemePage: false, AboutPage: false };

    const [elementsAreHovered, setElementsAreHovered] = useState(
        defaultHoverStatuses
    );

    const handleElementMouseEnter = (hoveredItem) => {
        let copy = { ...defaultHoverStatuses }
        copy[hoveredItem] = true;
        setElementsAreHovered(copy);
    }
    const handleElementMouseLeave = () => {
        setElementsAreHovered(defaultHoverStatuses)
    }


    const handleMenuMouseEnter = () => {
        let visibilityCopy = [...selectorVisibility];
        visibilityCopy[0] = true;
        handleSelectorVisibility(visibilityCopy);
    }

    const handleMenuMouseLeave = () => {
        let visibilityCopy = [...selectorVisibility];
        visibilityCopy[0] = false;
        handleSelectorVisibility(visibilityCopy);
    }


    // end of state -----------------------------


    return (

        <>
            {selectorVisibility.includes(true) ? (
                <>
                    <div
                        className="empty-box"
                        onMouseEnter={() => handleMenuMouseEnter()}
                        onMouseLeave={() => handleMenuMouseLeave()}
                        style={{ left: '192px',}}
                    ></div>
                    <div
                        className="empty-box"
                        onMouseEnter={() => handleMenuMouseEnter()}
                        onMouseLeave={() => handleMenuMouseLeave()}
                        style={{ right: '192px',}}
                    ></div>

                    <div
                        className="empty-box"
                        onMouseEnter={() => handleMenuMouseEnter()}
                        onMouseLeave={() => handleMenuMouseLeave()}
                        style={{ top: '46px', height: '50px'}}
                    ></div>
                </>

            ) :
                null
            }


            {selectorVisibility.includes(true) ? (
                <div
                    className='page-selector'
                    style={{ backgroundColor: colorScheme.color1, color: colorScheme.color4, borderColor: colorScheme.color2 }}
                    onMouseEnter={() => handleMenuMouseEnter()}
                    onMouseLeave={() => handleMenuMouseLeave()}
                >
                    <div
                        className={elementsAreHovered.ProjectsPage ? 'selector-element pointer' : 'selector-element'}
                        onMouseEnter={() => handleElementMouseEnter('ProjectsPage')}
                        onMouseLeave={() => handleElementMouseLeave()}
                    >
                        <Link
                            style={
                                {
                                    textDecoration: 'none',
                                    color: elementsAreHovered.ProjectsPage ? colorScheme.color3 : colorScheme.color4
                                }
                            }
                            to="/"
                        >
                            projects
                        </Link>
                    </div>

                    <div
                        className={elementsAreHovered.ColorSchemePage ? 'selector-element pointer' : 'selector-element'}
                        onMouseEnter={() => handleElementMouseEnter('ColorSchemePage')}
                        onMouseLeave={() => handleElementMouseLeave()}
                    >
                        <Link
                            style={
                                {
                                    textDecoration: 'none',
                                    color: elementsAreHovered.ColorSchemePage ? colorScheme.color3 : colorScheme.color4
                                }
                            }
                            to="/color-control"
                        >
                            color control
                        </Link>
                    </div>      






                    <div
                        className={elementsAreHovered.AboutPage ? 'selector-element pointer' : 'selector-element'}
                        onMouseEnter={() => handleElementMouseEnter('AboutPage')}
                        onMouseLeave={() => handleElementMouseLeave()}
                    >
                        <Link
                            style={
                                {
                                    textDecoration: 'none',
                                    color: elementsAreHovered.AboutPage ? colorScheme.color3 : colorScheme.color4
                                }
                            }
                            to="/about"
                        >
                            about
                        </Link>
                    </div>      

                    
                </div>

            ) :
                null
            }
        </>
    )
}

export default HeaderPageSelect

import "./HeaderPageSelect.css"
import { useState } from 'react';
import { Link } from "react-router-dom";

import { PageSelectEffect } from "../../../../utility";

const HeaderPageSelect = ({ colorScheme, selectorVisibility, handleSelectorVisibility, textContent }) => {

    const defaultHoverStatuses = { HomePage: false, ProjectsPage: false, ColorSchemePage: false, AboutPage: false, LiteraturePage: false };

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
        <PageSelectEffect  key={selectorVisibility}>
        <div>
            {selectorVisibility.includes(true) ? (
                <>
                    <div
                        className="empty-box"
                        onMouseEnter={() => handleMenuMouseEnter()}
                        onMouseLeave={() => handleMenuMouseLeave()}
                        style={{ left: '210px', }}
                    ></div>
                    <div
                        className="empty-box"
                        onMouseEnter={() => handleMenuMouseEnter()}
                        onMouseLeave={() => handleMenuMouseLeave()}
                        style={{ right: '210px', }}
                    ></div>

                    <div
                        className="empty-box"
                        onMouseEnter={() => handleMenuMouseEnter()}
                        onMouseLeave={() => handleMenuMouseLeave()}
                        style={{ top: '46px', height: '50px', }}
                    ></div>
                </>

            ) :
                null
            }


            {selectorVisibility.includes(true) ? (
            <div>    
                <div
                    className='page-selector'
                    style={{ backgroundColor: colorScheme.color1, color: colorScheme.color4, borderColor: colorScheme.color2 }}
                    onMouseEnter={() => handleMenuMouseEnter()}
                    onMouseLeave={() => handleMenuMouseLeave()}
                >

                    <div
                        className={elementsAreHovered.HomePage ? 'selector-element pointer' : 'selector-element'}
                        onMouseEnter={() => handleElementMouseEnter('HomePage')}
                        onMouseLeave={() => handleElementMouseLeave()}
                    >
                        <Link
                            style={
                                {
                                    textDecoration: 'none',
                                    color: elementsAreHovered.HomePage ? colorScheme.color3 : colorScheme.color4
                                }
                            }
                            to="/"
                        >
                            {textContent.header.home}
                        </Link>
                    </div>

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
                            to="/projects"
                        >
                            {textContent.header.projects}
                        </Link>
                    </div>


                    <div
                        className={elementsAreHovered.LiteraturePage ? 'selector-element pointer' : 'selector-element'}
                        onMouseEnter={() => handleElementMouseEnter('LiteraturePage')}
                        onMouseLeave={() => handleElementMouseLeave()}
                    >
                        <Link
                            style={
                                {
                                    textDecoration: 'none',
                                    color: elementsAreHovered.LiteraturePage ? colorScheme.color3 : colorScheme.color4
                                }
                            }
                            to="/literature"
                        >
                            {textContent.header.literature}
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
                            {textContent.header.colorControl}
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
                            {textContent.header.about}
                        </Link>
                    </div>      

                    
                
                </div>
                <div
                    className='hitbox-enlarger'
                    onMouseEnter={() => handleMenuMouseEnter()}
                    onMouseLeave={() => handleMenuMouseLeave()}
                />

            </div>

            ) :
                null
            }
        </div>
        </PageSelectEffect>
    )
}

export default HeaderPageSelect

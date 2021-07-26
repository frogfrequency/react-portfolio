import "./HeaderPageSelect.css"
import { useState } from 'react';

const HeaderPageSelect = ({ colorScheme, onSelect, selectorVisibility, handleSelectorVisibility }) => {

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
                    style={{left: '192px'}}
                ></div>
                <div
                    className="empty-box"
                    onMouseEnter={() => handleMenuMouseEnter()}
                    onMouseLeave={() => handleMenuMouseLeave()}
                    style={{right: '192px'}}
                ></div>

                <div
                    className="empty-box"
                    onMouseEnter={() => handleMenuMouseEnter()}
                    onMouseLeave={() => handleMenuMouseLeave()}
                    style={{top: '46px', height:'50px'}}
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
                    {elementsAreHovered.ProjectsPage ? (
                        <>
                            <div
                                className='selector-element'
                                onClick={() => onSelect('ProjectsPage')}
                                onMouseEnter={() => handleElementMouseEnter('ProjectsPage')}
                                onMouseLeave={() => handleElementMouseLeave()}
                                style={{ color: colorScheme.color3 }}
                            >
                                projects
                            </div>
                        </>
                    ) : (
                        <>
                            <div
                                className='selector-element'
                                onClick={() => onSelect('ProjectsPage')}
                                onMouseEnter={() => handleElementMouseEnter('ProjectsPage')}
                                onMouseLeave={() => handleElementMouseLeave()}
                                style={{ color: colorScheme.color4 }}
                            >
                                projects
                            </div>
                        </>
                    )
                    }

                    {elementsAreHovered.ColorSchemePage ? (
                        <>
                            <div
                                className='selector-element'
                                onClick={() => onSelect('ColorSchemePage')}
                                onMouseEnter={() => handleElementMouseEnter('ColorSchemePage')}
                                onMouseLeave={() => handleElementMouseLeave()}
                                style={{ color: colorScheme.color3 }}
                            >
                                color control
                            </div>
                        </>
                    ) : (
                        <>
                            <div
                                className='selector-element'
                                onClick={() => onSelect('ColorSchemePage')}
                                onMouseEnter={() => handleElementMouseEnter('ColorSchemePage')}
                                onMouseLeave={() => handleElementMouseLeave()}
                                style={{ color: colorScheme.color4 }}
                            >
                                color control
                            </div>
                        </>
                    )
                    }


                    {elementsAreHovered.AboutPage ? (
                        <>
                            <div
                                className='selector-element'
                                onClick={() => onSelect('AboutPage')}
                                onMouseEnter={() => handleElementMouseEnter('AboutPage')}
                                onMouseLeave={() => handleElementMouseLeave()}
                                style={{ color: colorScheme.color3 }}
                            >
                                about
                            </div>
                        </>
                    ) : (
                        <>
                            <div
                                className='selector-element'
                                onClick={() => onSelect('AboutPage')}
                                onMouseEnter={() => handleElementMouseEnter('AboutPage')}
                                onMouseLeave={() => handleElementMouseLeave()}
                                style={{ color: colorScheme.color4 }}
                            >
                                about
                            </div>
                        </>
                    )
                    }
                </div>

            ) :
                null
            }
        </>
    )
}

export default HeaderPageSelect

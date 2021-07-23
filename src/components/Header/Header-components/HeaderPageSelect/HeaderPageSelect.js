import "./HeaderPageSelect.css"
import { useState } from 'react';

const HeaderPageSelect = ({ colorScheme, onSelect, visibility }) => {

    const defaultHoverStatuses = { ProjectsPage: false, ColorSchemePage: false, AboutPage: false };

    const [elementsAreHovered, setElementsAreHovered] = useState(
        defaultHoverStatuses
    );

    const handleMouseEnter = (hoveredItem) => {
        let copy = { ...defaultHoverStatuses }
        copy[hoveredItem] = true;
        setElementsAreHovered(copy)
    }
    const handleMouseLeave = () => {
        setElementsAreHovered(defaultHoverStatuses)
    }

    // end of state -----------------------------


    return (

        <>
            {visibility ? (
                <div
                    className='page-selector'
                    style={{ backgroundColor: colorScheme.color1, color: colorScheme.color4, borderColor: colorScheme.color2 }}
                >
                    {elementsAreHovered.ProjectsPage ? (
                        <>
                            <div
                                className='selector-element'
                                onClick={() => onSelect('ProjectsPage')}
                                onMouseEnter={() => handleMouseEnter('ProjectsPage')}
                                onMouseLeave={() => handleMouseLeave()}
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
                                onMouseEnter={() => handleMouseEnter('ProjectsPage')}
                                onMouseLeave={() => handleMouseLeave()}
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
                                onMouseEnter={() => handleMouseEnter('ColorSchemePage')}
                                onMouseLeave={() => handleMouseLeave()}
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
                                onMouseEnter={() => handleMouseEnter('ColorSchemePage')}
                                onMouseLeave={() => handleMouseLeave()}
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
                                onMouseEnter={() => handleMouseEnter('AboutPage')}
                                onMouseLeave={() => handleMouseLeave()}
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
                                onMouseEnter={() => handleMouseEnter('AboutPage')}
                                onMouseLeave={() => handleMouseLeave()}
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

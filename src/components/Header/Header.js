import { useState } from 'react';

import HeaderSchemeController from './Header-components/HeaderSchemeController/HeaderSchemeController';
import ColorPreview from './Header-components/ColorPreview/ColorPreview';
import HeaderMainMenuButton from './Header-components/HeaderMainMenuButton/HeaderMainMenuButton';

import './Header.css';


const Header = ({ colorScheme, nextColorScheme, selectorVisibility, handleSelectorVisibility, setGerman, setEnglish, textContent }) => {

    // language select

    const [languagesAreHovered, setLanguagesAreHovered] = useState(
        { english: false, german: false }
    );

    const handleLanguageMouseEnter = (language) => {
        let hoverStatuses = { english: false, german: false }
        hoverStatuses[language] = true;
        setLanguagesAreHovered(hoverStatuses);
    }
    const handleLanguageMouseLeave = () => {
        setLanguagesAreHovered({ english: false, german: false })
    }

    return (
        <div
            className='header'
            style={
                {
                    backgroundColor: colorScheme.color1, color: colorScheme.color2
                }
            }
        >
            <div
                style={
                    {
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }
                }
            >
                <ColorPreview
                    colorScheme={colorScheme}
                    className="header-element"
                />

                <div
                    onClick={setGerman}
                    style={
                        {
                            cursor: 'pointer',
                            color: languagesAreHovered.german ? colorScheme.color3 : colorScheme.color4
                        }
                    }
                    onMouseEnter={() => handleLanguageMouseEnter('german')}
                    onMouseLeave={() => handleLanguageMouseLeave()}
                >
                    &nbsp;&nbsp;Deutsch
                </div>

                <div
                    style={
                        {
                            color: colorScheme.color4
                        }
                    }
                >
                    &nbsp;|&nbsp;
                </div>

                <div
                    onClick={setEnglish}
                    style={
                        {
                            cursor: 'pointer',
                            color: languagesAreHovered.english ? colorScheme.color3 : colorScheme.color4
                        }
                    }
                    onMouseEnter={() => handleLanguageMouseEnter('english')}
                    onMouseLeave={() => handleLanguageMouseLeave()}
                >
                    English
                </div>
            </div>

            <HeaderMainMenuButton
                colorScheme={colorScheme}
                selectorVisibility={selectorVisibility}
                handleSelectorVisibility={handleSelectorVisibility}
                textContent={textContent}
            />

            <HeaderSchemeController
                colorScheme={colorScheme}
                onClickFunc={nextColorScheme}
                textContent={textContent}
            />
        </div>
    )
}


export default Header

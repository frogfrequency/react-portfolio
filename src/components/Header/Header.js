import { useState } from 'react';
import './Header.css';
import HeaderSchemeController from './Header-components/HeaderSchemeController/HeaderSchemeController';
import ColorPreview from '../ColorPreview/ColorPreview';
import HeaderMainMenuButton from './Header-components/HeaderMainMenuButton/HeaderMainMenuButton';


const Header = ({ colorScheme, nextColorScheme, selectorVisibility, handleSelectorVisibility, setGerman, setEnglish, textContent }) => {

    const [languagesAreHovered, setLanguagesAreHovered] = useState(
        {english: false, german: false}
    );

    const handleLanguageMouseEnter = (language) => {
        let copy = { ...languagesAreHovered }
        copy[language] = true;
        setLanguagesAreHovered(copy);
    }
    const handleLanguageMouseLeave = () => {
        setLanguagesAreHovered({english: false, german: false})
    }

    return (
        <div
            className='header'
            style={{
                backgroundColor: colorScheme.color1, color: colorScheme.color2
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ColorPreview colorScheme={colorScheme} className="header-element" />
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

                <div style={{ color: colorScheme.color4 }}>&nbsp;|&nbsp;</div>

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
                    english
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

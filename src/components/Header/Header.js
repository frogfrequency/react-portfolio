
import './Header.css';
import HeaderSchemeController from './Header-components/HeaderSchemeController/HeaderSchemeController';
import ColorPreview from '../ColorPreview/ColorPreview';
import HeaderMainMenuButton from './Header-components/HeaderMainMenuButton/HeaderMainMenuButton';


const Header = ({colorScheme, updateColorScheme, selectColorPage, selectorVisibility, handleSelectorVisibility}) => {
    
    return (
        <div
            className='header'
            style={{
                backgroundColor: colorScheme.color1, color: colorScheme.color2}}
        >
            <ColorPreview colorScheme={colorScheme} className="header-element"/>
            <HeaderMainMenuButton
                colorScheme={colorScheme}
                selectorVisibility={selectorVisibility}
                handleSelectorVisibility={handleSelectorVisibility}
            />
            <HeaderSchemeController
                colorScheme={colorScheme}
                onClickFunc={updateColorScheme}
                selectColorPage={selectColorPage}
            />

            
        </div>
    )
}


export default Header

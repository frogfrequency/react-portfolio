import Button from '../Button/Button';
import './Header.css';
import HeaderSchemeController from './Header-components/HeaderSchemeController/HeaderSchemeController';


const Header = ({text, colorScheme, updateColorScheme,gearButtonColor,skipButtonColor,handleSkipHover,handleSkipUnhover,handleGearHover,handleGearUnhover}) => {

    return (
        <div
            className='header'
            style={{
                backgroundColor: colorScheme.color1, color: colorScheme.color2}}
        >

            <HeaderSchemeController colorScheme={colorScheme}
            onClickFunc={updateColorScheme}
            gearButtonColor={gearButtonColor}
            skipButtonColor={skipButtonColor}
            handleSkipHover={handleSkipHover}
            handleSkipUnhover={handleSkipUnhover}
            handleGearHover={handleGearHover}
            handleGearUnhover={handleGearUnhover}
            />

            
        </div>
    )
}


export default Header

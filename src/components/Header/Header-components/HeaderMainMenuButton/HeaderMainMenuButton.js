import { useState } from "react";
import { IoMenu } from "react-icons/io5";

import "./HeaderMainMenuButton.css"
import "../../Header.css"


const HeaderMainMenuBotton = ({ colorScheme, selectorVisibility, handleSelectorVisibility, textContent }) => {

    const [menuButtonIsHovered, changeMenuButtonIsHovered] = useState(false);

    const handleMenuButtonHover = () => {
        changeMenuButtonIsHovered(true);
        let visibilityCopy = [...selectorVisibility];
        visibilityCopy[0] = true;
        handleSelectorVisibility(visibilityCopy);
    };

    const handleMenuButtonUnhover = () => {
        changeMenuButtonIsHovered(false);
        let visibilityCopy = [...selectorVisibility];
        visibilityCopy[0] = false;
        handleSelectorVisibility(visibilityCopy);
    };

    return (

        <div
            className="main-menu pointer"
            style={{ backgroundColor: colorScheme.color1, color: menuButtonIsHovered ? colorScheme.color3 : colorScheme.color4 }}
            onMouseEnter={() => handleMenuButtonHover()}
            onMouseLeave={() => handleMenuButtonUnhover()}
        >
            {textContent.header.menu}
            <IoMenu className="main-menu-button" />
        </div>
        
    )
}

export default HeaderMainMenuBotton

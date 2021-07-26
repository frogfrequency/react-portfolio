import { useState } from "react";
import { IoMenu } from "react-icons/io5";

import "./HeaderMainMenuButton.css"
import "../../Header.css"

const HeaderMainMenuBotton = ({ colorScheme, selectorVisibility, handleSelectorVisibility }) => {


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
        <>
            {menuButtonIsHovered ? (
                    <div
                        className="header-element"
                        style={{ backgroundColor: colorScheme.color1, color: colorScheme.color3 }}
                        onMouseEnter={() => handleMenuButtonHover()}
                        onMouseLeave={() => handleMenuButtonUnhover()}
                    >
                        menu
                        <IoMenu className="main-menu-button"/>
                    </div>
            ) : (
                    <div
                        className="header-element"
                        style={{ backgroundColor: colorScheme.color1, color: colorScheme.color4 }}
                        onMouseEnter={() => handleMenuButtonHover()}
                        onMouseLeave={() => handleMenuButtonUnhover()}
                    >
                        menu
                        <IoMenu className="main-menu-button"/>
                    </div>
            )
            }
        </>

    )
}

export default HeaderMainMenuBotton

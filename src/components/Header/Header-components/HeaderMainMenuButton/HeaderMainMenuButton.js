import { useState } from "react";
import { IoMenu } from "react-icons/io5";

import "./HeaderMainMenuButton.css"
import "../../Header.css"

const HeaderMainMenuBotton = ({ colorScheme, onClickFunc, handleSelectorVisibility }) => {


    const [menuButtonIsHovered, changeMenuButtonIsHovered] = useState(false);
    const handleMenuButtonHover = () => { 
        changeMenuButtonIsHovered(true);
        handleSelectorVisibility(true);
    };
    const handleMenuButtonUnhover = () => {
        changeMenuButtonIsHovered(false);
        handleSelectorVisibility(false);
    };


    return (
        <>
            {menuButtonIsHovered ? (
                    <div
                        className="header-element"
                        style={{ backgroundColor: colorScheme.color1, color: colorScheme.color3 }}
                        onClick={() => handleSelectorVisibility(true)}
                        onMouseEnter={() => handleMenuButtonHover()}
                        onMouseLeave={() => handleMenuButtonUnhover()}
                    >
                        menu
                        <IoMenu className="main-menu-button" />
                    </div>
            ) : (
                    <div
                        className="header-element"
                        style={{ backgroundColor: colorScheme.color1, color: colorScheme.color4 }}
                        onClick={() => handleSelectorVisibility(true)}
                        onMouseEnter={() => handleMenuButtonHover()}
                        onMouseLeave={() => handleMenuButtonUnhover()}
                    >
                        menu
                        <IoMenu className="main-menu-button" />
                    </div>
            )
            }
        </>

    )
}

export default HeaderMainMenuBotton

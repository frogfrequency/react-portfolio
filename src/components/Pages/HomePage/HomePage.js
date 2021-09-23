import "./HomePage.css"
import { useState, useEffect } from 'react';

import {
    Link
} from "react-router-dom";

import { FadeIn, HomePageLogoEffect1, HomePageLogoEffect2, HomePageLogoEffect3, HomePageLogoEffect4, HomePageLogoEffect5,
    HomePageLogoEffect6, HomePageLogoEffect7, HomePageLogoEffect8, HomePageLogoEffect9, HomePageLogoEffect10, HomePageLogoLineEffect,
    HomePageTextEffect, HomePageLogoFadeIn, HeaderCoverFadeOut} from "../../../utility"


const HomePage = ({colorScheme}) => {

    const [headerIsCovered, setHeaderIsCovered] = useState(
        [true, true]
    );

    const uncoverHeader = () => {
        if(headerIsCovered[0] && headerIsCovered[1])
        setHeaderIsCovered([false, true]);
        setTimeout(() => {
            setHeaderIsCovered([false, false]);
        }, 900);
    }






    const [textVisibility, setTextVisibility] = useState(
        false
    );

    const showText = () => {
        setTextVisibility(true)
        console.log('i fire herererere')
    }

    useEffect(() => {
        setTimeout(showText, 2500)
    });



    return (
        

        
        // <FadeIn>
            <div>  
                {headerIsCovered[1] ? <HeaderCoverFadeOut  key={headerIsCovered[0]}><div id='header-cover' style={{backgroundColor: colorScheme.color1}}></div></HeaderCoverFadeOut> : ''}
                {headerIsCovered[0] ? <div id='header-cover' style={{backgroundColor: colorScheme.color1}}></div> : ''}
                <HomePageLogoFadeIn>
                <div
                    id='homepage-logo-container'
                    style={{backgroundColor:colorScheme.color2}}
                    onMouseEnter={() => uncoverHeader()}
                >
                    <HomePageLogoEffect1><div id="letter">H</div></HomePageLogoEffect1>
                    <HomePageLogoEffect2><div id="letter">e</div></HomePageLogoEffect2>
                    <HomePageLogoEffect3><div id="letter">l</div></HomePageLogoEffect3>
                    <HomePageLogoEffect4><div id="letter">l</div></HomePageLogoEffect4>
                    <HomePageLogoEffect5><div id="letter">o</div></HomePageLogoEffect5>

                    <HomePageLogoEffect5><div id="letter"> </div></HomePageLogoEffect5>
                    
                    <HomePageLogoEffect6><div id="letter">W</div></HomePageLogoEffect6>
                    <HomePageLogoEffect7><div id="letter">o</div></HomePageLogoEffect7>
                    <HomePageLogoEffect8><div id="letter">r</div></HomePageLogoEffect8>
                    <HomePageLogoEffect9><div id="letter">l</div></HomePageLogoEffect9>
                    <HomePageLogoEffect10><div id="letter">d</div></HomePageLogoEffect10>
                </div>
                </HomePageLogoFadeIn>
                    <HomePageLogoLineEffect><div id='line-one' className='line'  style={{backgroundColor:colorScheme.color4}}></div></HomePageLogoLineEffect>
                    <HomePageLogoLineEffect><div id='line-two' className='line'  style={{backgroundColor:colorScheme.color4}}></div></HomePageLogoLineEffect>
                {textVisibility ? 
                <HomePageTextEffect>
                <div id="home-page-content-container" onMouseEnter={() => uncoverHeader()}>
                    hi there Nostrud eiusmo eu enim non labore fugiat enim ipsum aute minim dolore tempor elit non. Ea ipsum exercitation dolor irure ut non. Proident aute deserunt et fugiat ullamco do enim exercitation commodo mollit exercitation. Aute eu ipsum ad qui deserunt do dolore sunt.
                    hi there Nostrud eiusmo eu enim non labore fugiat enim ipsum aute minim dolore tempor elit non. Ea ipsum exercitation dolor irure ut non. Proident aute deserunt et fugiat ullamco do enim exercitation commodo mollit exercitation. Aute eu ipsum ad qui deserunt do dolore sunt.
                    hi there Nostrud eiusmo eu enim non labore fugiat enim ipsum aute minim dolore tempor elit non. Ea ipsum exercitation dolor irure ut non. Proident aute deserunt et fugiat ullamco do enim exercitation commodo mollit exercitation. Aute eu ipsum ad qui deserunt do dolore sunt.
                </div>
                </HomePageTextEffect>
                 : ''}
                            
                    {/* <Link
                            className=''
                            style={
                                {
                                    textDecoration: 'none',
                                }
                            }
                            to="/projects"
                            // onMouseEnter={() => setHoverStatusGoBack(true)}
                            // onMouseLeave={() => setHoverStatusGoBack(false)}
                        >
                            go to projects here
                    </Link> */}
            </div>
        // </FadeIn>
    )
}

export default HomePage

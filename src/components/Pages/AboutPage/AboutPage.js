import { FadeIn, TitleEffectIn } from "../../../utility"

import PageTitle from "../PageTitle"

import "../../Pages/Page.css"
import "./AboutPage.css"


const AboutPage = ({ colorScheme, title, subHeader, textContent }) => {
    
    return (

        <FadeIn>

            <div className='page text'>

                <TitleEffectIn>
                    <PageTitle
                        colorScheme={colorScheme}
                        title={title}
                        subHeader={subHeader}
                    />
                </TitleEffectIn>

                <div className='about-text-container'>

                    <div className='about-subheader'>
                        {textContent.aboutPage.headers.purposeHeader}
                    </div>

                    <div className='about-text'>
                        {textContent.aboutPage.texts.purposeText}
                    </div>

                    <div className='about-subheader'>
                        {textContent.aboutPage.headers.bugsHeader}
                    </div>

                    <div className='about-text'>
                        {textContent.aboutPage.texts.bugsText}
                    </div>

                    {
                        // components used below ---------------------------------------------------
                    }

                    <div className='about-subheader'>
                        {textContent.aboutPage.headers.componentsHeader}
                    </div>

                    <div className='about-text'>
                        {textContent.aboutPage.texts.componentsText}
                        <br/>
                        <br/>
                        <li>react-image-gallery</li>
                        <li>react-icons</li>
                        <li>react-color</li>
                        <li>react-router-dom</li>
                        <li>react-animations</li>
                        <li>styled-components</li>
                    </div>

                    {/* <li>React Image Gallery (https://www.npmjs.com/package/react-image-gallery)</li>
                    <li>React Icons (https://www.npmjs.com/package/react-icons)</li>
                    <li>React Color (https://www.npmjs.com/package/react-color)</li>
                    <li>react-router-dom (https://www.npmjs.com/package/react-router-dom)</li>
                    <li>react-animations (https://www.npmjs.com/package/react-animations)</li>
                    <li>styled-components (https://www.npmjs.com/package/styled-components)</li> */}

                    <div className='about-subheader'>
                        {textContent.aboutPage.headers.mobileFriendlyHeader}
                    </div>

                    <div className='about-text'>
                        {textContent.aboutPage.texts.mobileFriendlyText}
                    </div>


                    <div className='about-subheader'>
                        {textContent.aboutPage.headers.contactHeader}
                    </div>

                    <div className='about-text'>
                        {textContent.aboutPage.texts.contactText}
                    </div>

                    <div
                        className='about-subheader'
                        style={
                            {
                                width: 'max-content',
                                margin: 'auto',
                                marginTop: '64px',
                                marginBottom: '48px',
                            }
                        }
                    >
                        {textContent.aboutPage.closingSentence}
                    </div>

                </div>

            </div>

        </FadeIn>
    )
}

export default AboutPage
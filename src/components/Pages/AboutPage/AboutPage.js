import "../../Pages/Page.css"
import "./AboutPage.css"
import PageTitle from "../PageTitle"

import { FadeIn, TitleEffectIn } from "../../../utility"


const AboutPage = ({ colorScheme, title, subHeader }) => {
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
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <div
                    className='about-subheader'
                    style={
                        {
                            width: 'max-content',
                            margin: 'auto'
                        }
                    }
                >
                    hoi hoih oihoi hoiho
                </div>

                {
                    // Purpose ---------------------------------------------------
                }

                <div
                    className='about-header'
                >
                    Purpose
                </div>

                <div
                    className='about-subheader'
                >
                    this page is for both of us
                </div>

                <div
                    className='about-text'
                >
                    The main purpose of this website is to enable you to quickly get an overview of my coding skills. It aims to save you
                    time. Instead of browsing through my github profile and cloning many repositories just to try the programms out, you 
                    can get an overview and even try the code out in no time. 
                    If I had simply wanted to create a website, I could have used providers like wix or squarespace which would
                    have saved me alot of time. But by creating it with react, I could learn and experiment alot. So this website is not only 
                    for you, it also served me by providing me with countless hours of practice. In some places it might seem that I have
                    "overdone" it and the same results could have been achieved with less and simpler code. Please bear in mind that it 
                    was important to me to try out as much as possible and the result therefore is not state of the art code.
                </div>




                {
                    // components used below ---------------------------------------------------
                }

                <div
                    className='about-header'
                >
                    external components & packages
                </div>

                <div
                    className='about-subheader'
                >
                    sometech
                </div>

                <div
                    className='about-text'
                >
                    explanainteon asdf asddf asdfassdlöfkja sdfas fdölaksjdf fassldfas dfasdf
                </div>


                <br />
                <br />

                {
                    // FAQ ---------------------------------------------------
                }

                <div
                    className='about-header'
                >
                    FAQ
                </div>

                <div
                    className='about-subheader'
                >
                    why is this page in english?
                </div>

                <div
                    className='about-text'
                >
                    because it is you know
                </div>



            </div>
        </FadeIn>
    )
}

export default AboutPage
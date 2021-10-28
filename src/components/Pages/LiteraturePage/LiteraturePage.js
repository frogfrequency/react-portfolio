// import "../../Pages/Page.css"
import LiteratureElement from "./LiteratureElement/LiteratureElement"
import PageTitle from "../PageTitle"
import { FadeIn, TitleEffectIn } from "../../../utility"

const LiteraturePage = ({ colorScheme, title, subHeader, textContent }) => {
    return (

        <FadeIn>
            <div className='page'>
                <TitleEffectIn>
                    <PageTitle
                        colorScheme={colorScheme}
                        title={title}
                        subHeader={subHeader}
                    />
                </TitleEffectIn>
                
                <div id='literature-main-text'>
                {textContent.literaturePage.mainText}
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <br/>
                <div className='endLine' style={{backgroundColor: colorScheme.color2}}></div>
                
                {
                    // maybe map through the elements? ( need to alternate left and right alignment or maybe use key or id and odd / even numbers?)
                }
                <LiteratureElement
                    textContent={textContent}
                    colorScheme={colorScheme}
                    literatureElementTitle={textContent.literaturePage.handbuchFuerSoftwareentwickler.title}
                    literatureElementSubheader={textContent.literaturePage.handbuchFuerSoftwareentwickler.subheader}
                    literatureElementText={textContent.literaturePage.handbuchFuerSoftwareentwickler.text}
                    imagePositionIsLeft={false}
                    imageKey={textContent.literaturePage.handbuchFuerSoftwareentwickler.imageKey}
                />
                <div className='endLine' style={{backgroundColor: colorScheme.color2}}></div>


                <LiteratureElement
                    textContent={textContent}
                    colorScheme={colorScheme}
                    literatureElementTitle={textContent.literaturePage.algorithmenKompaktUndVerstaendlich.title}
                    literatureElementSubheader={textContent.literaturePage.algorithmenKompaktUndVerstaendlich.subheader}
                    literatureElementText={textContent.literaturePage.algorithmenKompaktUndVerstaendlich.text}
                    imagePositionIsLeft={true}
                    imageKey={textContent.literaturePage.algorithmenKompaktUndVerstaendlich.imageKey}
                />

                <div className='endLine' style={{backgroundColor: colorScheme.color2}}></div>


                
            </div>

        </FadeIn>

    )
}

export default LiteraturePage



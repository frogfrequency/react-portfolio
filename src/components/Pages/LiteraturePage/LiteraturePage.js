// import "../../Pages/Page.css"
import LiteratureElement from "./LiteratureElement/LiteratureElement"
import PageTitle from "../PageTitle"
import { FadeIn, TitleEffectIn } from "../../../utility"

const LiteraturePage = ({ colorScheme, title, subHeader, textContent, literatureElements }) => {

    let textProcessed = textContent.literaturePage.mainText;
    textProcessed = textProcessed.split('\\n').map((str, idx) => <p key={idx} style={{ textAlignLast: 'center' }}>{str}</p>);
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
                    {textProcessed}
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />




                {literatureElements.map((element, index) => (
                    <LiteratureElement
                        colorScheme={colorScheme}
                        key={element.key}
                        element={element}
                        index={index}
                        textContent={textContent}
                    />
                ))}

            </div>

        </FadeIn>

    )
}

export default LiteraturePage



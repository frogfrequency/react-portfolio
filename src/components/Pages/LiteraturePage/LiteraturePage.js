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
                hoi du Voluptate ullamco adipisicing minim est tempor consectetur duis irure deserunt commodo occaecat qui pariatur. Sunt quis proident cupidatat eiusmod exercitation ex dolor laboris nisi et culpa consectetur. Quis consequat veniam aliquip ullamco quis incididunt laboris ex qui nulla cillum.

                Proident do eiusmod ullamco aliqua ex exercitation id. Ut quis commodo voluptate proident. Magna consequat commodo dolore dolor aliqua deserunt. Nostrud do qui cupidatat fugiat deserunt elit dolor.

                Adipisicing fugiat cupidatat nulla adipisicing do adipisicing mollit officia consectetur. Duis ea fugiat officia amet labore duis ullamco ea ipsum. Exercitation Lorem anim amet dolore est anim cupidatat eu pariatur commodo Lorem proident. Sunt eu sunt velit consectetur minim velit pariatur ut sunt. Culpa esse officia dolor ex ipsum quis minim adipisicing qui in velit eiusmod dolore. Quis consequat commodo minim voluptate aliquip ex in id consectetur et.

                Sunt irure duis ullamco cupidatat commodo nisi et. Voluptate ad id consequat adipisicing. Pariatur do ea commodo ipsum commodo adipisicing amet ea incididunt irure Lorem amet. Pariatur incididunt deserunt labore adipisicing laboris qui Lorem nostrud. Officia dolor laborum cillum proident esse qui.

                Dolor irure cillum aute excepteur dolore in velit officia minim. Cillum amet adipisicing aute aliquip commodo reprehenderit. Ex magna voluptate aliquip eiusmod voluptate magna velit nostrud do aliqua reprehenderit sit. Duis nostrud laborum amet eu consectetur id. Minim nulla id veniam duis magna est aliqua.
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <br/>
                <div className='endLine' style={{backgroundColor: colorScheme.color2}}></div>
                <LiteratureElement
                    literatureElementTitle={textContent.literaturePage.handbuchFuerSoftwareentwickler.title}
                    literatureElementSubheader={textContent.literaturePage.handbuchFuerSoftwareentwickler.subheader}
                    literatureElementText={textContent.literaturePage.handbuchFuerSoftwareentwickler.text}
                    imagePositionIsLeft={true}
                    imageKey={textContent.literaturePage.handbuchFuerSoftwareentwickler.imageKey}
                />
                <div className='endLine' style={{backgroundColor: colorScheme.color2}}></div>


                <LiteratureElement
                    literatureElementTitle={textContent.literaturePage.algorithmenKompaktUndVerstaendlich.title}
                    literatureElementSubheader={textContent.literaturePage.algorithmenKompaktUndVerstaendlich.subheader}
                    literatureElementText={textContent.literaturePage.algorithmenKompaktUndVerstaendlich.text}
                    imagePositionIsLeft={false}
                    imageKey={textContent.literaturePage.algorithmenKompaktUndVerstaendlich.imageKey}
                />

                <div className='endLine' style={{backgroundColor: colorScheme.color2}}></div>


                
            </div>

        </FadeIn>

    )
}

export default LiteraturePage



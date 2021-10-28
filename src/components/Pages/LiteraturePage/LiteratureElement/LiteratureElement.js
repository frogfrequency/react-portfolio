import "../LiteraturePage.css"
import { pictureCollection } from "../../../../pictureHandler"
import Progressbar from "./Progressbar/Progressbar"

const LiteratureElement = ({ colorScheme, textContent, literatureElementTitle, literatureElementSubheader, literatureElementText, imagePositionIsLeft, imageKey }) => {
    return (
        
            
            <div className='literature-element'>
                {!imagePositionIsLeft ? 
                <div
                    className='literature-element-info-container'
                    style={
                        {
                            marginRight: '40px',
                        }
                    }
                >
                    <div>
                        <div className='literature-element-header'>{literatureElementTitle}</div>
                        <div className='literature-element-subheader'>{literatureElementSubheader}</div>
                        <div className='literature-element-infotext'>{literatureElementText}</div>
                    </div>
                    <Progressbar
                        colorScheme={colorScheme}
                        pages={textContent.literaturePage.handbuchFuerSoftwareentwickler.pages}
                        currentPage={textContent.literaturePage.handbuchFuerSoftwareentwickler.currentPage}
                    />
                </div> : ''}
                
                

                <div
                    className='book-cover'
                    style={
                        {
                            backgroundImage: `url(${pictureCollection[imageKey]})`, 
                        }
                    }
                />

                

                {imagePositionIsLeft ? 
                <div
                    className='literature-element-info-container'
                    style={
                        {
                            marginLeft: '40px',
                        }
                    }
                >
                    <div>
                        <div className='literature-element-header'>{literatureElementTitle}</div>
                        <div className='literature-element-subheader'>{literatureElementSubheader}</div>
                        <div className='literature-element-infotext'>{literatureElementText}</div>
                    </div>
                    <Progressbar
                        colorScheme={colorScheme}
                        pages={textContent.literaturePage.algorithmenKompaktUndVerstaendlich.pages}
                        currentPage={textContent.literaturePage.algorithmenKompaktUndVerstaendlich.currentPage}
                        
                    />
                </div> : ''}

                    

            </div>

    )
}

export default LiteratureElement


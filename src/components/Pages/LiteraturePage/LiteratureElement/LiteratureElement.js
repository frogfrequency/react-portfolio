import "../LiteraturePage.css"
import { pictureCollection } from "../../../../pictureHandler"

const LiteratureElement = ({ textContent, literatureElementTitle, literatureElementSubheader, literatureElementText, imagePositionIsLeft, imageKey }) => {
    return (
        
            
            <div className='literature-element'>
                {imagePositionIsLeft ? <div className='literature-element-container'>
                    <h1>{literatureElementTitle}</h1>
                    <h3>{literatureElementSubheader}</h3>
                    <div>{literatureElementText}</div>
                </div> : ''}
                
                

                <div
                    className='literature-element-container'
                    style={
                        {
                            width: '400px',
                            height: '300px',
                            backgroundImage: `url(${pictureCollection[imageKey]})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }
                    }
                />

                {!imagePositionIsLeft ? <div className='literature-element-container'>
                    <h1>{literatureElementTitle}</h1>
                    <h3>{literatureElementSubheader}</h3>
                    <div>{literatureElementText}</div>
                </div> : ''}

            </div>

    )
}

export default LiteratureElement


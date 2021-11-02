import "../LiteraturePage.css"
import { pictureCollection } from "../../../../pictureHandler"
import Progressbar from "./Progressbar/Progressbar"

const LiteratureElement = ( { colorScheme, element, index, textContent} ) => {

    
    let textProcessed = element.text;
    textProcessed = textProcessed.split('\\n').map(str => <p>{str}</p>);
    console.log(textProcessed);

    return ( 
        <>
            {index !=0 ? <div className='endLine' style={{backgroundColor: colorScheme.color2}}></div> : ''}
                <div className='literature-element'>
                    {index%2 === 0  ? 
                        <div
                        className='literature-element-info-container'
                        style={
                            {
                                marginRight: '40px',
                            }
                        }
                        >
                            <div>
                                <div className='literature-element-header'>{element.title}</div>
                                <div className='literature-element-subheader'>{element.subheader}</div>
                                <div className='literature-element-infotext'>{textProcessed}</div>
                            </div>
                            <Progressbar
                                colorScheme={colorScheme}
                                pages={element.pages}
                                currentPage={element.currentPage}
                                textContent={textContent}
                            />
                        </div> : ''
                    }
                    
                    

                    <div
                        className='book-cover'
                        style={
                            {
                                backgroundImage: `url(${pictureCollection[element.imageKey]})`, 
                            }
                        }
                    />

                    

                    {index%2 === 1 ? 
                    <div
                    className='literature-element-info-container'
                    style={
                        {
                            marginLeft: '40px',
                        }
                    }
                    >
                        <div>
                                <div className='literature-element-header'>{element.title}</div>
                                <div className='literature-element-subheader'>{element.subheader}</div>
                                <div className='literature-element-infotext'>{element.text}</div>
                            </div>
                            <Progressbar
                                colorScheme={colorScheme}
                                pages={element.pages}
                                currentPage={element.currentPage}
                                textContent={textContent}
                            />
                    </div> : ''
                    }

                        
                    
                </div>
        </>
    )
}

export default LiteratureElement


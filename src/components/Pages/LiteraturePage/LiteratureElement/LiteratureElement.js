import { useState } from 'react';
import "../LiteraturePage.css"
import { pictureCollection } from "../../../../pictureHandler"
import Progressbar from "./Progressbar/Progressbar"
import { FiExternalLink } from "react-icons/fi";

const LiteratureElement = ({ colorScheme, element, index, textContent }) => {

    let textProcessed = element.text;
    textProcessed = textProcessed.split('\\n').map((str, idx) => <p key={idx}>{str}</p>);


    const [moreInfoHoverStatus, setMoreInfoHoverStatus] = useState(false)



    return (
        <>
            {index === 0 ? <div className='endLine' style={{ backgroundColor: colorScheme.color2 }}></div> : ''}

            <div className='literature-element'>

                {index % 2 === 1 ?
                    <div
                        className='book-cover'
                        style={
                            {
                                backgroundImage: `url(${pictureCollection[element.imageKey]})`,
                            }
                        }
                    />
                : '' }



                
                    <div
                        className='literature-element-info-container'
                        style={
                            {
                                margin: index%2 === 0 ? '0px 40px 0px 0px' : '0px 0px 0px 40px',
                            }
                        }
                    >
                        <div>
                            <div className='literature-element-header'>{element.title}</div>
                            <div className='literature-element-subheader'>{element.subheader}</div>




                            <a
                                href={element.infoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='literature-detail-nav-button'
                                style={
                                    {
                                        color: moreInfoHoverStatus ? colorScheme.color3 : colorScheme.color4,
                                        backgroundColor: colorScheme.color2,
                                    }
                                }
                                onMouseEnter={() => setMoreInfoHoverStatus(true)}
                                onMouseLeave={() => setMoreInfoHoverStatus(false)}
                            >
                                <FiExternalLink className='icon' /> {textContent.literaturePage.visit} {element.infoSourceName}

                            </a>



                            <div className='literature-element-infotext'>{textProcessed}</div>
                        </div>
                        <Progressbar
                            colorScheme={colorScheme}
                            pages={element.pages}
                            currentPage={element.currentPage}
                            textContent={textContent}
                        />
                    </div>


                {index % 2 === 0 ?
                    <div
                        className='book-cover'
                        style={
                            {
                                backgroundImage: `url(${pictureCollection[element.imageKey]})`,
                            }
                        }
                    />
                : '' }    
            </div>

            <div className='endLine' style={{ backgroundColor: colorScheme.color2 }}></div>
        </>
    )
}

export default LiteratureElement


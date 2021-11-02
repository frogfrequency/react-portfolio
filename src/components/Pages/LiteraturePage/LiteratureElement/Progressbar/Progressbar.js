import "../../LiteraturePage.css"

const Progressbar = ( {colorScheme, pages, currentPage, textContent} ) => {
    
    function givePercentage(allPages, readPages) {
        return Math.round(readPages / allPages * 100)
    }
    
    let readingProgressInPercent = givePercentage(pages, currentPage);

    return (
        <div className='progressbar'>
            
            <div
                className='progressbar-full'
                style={
                    {
                        backgroundColor: colorScheme.color2, 
                        
                    }
                }
            >
                
                <div
                    className='progressbar-progress'
                    style={
                        {
                            width: `${readingProgressInPercent}%`,
                            backgroundColor: colorScheme.color3,
                            color: colorScheme.color1,
                        }
                    }    
                >
                    <div className='percentage-text'>{textContent.literaturePage.page}: {currentPage}/{pages} ({readingProgressInPercent}%) &nbsp; </div>
                </div>
            </div>
        </div>
    )
}

export default Progressbar

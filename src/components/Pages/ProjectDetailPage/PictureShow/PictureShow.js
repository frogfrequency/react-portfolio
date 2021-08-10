import ImageGallery from 'react-image-gallery';
import "../../ProjectsPage/ProjectsPage.css"




// const images = [

//     {
//         original: process.env.PUBLIC_URL + '/pictures/chess/slideshow/chess_1.png',
//         thumbnail: process.env.PUBLIC_URL + '/pictures/chess/slideshow/chess_1.png',
//     },
//     {
//         original: process.env.PUBLIC_URL + '/pictures/chess/slideshow/chess_2.png',
//         thumbnail: process.env.PUBLIC_URL + '/pictures/chess/slideshow/chess_2.png',
//     },
//     {
//         original: process.env.PUBLIC_URL + '/pictures/chess/slideshow/chess_3.png',
//         thumbnail: process.env.PUBLIC_URL + '/pictures/chess/slideshow/chess_3.png',
//     },
// ];


function giveImagesArr(key, pictureAmount) {
    let outputArr = [];
    for (let i=0; i<pictureAmount; i++) {
        outputArr.push({ original: process.env.PUBLIC_URL + `/pictures/${key}/slideshow/${key}_${i+1}.png`, thumbnail: process.env.PUBLIC_URL + `/pictures/${key}/slideshow/${key}_${i+1}.png`, })
    }
    return outputArr
}

const PictureShow = ({ project }) => {
    
    let images = giveImagesArr(project.picKey, project.picCount);


    return (
        <div
            id='picture-show'
        >
            <div>{project.picCount}{project.picKey}</div>
            <ImageGallery items={images} />
        </div>
    )
}

export default PictureShow

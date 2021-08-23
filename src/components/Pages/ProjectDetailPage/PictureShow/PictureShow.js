import ImageGallery from 'react-image-gallery';
import "../../ProjectsPage/ProjectsPage.css"
import { pictureCollection } from "../../../../pictureHandler.js";




// const images = [
//     {
//       original: 'https://picsum.photos/id/1018/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//         original: pictureCollection['chess_2'],
//         thumbnail: pictureCollection['chess_2'],
//     },
//     {
//       original: 'https://picsum.photos/id/1019/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//   ];


function giveImagesArr(key, pictureAmount) {
    let outputArr = [];
    for (let i=0; i<pictureAmount; i++) {
        outputArr.push({ original: pictureCollection[`${key}_${i+1}`], thumbnail: pictureCollection[`${key}_${i+1}`], })
    }
    return outputArr
}

const PictureShow = ({ project }) => {
    
    let images = giveImagesArr(project.picKey, project.picCount);

    return (
        <div
            id='picture-show'
        >
            <ImageGallery items={images} />

        </div>
    )
}

export default PictureShow

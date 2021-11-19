import ImageGallery from 'react-image-gallery';

import { pictureCollection } from "../../../../pictureHandler.js";

import "../../ProjectsPage/ProjectsPage.css"


function giveImagesArr(key, pictureAmount) {
    let outputArr = [];
    for (let i = 0; i < pictureAmount; i++) {
        outputArr.push(
            {
                original: pictureCollection[`${key}_${i + 1}`],
                thumbnail: pictureCollection[`${key}_${i + 1}`],
            }
        )
    }
    return outputArr
}

const PictureShow = ({ project }) => {

    let images = giveImagesArr(project.picKey, project.picCount);

    
    return (
        <div
            id='picture-show'
        >
            <ImageGallery
                items={images}
            />
        </div>
    )
}

export default PictureShow

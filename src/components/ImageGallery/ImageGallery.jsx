import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { List } from "components/ImageGallery/ImageGallery.styled.jsx";

export const ImageGallery = ({images, largePicture}) => {
    return (
        <List>
            <ImageGalleryItem images={images} getBigImage={largePicture}/>
        </List>
    )
}
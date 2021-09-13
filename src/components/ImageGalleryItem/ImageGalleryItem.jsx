import { Item, Image } from "components/ImageGalleryItem/ImageGalleryItem.styled";

export const ImageGalleryItem = ({ images, getBigImage }) => {
    return images.map((image) => {
            return (
                <Item key={image.id}>
                    <Image src={image.webformatURL} alt={image.tags[0]} onClick={()=>getBigImage(image.largeImageURL) }/>
                </Item>)
        })
}
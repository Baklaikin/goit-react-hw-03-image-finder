import { Item, Image } from "components/ImageGalleryItem/ImageGalleryItem.styled";

export const ImageGalleryItem = ({ images }) => {
   return images.map(({ id, webformatURL, tags }) => {
            return (
                <Item key={id}>
                    <Image src={webformatURL} alt={tags[0]} />
                </Item>)
        })
}
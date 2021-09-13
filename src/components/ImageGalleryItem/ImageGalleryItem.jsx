import {
  Item,
  Image,
} from "components/ImageGalleryItem/ImageGalleryItem.styled";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ images, getBigImage }) => {
  return images.map(({ id, webformatURL, tags, largeImageURL }) => {
    return (
      <Item key={id}>
        <Image
          src={webformatURL}
          alt={tags[0]}
          onClick={() => getBigImage(largeImageURL)}
        />
      </Item>
    );
  });
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
};

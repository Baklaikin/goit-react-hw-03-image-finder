import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { List } from "components/ImageGallery/ImageGallery.styled.jsx";
import PropTypes from "prop-types";

export const ImageGallery = ({ images, largePicture }) => {
  return (
    <List>
      <ImageGalleryItem images={images} getBigImage={largePicture} />
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

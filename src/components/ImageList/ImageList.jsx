
export const ImageList = ({images}) => {
    return (
        <ul className="ImageGallery">
            {images.map(({id, webformatURL, tags}) => {
                return (
                    <li key={id} className="ImageGalleryItem">
                        <img src={webformatURL} alt={tags[0]} className="ImageGalleryItem-image"/>
                    </li>
                )
            })}
        </ul>
    )
}
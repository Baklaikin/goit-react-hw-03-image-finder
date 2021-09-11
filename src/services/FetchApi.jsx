import axios from "axios";

export const FetchCollection = async({ pictureName, page }) => {
   const key = "22628996-cf4023f9c883b96dd8e407c0b";
    const response = await axios.get(`https://pixabay.com/api/?key=${key}&q=${pictureName}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`);
    console.log(response.data)
    return response.data.hits; 
}
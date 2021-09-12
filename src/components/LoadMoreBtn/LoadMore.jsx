import { LoadMoreBtn } from "components/LoadMoreBtn/LoadMore.styled";

export const LoadMore = ({ onAction }) => {
    return <LoadMoreBtn type="button" onClick={()=>onAction() }>Load more</LoadMoreBtn>
}
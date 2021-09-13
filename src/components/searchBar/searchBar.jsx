import { toast } from "react-toastify";
import {
  Header,
  SearchButton,
  Span,
  Input,
  Form,
} from "components/searchBar/searchBar.styled";

export const SearchBar = ({ onSubmit }) => {
  const name = (event) => {
    event.preventDefault();
    const word = event.target.searchForm.value;
    if (word === "") {
      toast.warn("Введите слово");
      return;
    }
    onSubmit(word);
  };
  return (
    <Header>
      <Form onSubmit={name}>
        <SearchButton type="submit">
          <Span></Span>
        </SearchButton>

        <Input
          name="searchForm"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};

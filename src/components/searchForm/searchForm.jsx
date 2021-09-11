import { BsSearch } from "react-icons/bs";
import { toast } from "react-toastify";

export const SearchForm = ({ onSubmit }) => {
    const name = (event) => {
        event.preventDefault();
        const word = event.target.searchForm.value;
        if (word === '') {
            toast.warn('Введите слово')
            return;
        }
        onSubmit(word);
    };
    return (
        <header className="Searchbar">
           <form className="SearchForm" onSubmit={name}>
              <button type="submit" className="SearchForm-button">
                 <span className="SearchForm-button-label"><BsSearch/></span>
              </button>

              <input
                 className="SearchFormInput"
                 name="searchForm"
                 type="text"
                 autoComplete="off"
                 autoFocus
                 placeholder="Search images and photos"/>
         </form>
        </header>
    )
    }
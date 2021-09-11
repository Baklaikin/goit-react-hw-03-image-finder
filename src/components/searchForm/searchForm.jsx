
export const SearchForm = ({ handleInput }) => {
    const name = (event) => {
        event.preventDefault();
        handleInput(event.target.searchInput.value);
    };
    return (
        <form onSubmit={name}>
            <button type="submit">send</button>
            <input type="text" name="searchInput"/>
            </form>
        )
    }
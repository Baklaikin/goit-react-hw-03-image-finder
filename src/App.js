import React, { Component } from "react";
import { SearchBar } from "components/searchBar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { LoadMore } from "components/LoadMoreBtn/LoadMore";
import "./App.css";
import { FetchCollection } from "./services/FetchApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "App.styled";

class App extends Component {
  state = {
    pictureName: null,
    pictures: [],
    largeImage: null,
    status: "idle",
    page: 1,
  };

  handleInput = (searchWord) => {
    this.setState({ pictureName: searchWord });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { pictureName, page } = this.state;
    const searchWordIsNew = pictureName !== prevState.pictureName;
    const pageIsNew = page !== prevState.page;
    const arrayIsNotEmpty = this.state.pictures.length === 0;

    if (searchWordIsNew || pageIsNew || arrayIsNotEmpty) {
      const pictures = await FetchCollection({ pictureName, page });
      this.setState((prevState) => {
        let newArr = [];
        newArr = [...prevState.pictures, ...pictures];
        return { pictures: newArr };
      });
    }
    this.scrollSmoth();
  }

  scrollSmoth = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  onLoadMoreClick = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    console.log(this.state.page);
  };

  render() {
    const showLoadMoreButton = this.state.pictures.length > 0;
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

    return (
      <Container>
        <SearchBar onSubmit={this.handleInput} />
        <ImageGallery images={this.state.pictures} />
        {showLoadMoreButton && <LoadMore onAction={this.onLoadMoreClick} />}
        <ToastContainer />
      </Container>
    );
  }
}

export default App;

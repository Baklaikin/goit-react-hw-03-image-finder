import React, { Component } from "react";
import { SearchBar } from "components/searchBar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { LoadMore } from "components/LoadMoreBtn/LoadMore";
import { Modal } from "components/Modal/Modal";
import { FetchCollection } from "./services/FetchApi";
import { ToastContainer } from "react-toastify";
import { Container } from "App.styled";
import { LoaderSpinner } from "components/Loader/Loader";
import PropTypes from "prop-types";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.styled";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    pictureName: null,
    pictures: [],
    largeImage: null,
    status: "idle",
    page: 1,
    openModal: false,
  };

  handleInput = (searchWord) => {
    this.setState({ pictureName: searchWord });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { pictureName, page } = this.state;
    const searchWordIsNew = pictureName !== prevState.pictureName;
    const pageIsNew = page !== prevState.page;

    if (searchWordIsNew) {
      this.setState({ status: "pending" });
      try {
        this.setState({ pictures: [], page: 1 });
        const pictures = await FetchCollection({ pictureName, page });
        this.setState({ pictures });
      } catch (error) {
        console.log(error.message);
      }
      this.setState({ status: "resolved" });
      return;
    }

    if (searchWordIsNew || pageIsNew) {
      this.setState({ status: "pending" });
      try {
        const pictures = await FetchCollection({ pictureName, page });
        this.setState((prevState) => {
          let newArr = [];
          newArr = [...prevState.pictures, ...pictures];
          return { pictures: newArr };
        });
      } catch (error) {
        console.log(error.message);
      }
      this.setState({ status: "resolved" });
      this.scrollSmoth();
      return;
    }

    window.addEventListener("keydown", this.keyDownHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyDownHandler);
  }

  scrollSmoth = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  toggleModal = (e) => {
    this.setState({ openModal: !this.state.openModal });
  };

  onLoadMoreClick = () =>
    this.setState((prevState) => ({ page: prevState.page + 1 }));

  bigPictureHandler = (image) => {
    this.setState({ largeImage: image });
    this.toggleModal();
  };

  keyDownHandler = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    this.toggleModal();
  };

  render() {
    const showLoadMoreButton = this.state.pictures.length > 0;
    const showModal = this.state.openModal;
    const showLoader = this.state.status === "pending";

    return (
      <Container>
        <SearchBar onSubmit={this.handleInput} />
        {showLoader && <LoaderSpinner />}
        <ImageGallery
          images={this.state.pictures}
          largePicture={this.bigPictureHandler}
        />
        {showLoadMoreButton && <LoadMore onAction={this.onLoadMoreClick} />}
        <ToastContainer />
        {showModal && (
          <Modal picture={this.state.largeImage} onClick={this.toggleModal} />
        )}
      </Container>
    );
  }
}

App.propTypes = {
  pictureName: PropTypes.string,
  pictures: PropTypes.array,
  largeImage: PropTypes.string,
  status: PropTypes.string,
  page: PropTypes.number,
  openModal: PropTypes.bool,
};

export default App;

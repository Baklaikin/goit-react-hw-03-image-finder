import React, { Component } from "react";
import { SearchForm } from "components/searchForm/";
import { ImageList } from "components/ImageList/ImageList";
import { LoadMore } from "components/LoadMoreBtn/LoadMore";
import "./App.css";
import { FetchCollection } from "./services/FetchApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    if (pictureName !== prevState.pictureName || page !== prevState.page) {
      const pictures = await FetchCollection({ pictureName, page });
      this.setState({ pictures, page });
    }
  }

  onLoadMoreClick = () => {
    this.setState((prevState) => prevState.page + 2);
    console.log(this.state.page);
  };

  render() {
    return (
      <div className="App">
        <SearchForm onSubmit={this.handleInput} />
        <ImageList images={this.state.pictures} />
        <LoadMore onAction={this.onLoadMoreClick} />
        <ToastContainer />
      </div>
    );
  }
}

export default App;

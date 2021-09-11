import React, { Component } from "react";
import { SearchForm } from "components/searchForm/";
import "./App.css";
// import axios from "axios";
import { FetchCollection } from "./services/FetchApi";

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
    if (pictureName !== prevState.pictureName) {
      const pictures = await FetchCollection({ pictureName, page });
      this.setState({ pictures });
    }
  }

  render() {
    return (
      <div className="App">
        <SearchForm handleInput={this.handleInput} />
      </div>
    );
  }
}

export default App;

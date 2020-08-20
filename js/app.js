class Form extends React.Component {
  state = {
    searchUrl: '',
    searchWord: ''
  }

  ///////
  //URL Input
  //////
  getUrlInput = (event) => {
    this.setState(
      {searchUrl: event.target.value}
    )
    // console.log(this.state.searchUrl);
  }

  /////////////////////
  //Word or phrase input
  ///////////////////
  getWordInput = () => {
    this.setState(
      {searchWord: event.target.value}
    )
    // console.log(this.state.searchWord);
  }

  ///////
  //Search
  ///////

  search = (event) => {
    event.preventDefault();
    console.log(`Searching for ${this.state.searchWord} at the url ${this.state.searchUrl}`);
  }


  render = () => {
    return (
      <div className="search-form">
        <form onSubmit={this.search}>
          <label htmlFor="url">Enter a website URL</label>
          <input type="text" id="url" onKeyUp={this.getUrlInput}></input>
          <label htmlFor="phrase">Enter a word or phrase to scan for</label>
          <input type="text" id="phrase" onKeyUp={this.getWordInput}></input>
          <p>Captchas here</p>
          <input type="submit" value="Scan Website Now"></input>
        </form>
      </div>
    )
  }
}

class Results extends React.Component {
  render = () => {
    return (
      <div className="results">
        <p>Results will show here.</p>
      </div>
    )
  }
}

class App extends React.Component {
  render = () => {
    return (
      <div className="container">
        <Form></Form>
        <Results></Results>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)

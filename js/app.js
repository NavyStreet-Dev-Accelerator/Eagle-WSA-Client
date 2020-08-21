class Form extends React.Component {

  render = () => {
    return (
      <div className="search-form">
        <form onSubmit={this.props.search}>
          <label htmlFor="url">Enter a website URL</label>
          <input type="text" id="url" onKeyUp={this.props.getUrlInput}></input>
          <label htmlFor="phrase">Enter a word or phrase to scan for</label>
          <input type="text" id="phrase" onKeyUp={this.props.getWordInput}></input>
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
        <p>{this.props.results}</p>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    searchUrl: '',
    searchWord: '',
    results: ''
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
    this.setState(
      {results: `Searching for ${this.state.searchWord} at the url ${this.state.searchUrl}`}
    )
  }

  render = () => {
    return (
      <div className="container">
        <Form search={this.search} getWordInput={this.getWordInput}
        getUrlInput={this.getUrlInput}></Form>
        <Results results={this.state.results}></Results>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)

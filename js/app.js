class Form extends React.Component {

  render = () => {
    return (
      <div className="search-form">
        <form onSubmit={this.props.search}>
          <label htmlFor="url">Enter a website URL</label>
          <input type="text" id="url" onKeyUp={this.props.getUrlInput}></input>
          <label htmlFor="phrase">Enter a word or phrase to scan for</label>
          <input type="text" id="phrase" onKeyUp={this.props.getWordInput}></input>
          <div className="g-recaptcha" data-sitekey="6Ld7-MEZAAAAAA_UuOFPKll6Qs8yWYmzd8d34_0p" data-callback="verifyCaptcha"></div>
          <div id="g-recaptcha-error"></div>
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


//URL Input
  setUrlInput = (event) => {
    this.setState(
      {searchUrl: event.target.value}
    )
    // console.log(this.state.searchUrl);
  }


//Word or phrase input
  setWordInput = () => {
    this.setState(
      {searchWord: event.target.value}
    )
    // console.log(this.state.searchWord);
  }


//Search
  search = (event) => {
    event.preventDefault();
    const response = grecaptcha.getResponse();
    if(response.length === 0) {
      document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">Please confirm you are not a robot.</span>';

      return false
    } else {
      document.getElementById('g-recaptcha-error').innerHTML = '';
    }
    this.setState(
      {results: `Searching for the word ${this.state.searchWord} at the url ${this.state.searchUrl}`}
    )
  }

  render = () => {
    return (
      <div className="container">
        <Form search={this.search} getWordInput={this.setWordInput}
        getUrlInput={this.setUrlInput}></Form>
        <Results results={this.state.results}></Results>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)

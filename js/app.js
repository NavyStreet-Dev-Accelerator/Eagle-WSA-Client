class Form extends React.Component {

  render = () => {
    return (
      <div className="search-form">
        <form onSubmit={this.props.onSearch}>
          <label htmlFor="url">Enter a website URL</label>
          <input type="text" id="url" onKeyUp={this.props.onUrlInput}></input>
          <label htmlFor="phrase">Enter a word or phrase to scan for</label>
          <input type="text" id="phrase" onKeyUp={this.props.onWordInput}></input>
          <div className="g-recaptcha" data-sitekey="6Ld7-MEZAAAAAA_UuOFPKll6Qs8yWYmzd8d34_0p" data-callback="verifyCaptcha"></div>
          <div>
          {
            this.props.onCaptchaError ?
            <p className="captcha-error">Please confirm you are not a robot.</p> :
            ""
          }
          </div>
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
    results: '',
    showCaptchaError: false
  }


//URL Input
  handleUrlInput = (event) => {
    this.setState(
      {searchUrl: event.target.value}
    )
    // console.log(this.state.searchUrl);
  }


//Word or phrase input
  handleWordInput = () => {
    this.setState(
      {searchWord: event.target.value}
    )
    // console.log(this.state.searchWord);
  }


//Search
  handleSearch = (event) => {
    event.preventDefault();
    const response = grecaptcha.getResponse();
    if(response.length === 0) {
      this.setState(
        {showCaptchaError: true}
      )
    } else {
      this.setState(
        {results: `Searching for the word ${this.state.searchWord} at the url ${this.state.searchUrl}`,
        showCaptchaError: false
        }
      )
    }
  }

  render = () => {
    return (
      <div className="container">
        <Form onSearch={this.handleSearch} onWordInput={this.handleWordInput}
        onUrlInput={this.handleUrlInput}
        onCaptchaError={this.state.showCaptchaError}></Form>
        <Results results={this.state.results}></Results>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)

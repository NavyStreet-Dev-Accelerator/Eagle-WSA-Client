class Form extends React.Component {

  render = () => {
    return (
      <div className="search-form">
        <form onSubmit={this.props.onSearch}>
          <label htmlFor="url">Enter a website URL</label>
          <input type="url" id="url" onKeyUp={this.props.onUrlInput}></input>
          <label htmlFor="phrase">Enter a word or phrase to scan for</label>
          <input type="text" id="phrase" onKeyUp={this.props.onWordInput}></input>
          <div className="g-recaptcha" data-sitekey="6LcLRsYZAAAAAJvEgOoZd7NXeSprd8iM1jgND4eW" data-callback="verifyCaptcha"></div>
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
      {
        this.props.wordCount ?
        <p>Found {this.props.searchWord} {this.props.wordCount} times.</p> :
        <p>Results will show here.</p>
      }

      </div>
    )
  }
}

class App extends React.Component {
  state = {
    searchUrl: '',
    searchWord: '',
    showCaptchaError: false,
    websiteIsValid: null
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
    //response length 0 means the user did not confirm the captcha
    if(response.length === 0) {
      this.setState(
        {showCaptchaError: true}
      )
    }
    else {
      axios.post(
        "https://rocky-beach-31965.herokuapp.com/websites"
      ).then((response) => {
        // console.log(response.data);
          this.setState({
            wordCount: response.data,
            showCaptchaError: false
          })
      })
    }
  }

  render = () => {
    return (
      <div className="container">
        <Form onSearch={this.handleSearch} onWordInput={this.handleWordInput}
        onUrlInput={this.handleUrlInput}
        onCaptchaError={this.state.showCaptchaError}/>
        <Results searchWord={this.state.searchWord}
        wordCount={this.state.wordCount}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)

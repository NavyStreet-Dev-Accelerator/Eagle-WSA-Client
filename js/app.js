class Form extends React.Component {
  state = {

  }

  ///////
  //URL Input
  //////

  ///////
  //
  ///////
  // 
  // search = (event) => {
  //   event.preventDefault();
  //   console.log('searching');
  // }


  render = () => {
    return (
      <div className="search-form">
        <form onSubmit={this.search}>
          <label htmlFor="url">Enter a website URL</label>
          <input type="text" id="url" {this.getUrl}></input>
          <label htmlFor="phrase">Enter a word or phrase to scan for</label>
          <input type="text" id="phrase"></input>
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

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* App components */
import Main from "./Components/Main";
import Details from "./Components/Details";
import New from "./Components/New";
import Edit from "./Components/Edit";
import Footer from "./Components/Footer";

/* Style  */
import "./App.css"

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  deletePost = postIndex => {
    console.log("index:", postIndex);
    const tempArray = [...this.state.posts];
    tempArray.filter(postIndex, 1);
    this.setState({ posts: tempArray });
  };

  render() {
    return (
      <div>
        <h1 className="header">Blog/Posts Manager App</h1>

        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Main {...props} />}
            />
            <Route
              exact
              path="/Details/:postID"
              render={props => <Details {...props} />}
            />
            <Route
              exact
              path="/New"
              render={props => <New {...props} />}
            />
            <Route
              exact
              path="/Edit/:postID"
              render={props => <Edit {...props} />}
            />
            {/* <Route path="/Footer" component = {Footer} /> */}
          </Switch>
        </Router>
        
          <Footer />

      </div>
    );
  }
}

export default App;
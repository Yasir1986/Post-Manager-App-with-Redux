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
              path="/Post-Manager-App-with-Redux/"
              render={props => <Main {...props} />}
            />
            <Route
              exact
              path="/Post-Manager-App-with-Redux/Details/:postID"
              render={props => <Details {...props} />}
            />
            <Route
              exact
              path="/Post-Manager-App-with-Redux/New"
              render={props => <New {...props} />}
            />
            <Route
              exact
              path="/Post-Manager-App-with-Redux/Edit/:postID"
              render={props => <Edit {...props} />}
            />
          </Switch>
        </Router>
        
          <Footer />

      </div>
    );
  }
}

export default App;

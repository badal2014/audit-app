import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
// import App from '../App';
import Login from '../login';
import HomePage from '../home';
import SignUp from '../signUp';
import Error from '../error';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from '../redux/reducer';
import Navbar from '../navbar';
import ChangePassword from '../changePassword';



class Main extends Component {
  render() {
    const store = createStore(combineReducer, applyMiddleware(thunk));

    console.log("in routes");
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <Navbar />
            <Switch >
              <Route exact path="/" component={Login} />
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/signUp" component={SignUp} />
              <Route exact path="/changePassword" component={ChangePassword} />
              <Route component={Error} />
            </Switch >
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default Main;

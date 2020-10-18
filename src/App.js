import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

//Pages
import SignIn from "./pages/SignInPage.js";
import MainDashboardPage from "./pages/MainDashboardPage.js";
import ProtectedRoute from './components/protected-route/ProtectedRoute';

//AntD
import { DatePicker } from "antd";

//material-ui
import Button from "@material-ui/core/Button";

//redux
import { fetchCategories } from "./redux/Actions";
import { connect } from "react-redux";

//router
import { Switch, Route, withRouter } from "react-router-dom";

class ConnectedApp extends Component {
  constructor(props) {
    super(props);

    this.props.dispatch(fetchCategories());
  }

  render() {
    return (
      <div className="app">
        <MainDashboardPage />
        <Switch>
          {/*
              <Route path="/" exact component={ProductList} />
              <Route path="/details/:id" component={Details} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
          */}
              <ProtectedRoute path="/order" component={SignIn} />
              <Route
                component={() => (
                  <div style={{ padding: 20 }}>Page not found</div>
                )}
              />
          
        </Switch>
      </div>
    );
  }
}

const App = withRouter(connect()(ConnectedApp));

export default App;

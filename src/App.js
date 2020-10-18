import React, {Component} from "react";
//import logo from "./logo.svg";
import "./App.css";

//Pages
import SignInPage from "./pages/signin/SignInPage.js";
import SignUpPage from './pages/signup/SignUpPage.js';
import MainDashboardPage from "./pages/main-dashboard/MainDashboardPage.js";
import ProtectedRoute from './components/protected-route/ProtectedRoute';

//AntD
//import { DatePicker } from "antd";

//material-ui
//import Button from "@material-ui/core/Button";

//redux
import { fetchCategories } from "./redux/Actions";
import { connect } from "react-redux";

//router
import { Switch, Route, withRouter } from "react-router-dom";

//route constants
import { SIGN_UP_PAGE, LOGIN_PAGE, HOME_PAGE} from "./routes/RouteConstants";

class ConnectedApp extends Component {
  constructor(props) {
    super(props);

    this.props.dispatch(fetchCategories());
  }

  render() {
    return (
      <div className="app">
        <Switch>
              {/*
              <Route path="/" exact component={ProductList} />
              <Route path="/details/:id" component={Details} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              */}
              <Route path={LOGIN_PAGE} component={SignInPage} />
              <Route path={SIGN_UP_PAGE} component={SignUpPage} />
              <Route path={HOME_PAGE} component={MainDashboardPage} />
              {
              /*
              <ProtectedRoute path="/" component={MainDashboardPage} />*
              <Route
                component={() => (
                  <div style={{ padding: 20 }}>Page not found</div>
                )}
              />
              */}
        </Switch>
      </div>
    );
  }
}

const App = withRouter(connect()(ConnectedApp));

export default App;

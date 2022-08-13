import { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import { homework1, homework2, homework3 } from "./pages";

class App extends Component {
  state = {
    routes: [
      { title: "Homework1", path: "/homework1", component: homework1 },
      { title: "Homework2", path: "/homework2", component: homework2 },
      { title: "Homework3", path: "/homework3", component: homework3 },
    ],
  };

  render() {
    const { routes } = this.state;
    return (
      <>
        <NavBar routes={routes} />
        <div className="container py-5">
          <Switch>
            {routes.map(({ path, component: Page }) => (
              <Route
                key={path}
                path={path}
                render={(props) => <Page {...props} routes={routes} />}
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;

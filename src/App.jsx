import { Route, Switch } from "wouter";
import HomepageView from "./views/HomepageView";
import TravelToView from "./views/TravelToView";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomepageView} />
        <Route path="/travelto" component={TravelToView} />
      </Switch>
    </>
  );
}

export default App;

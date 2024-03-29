import { Route, Switch } from "wouter";
import HomepageView from "./views/HomepageView";
import TravelToView from "./views/TravelToView";
import AboutView from "./views/AboutView";
import Error404View from "./views/Error404View";
import DetailedCardView from "./views/DetailedCardView";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={HomepageView} />
        <Route path="/travelto" component={TravelToView} />
        <Route path="/about" component={AboutView} />
        <Route path="/journeys/:id">
          {(params) => <DetailedCardView id={params.id} />}
        </Route>
        <Route component={Error404View} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

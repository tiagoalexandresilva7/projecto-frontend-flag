import { Route, Switch } from "wouter";
import HomepageView from "./views/HomepageView";
import TravelToView from "./views/TravelToView";
import AboutView from "./views/AboutView";
import CopyrightView from "./views/CopyrightView";
import ContactsView from "./views/ContactsView";
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
        <Route path="/copyright" component={CopyrightView} />
        <Route path="/contacts" component={ContactsView} />
        <Route path="/trip" component={DetailedCardView} />
        <Route component={Error404View} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

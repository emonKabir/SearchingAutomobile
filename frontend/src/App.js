import "./App.css";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import AddNewCar from "./component/AddNewCar";
const SingleCarDetails = lazy(() => import("./component/SingleCarDetails"));
function App() {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/single-car-details/:id" component={SingleCarDetails} />
          <Route path="/add-new-car" component={AddNewCar} />
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

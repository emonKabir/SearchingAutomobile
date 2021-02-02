import "./App.css";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./component/common/navbar";
import Home from "./component/Home";
const AddNewCar = lazy(() => import("./component/AddNewCar"));
const EditCarDetails = lazy(() => import("./component/EditCarDetails"));
const SingleCarDetails = lazy(() => import("./component/SingleCarDetails"));
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className="row">
          <Switch>
            <Route
              path="/single-car-details/:id"
              component={SingleCarDetails}
            />
            <Route path="/edit-car-details/:id" component={EditCarDetails} />
            <Route path="/add-new-car" component={AddNewCar} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Suspense>
    </div>
  );
}

export default App;

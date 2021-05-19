import './App.css';
import Header from './componants/Header/Header';
import Shop from './componants/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Review from './componants/Review/Review';
import Inventory from './componants/Inventrory/Inventory';
import NotFound from './componants/NotFound/NotFound';
import ProductDetail from './componants/ProductDetail/ProductDetail';
import Shipment from './componants/Shipment/Shipment';
import Login from './componants/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './componants/PrivateRoute/PrivateRoute';
export const userContext =createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <Route path="/login">
           <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
           <Shipment></Shipment>
          </PrivateRoute>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
             <ProductDetail></ProductDetail>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     
    </userContext.Provider>
  );
}

export default App;

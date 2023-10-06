import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './NavBar';
import Home from "./Home";
import Orders from "./Orders";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
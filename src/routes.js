import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import Savedproducts from './pages/Savedproducts';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/Account" component={Account} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/Savedproducts" component={Savedproducts} />
            </Switch>
        </Router>    
    );
    }

    export default Routes;
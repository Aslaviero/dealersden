import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Accountpage from './pages/Accountpage';
import Savedproducts from './pages/Savedproducts';

function Routes() [
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
    )
]
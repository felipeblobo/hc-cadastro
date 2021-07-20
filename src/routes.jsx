import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Clients from './pages/Clients';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/produtos'>
          <Products />
        </Route>
        <Route path='/clientes'>
          <Clients />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
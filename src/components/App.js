import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import MainLayout from './MainLayout';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import BadgeDetails from '../pages/BadgeDetailsContainer';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeItems from '../components/BadgeItems';
import NotFound from '../pages/NotFound';
import BadgeNewItem from '../pages/BadgeNewItem';

function App() {
  return (
    <BrowserRouter>      
    <MainLayout>   
        <Switch>
            <Route exact path="/" component={Home} />
            <Layout>            
              <Switch>            
                  <Route exact path="/badges" component={Badges} />
                  <Route exact path="/badges/new" component={BadgeNew} />
                  <Route exact path="/badges/:badgeId" component={BadgeDetails} />
                  <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                  <Route exact path="/badges/:badgeId/items" component={BadgeItems} />
                  <Route exact path="/badges/:badgeId/newItem" component={BadgeNewItem} />
                  <Route component={NotFound} />                   
              </Switch>
            </Layout>
        </Switch>                
    </MainLayout>    
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Home from './components/Home.js/Home';
import ViewBox from './components/ViewBox/ViewBox';


const App = () =>{
  return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/view/image/#full" component={ViewBox} />
        </Switch>
      </BrowserRouter>
  )
}

export default App;
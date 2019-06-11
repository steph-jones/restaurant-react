import React, { Fragment, } from 'react';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Lunch from './components/Lunch';
import Dinner from './components/Dinner';
import FoodsForm from './components/FoodsForm';
import FoodReview from './components/FoodView';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
 
const App = () => (
  <Fragment> 
    {/*    can also do a fragment by <> then ending with </>    */}
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} />
        <Route exact path="/lunch" component={Lunch} />
        <Route exact path="/dinner" component={Dinner} />
        <Route exact path="/foods/new" component={FoodsForm} />
        <Route exact path="/foods/:id" component={FoodReview} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CardProvider from './components/provider/CardProvider';
import Home from './components/Home/Home';
function App() {
  return (
    <CardProvider>
      <Router>
        <main>
          <Navbar />

          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/gundam' exact>
              <ProductList />
            </Route>
            <Route path='/contact' exact>
              <Contact />
            </Route>
            <Route path='/about' exact>
              <About />
            </Route>
            <Route path='/card' exact>
              <Card />
            </Route>
          </Switch>
        </main>
      </Router>
    </CardProvider>
  );
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}
function Card() {
  return <h2>Card</h2>;
}
export default App;

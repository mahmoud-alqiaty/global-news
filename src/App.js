import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DataContextProvider from "./components/context/CommingDataContext";
import Footer from './components/footer/Footer';
import Navbar from "./components/navbar/Navbar";
import Buseness from './pages/buseness/Buseness';
import Entertainment from './pages/entertainment/Entertainment';
import Health from './pages/health/Health';
import Home from './pages/home/Home'
import Science from './pages/science/Science';

import SearchResults from './pages/SearchResults/SearchResults';
import Sports from './pages/sports/Sports';
import Technology from './pages/technology/Technology';


function App() {
  return (
    <BrowserRouter>
        <DataContextProvider>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/business" component={Buseness} />
            <Route path="/entertainment" component={Entertainment} />
            <Route path="/health" component={Health} />
            <Route path="/science" component={Science} />
            <Route path="/sports" component={Sports} />
            <Route path="/technology" component={Technology} />
            <Route path="/search" component={SearchResults} />
          </Switch>
          <Footer />
        </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;



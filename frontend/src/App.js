import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Articles from './components/Articles';
import './App.css';
import Home from './components/Home';
import Article from './components/Article';
import NewArticle from './components/NewArticle';
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
      
      <BrowserRouter >
          
           <div className="container text-center">
            <div className="row row-offcanvas row-offcanvas-right">
              <div className="col-12 col-md-12">
                <div className="jumbotron">
                <NavBar/>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/articles" component={Articles} />
                <Route exact path="/articles/new" component={NewArticle} />
                <Route exact path="/articles/:id" component={Article} />
                </Switch>
                </div>
              </div>
            </div>
          </div>
      </BrowserRouter> 
    );
  }
}

export default App;

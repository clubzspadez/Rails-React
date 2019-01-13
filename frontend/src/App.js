import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Articles from './components/Articles';
import './App.css';
import Home from './components/Home';
import Article from './components/Article';
import NewArticle from './components/NewArticle';


class App extends Component {
  render() {
    return (
      
      <BrowserRouter >
          <Switch>
           <div className="container text-center">
            <div class="row row-offcanvas row-offcanvas-right">
              <Route exact path="/" component={Home} />
              <Route exact path="/articles" component={Articles} />
              <Route exact path="/articles/:article" component={Article} />
              <Route exact path="/articles/new" component={NewArticle} />
            </div>
          </div>
          </Switch>
        </BrowserRouter> 
    );
  }
}

export default App;

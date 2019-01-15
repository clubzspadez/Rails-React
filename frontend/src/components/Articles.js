import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux';
import {
  getArticles
} from '../actions/index';
import {
  Link, Route
} from 'react-router-dom'
import Article from './Article';




class Articles extends Component {

  componentDidMount() {
    this.props.getArticles();
  }

  renderArticles() {
    return this.props.articles.map((article) => {
      return ( 
      <li className="list-group-item" key={article.id}>
        <h3>{article.title}</h3>
        <img src="https://via.placeholder.com/400x150" className="img-fluid" alt="Responsive image"/>
        <Link to={`articles/${article.id}`}>
          <a className="btn btn-secondary" role="button"><strong>View details</strong> &raquo;</a>
        </Link>  
      </li> 
      )
    });
  }
  render() {
    return ( 
      <div className="container">
       
            <h1>Articles</h1>
            <div className="row">
              <div className="col-12 col-lg-12">
              <ul className="list-group list-group-flush">
              {this.renderArticles()}
              </ul>
              </div>
            </div>
              
            <Route exact path="/articles/:articleId" component={Article} />
      </div>

            
               
      // Articles Home Page
      // <ul className="list-group">
      // {this.renderArticles()}
      // </ul>

      // <div>
      // <Link to="articles/new" className="btn btn-warning">
      // Create Article
      // </Link> 
      // </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)

  return {
    articles: state.articles.all
  }
}

export default connect(mapStateToProps, {
  getArticles: getArticles
})(Articles);
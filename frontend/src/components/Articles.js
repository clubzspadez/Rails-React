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
  Link
} from 'react-router-dom'




class Articles extends Component {

  componentDidMount() {
    console.log(this.props.getArticles());
  }

  renderArticles() {
    return this.props.articles.map((article) => {
      return ( 
      <li className="list-group-item" key={article.id}>
      <Link to={"articles/" + article.id}>
        <h4>{article.title}</h4>
      </Link>  
      </li> 
      )
    });
  }
  render() {
    return ( 
      <div class="container">
        <div class="col-12 col-md-9">
          <div class="jumbotron">
            <h1>Articles</h1>
            <div class="row">
              <div class="col-6 col-lg-4">
              <ul className="list-group list-group-flush">
              {this.renderArticles()}
              </ul>
              </div>
            </div>
          </div>
        </div>
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
  return {
    articles: state.articles.all
  }
}

export default connect(mapStateToProps, {
  getArticles: getArticles
})(Articles);
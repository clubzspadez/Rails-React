import React, { Component} from 'react';
import {
  connect
} from 'react-redux';
import {
  getArticle
} from '../actions/index';



class Article extends Component {

  componentDidMount(){
    this.props.getArticle(this.props.match.params.id);
  }

  

  renderArticle(article) {
    console.log(article);
    return (
      <div>
        <h1>Title: {article.title}</h1>
        <h5>author {article.author}</h5>
        <p>Description:{article.description}</p>
        <span>Tags{article.tags}</span>
    
      </div>
    )
  }

  render(){
    const { article } = this.props;
    return (
      <div className="container">
              <div className="row">
                <div className="col-12 col-lg-12">
                <ul className="list-group list-group-flush">
                  {this.renderArticle(article)}
                </ul>
                </div>
              </div>

        </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return {
    article: state.articles.article
  }
}
export default connect(mapStateToProps, 
  { 
    getArticle: getArticle 
  })(Article);



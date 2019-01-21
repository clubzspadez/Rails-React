import React, { Component} from 'react';
import {
  connect
} from 'react-redux';
import {
  getArticle, deleteArticle
} from '../actions/index';



class Article extends Component {

  componentDidMount(){
    this.props.getArticle(this.props.match.params.id);
  }

  handleDelete(e){
    this.props.deleteArticle(this.props.match.params.id);
    setTimeout( () =>{
      this.props.history.push('/articles');
    }, 1000);

  }
  

  renderArticle(article) {
    console.log(article);
    return (
      <div>
        <h1>{article.title}</h1>
        <h5>{article.author}</h5>
        <p>{article.description}</p>
        <span>Tags:  <em>{article.tags}</em></span>
        <div>
        <br/>
        <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete Article</button>
        </div>
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
    getArticle: getArticle,
    deleteArticle: deleteArticle
  })(Article);



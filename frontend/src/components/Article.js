import React, { Component} from 'react';
import {
  connect
} from 'react-redux';
import {
  Link
} from 'react-router-dom';
import {
  getArticle
} from '../actions/index';
import { axios } from 'axios'



class Article extends Component {
  constructor(props){
    super(props);
    this.renderArticle = this.renderArticle.bind(this);
    console.log(props)
  }

  componentDidMount(){
    
    this.props.getArticle(this.props.match.params.id);

    
  }

  renderArticle() {
    console.log(this.props)
    return(
      <div>{}</div>
    )
  }

  render(){
  
  return (
    <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
              <ul className="list-group list-group-flush">
                {this.renderArticle()}
              </ul>
              </div>
            </div>

      </div>
  )
  }
}

let  mapStateToProps = (state) =>{
  console.log(state.articles.article)
  return{
    article: state.articles.article
  }
}
export default connect(mapStateToProps, {getArticle})(Article)



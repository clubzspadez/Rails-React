import React, { Component } from 'react'
import {reduxForm} from 'redux-form';
import { createArticle } from '../actions/index';
import PropTypes from 'prop-types';


class NewArticle extends Component {
    constructor(props){
        super(props);
    }
    static contextTypes = {
        handleSubmit: PropTypes.func,
        router: PropTypes.object,
        fields: PropTypes.object
    }
    //will return a promise(axios)
    onSubmit(props){
        this.props.createArticle(props).
        then(() => {
            this.context.router.push('/');
        }).catch((err) => {
            console.log(err)
        })
    }

  render() {
    const { fields:{title, description, author, tags}, handleSubmit} = this.props;
    return (
      <div>
        <h1>Create an Article</h1>

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" {...title}/>
                <label>Description</label>
                <input type="text" className="form-control" {...description}/>
                <label>Author</label>
                <input type="text" className="form-control" {...author}/>
                <label>Tags</label>
                <input type="text" className="form-control" {...tags}/>
            </div>
            <button type="submit" className="btn btn-success">Create Article</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
    form:'NewArticleForm',
    fields: ['title', 'description', 'author', 'tags']
}, null, { createArticle})(NewArticle)
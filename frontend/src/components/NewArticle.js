import React, { Component } from 'react'
import {reduxForm, Field} from 'redux-form';
import { createArticle } from '../actions/index';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'


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
        createArticle(props).
        then(() => {
            this.props.context.history.push('/');
        }).catch((err) => {
            console.log(err)
        })

        

    }


  render() {
    const { fields:{title, description, author, tags}, handleSubmit} = this.props;
    return (
      <div className="container">
        <h1>Create an Article</h1>

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="form-group">
                <label>Title</label>
                <Field name="article[title]" component="input" type="text" />
                <label>Description</label>
                <Field name="article[description]" component="input" type="text"/>
                <label>Author</label>
                <Field name="article[author]" component="input" type="text"/>
                <label>Tags</label>
                <Field name="article[tags]" component="input" type="text"/>
            </div>
            <button type="submit" className="btn btn-success">Create Article</button>
        </form>
      </div>
    )
  }
}




NewArticle = reduxForm({
    form: 'NewArticle',
    fields: ['title', 'description', 'author', 'tags']
})(NewArticle);

export default NewArticle;
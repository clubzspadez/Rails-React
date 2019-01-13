import React from 'react'

export default function Article(props) {
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
  )
}

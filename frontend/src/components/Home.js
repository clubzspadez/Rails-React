import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Home() {
  return (
        <div className="container">
        <h1>WellTok Submission</h1>
        <em>During this coding challenge, you’ll be creating a RoR application that will expose API endpoint(s) for CRUD. Please use any tools you find suitable to solve the challenge.</em>
        <br/>
        <br/>
        <p>This is my submission to the coding challenge</p>

        <h3>Front-End Dependencies</h3>
        <p>Built with Create-react-app</p>
        <ul>
          <p>axios - for making CRUD requests</p>
          <p>react-router - for client side routing</p>
          <p>redux - for state management to our react app</p>
          <p>redux-promise(middleware) - for dealing wih promises returned from our request</p>
        </ul>

        <h3>Back-End Setup</h3>
        <ul>
          <p>pg - postgres for backend db</p>
          <p>routes- api/v1</p>
          <p>api - setup in articles controller</p>
          <p>model - all are strings - :title, :description, :author, :tags, :created_at, :updated_at</p>
          <p>Data is seeded from lib/seeds/import.csv. Setup for seeding data is in db/seeds.rb</p>
        </ul>
        </div>
  )
}

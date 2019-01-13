import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="col-12 col-md-9">
       <div className="jumbotron">
       <h1>WellTok Submission</h1>
        <p>Trough this link we will get the seeded data from our import.csv. </p>
            <Link to="/articles">Import</Link>
        </div>
    </div>
  )
}

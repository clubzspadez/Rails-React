import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="">
       <div>
       <h2>Imported Articles from database</h2>
       
            <Link to="/articles">View Imported Articles</Link>
        </div>
    </div>
  )
}

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from "./Header.js";

function Footer() {
  return (
    <footer className="footer">Copyright 2022 Jelinek development. All rights reserved.</footer>
  )
}
function Content() {
  return (
    <div>
      <h1>Why I want to learn React</h1>
      <ol>
        <li>I want to get a job</li>
        <li>React is more marketable and easier to use than Vue</li>
        <li>Components are interesting</li>
      </ol>
    </div>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))
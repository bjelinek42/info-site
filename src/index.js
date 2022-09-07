import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from "./Header.js";
import MainContent from "./MainContent.js";
import Footer from "./Footer.js"

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))
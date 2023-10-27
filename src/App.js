"use client";
import "./App.css";
import quotes from "./quotes.json";
// import Quote from "./components/quote";
import { useState, useEffect } from "react";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

// parent
function QuoteBox() {
  // child component

  const [quotation, setQuotation] = useState(quotes["quotes"][0]);
  function Quote() {
    useEffect(() => {
      document.body.style.backgroundColor = quotation["color"]; // Modify the body element within the component
      // document.body.style.color = quotation["color"]; // Modify the body element within the component
      // document.getElementById("text").style.color = quotation["color"];
      document.body.style.transition = "1s";
      const wordElements = document.getElementsByClassName("words");

      for (let i = 0; i < wordElements.length; i++) {
        wordElements[i].style.color = quotation["color"];
        wordElements[i].style.transition = "5s";
      }

      const btns = document.getElementsByClassName("btn");

      for (let j = 0; j < btns.length; j++) {
        btns[j].style.backgroundColor = quotation["color"];
        btns[j].style.transition = "5s";
      }
    }, []);

    function newQuote() {
      if (quotation === quotes["quotes"][0]) {
        setQuotation(quotes["quotes"][1]);
      } else if (quotation === quotes["quotes"][1]) {
        setQuotation(quotes["quotes"][2]);
      } else if (quotation === quotes["quotes"][2]) {
        setQuotation(quotes["quotes"][0]);
      }
    }
    return (
      <div id="quote-box" className="text-center">
        <h3 id="text" className="words">
          <span className="hash">"</span>
          {quotation["quote"]}
          <span className="hash">"</span>
        </h3>
        <p id="author" className="words">
          - {quotation["author"]}
        </p>
        <div className="btn-row">
          <div className="left side">
            <button className="btn btn-lg text-white" id="tweet">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </button>
            <button className="btn btn-lg text-white" id="tumblr">
              <FontAwesomeIcon icon={faTumblr}></FontAwesomeIcon>
            </button>
          </div>
          <div className="right side">
            <button
              id="new-quote"
              className="quote btn btn-lg text-white"
              onClick={newQuote}
            >
              New Quote!
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Quote />
      <div id="outro">
        <p>
          <em>الله اكبر</em>
        </p>
        <p>
          by: <em>Skeno abd al-Shakur</em>
        </p>
      </div>
    </div>
  );
}

export default QuoteBox;

import React from "react";
import TextGenerator from "../components/TextGenerator";

const Home = () => {
  window.onload = function() {
    window.setTimeout(function() {
      document.getElementById("twitterButtonBase").style.display = "none";
    }, 10);
  };
  return (
    <>
      <TextGenerator />
      <div id="twitterButtonBase">
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-show-count="false"
        >
          Tweet
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </div>
    </>
  );
};

export default Home;

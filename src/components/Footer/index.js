import React from "react";
import "./style.css";

function Footer() {
  return (
    <div>
      <div id="contact-me">
        <div id="contact-me-txt" class="titles align-self-center">
          <h1>Contact me</h1>
        </div>
      </div>

      <div id="links" class="row">
        <a href="mailto: henderson2350@gmail.com" target="_blank">
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/clare-henderson-962ba6195"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="https://github.com/henderson2350" target="_blank">
          Github
        </a>
      </div>

      <div id="phone-number">
        <p>+1 404 316 4330</p>
      </div>
    </div>
  );
}

export default Footer;

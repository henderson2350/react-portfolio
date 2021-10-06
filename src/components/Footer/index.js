import React from "react";
import "./style.css";

const links = [
  {
    name: "Email",
    link: "mailto: henderson2350@gmail.com",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/clare-henderson-962ba6195",
  },
  {
    name: "Github",
    link: "https://github.com/henderson2350",
  },
];

function Footer() {
  return (
    <div id="entire">
      <div>
        <div id="contact-me-txt" className="titles align-self-center">
          <h1>Contact me</h1>
        </div>
      </div>

      <div id="links" className="row align-self-center">
        {links.map((link) => {
          return (
            <a href={link.link} target="_blank">
              <p>{link.name}</p>
            </a>
          );
        })}
      </div>

      <div id="phone-number">
        <p>+1 404 316 4330</p>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer grey darken-2">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Fortnite discription</h5>
            <p className="grey-text text-lighten-4">
              Fortnite is an online video game developed by Epic Games and
              released in 2017. It is a free-to-play Battle Royale game with
              numerous game modes for every type of game player
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">More information</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.epicgames.com/fortnite/en-US/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fortnite Homepage
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://en.wikipedia.org/wiki/Fortnite"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fortnite Wikipedia
                </a>
              </li>

              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.youtube.com/@fortnite"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fortnite Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright grey darken-3">
        <div className="container">
          © {new Date().getFullYear()}
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/Skiffong/react-fortnite-shop"
            target="_blank"
            rel="noreferrer"
          >
            Skiffong github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import * as React from "react";
import logo from "../../logo.svg";

import "./Footer.css";

interface IFooterProps {
  appVersion: string;
}

const Footer: React.SFC<IFooterProps> = props => {
  return (
    <footer className="osFooter bg-dark type-color-reverse-anchor-reset">
      <div className="container padding-h-big padding-v-bigger">
        <div className="row collapse-b-phone-land align-center">
          <div className="col-6">
            <h4 className="inverse margin-reset">
              <img src={logo} alt="Kubeapps logo" className="osFooter__logo" width="140" />
            </h4>
            <p className="type-small margin-reset">
              Service preview |{" "}
              <a
                href="https://github.com/kubeapps/kubeapps/graphs/contributors"
                className="type-color-white"
                target="_blank"
              >
                coming soon
              </a>
              .
            </p>
          </div>
          {/* <div className="consortium">
            <a href="https://www.sinergise.com/" target="blank"><img src={require("../../logos/logo_sinergise.svg")} width="180px" alt="Sinergise Logo" /></a>
            <a href="https://www.brockmann-consult.de/" target="blank"><img src={require("../../logos/logo_brockmann.png")} width="120px" alt="Brockmann Consult Logo" /></a>
            <a href="https://eox.at" target="blank"><img src={require("../../logos/logo_eox.svg")} width="140px" alt="EOX Logo" /></a>
            <a href="http://www.gisat.cz" target="blank"><img src={require("../../logos/logo_gisat.svg")} width="130px" alt="Gisat Logo" /></a>
            <a href="https://www.planet.com/" target="blank"><img src={require("../../logos/logo_planet.png")} width="120px" alt="Planet Logo" /></a>
            <a href="https://www.sentinel-hub.com/" target="blank"><img src={require("../../logos/logo_sentinelhub.png")} width="200px" alt="Sentinel Hub Logo" /></a>
          </div> */}
          <div className="col-6 text-r">
            <p className="type-small margin-small version-link">
              <a
                href={`https://github.com/kubeapps/kubeapps/releases/tag/${props.appVersion}`}
                className="type-color-white"
                target="_blank"
              >
                {props.appVersion}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

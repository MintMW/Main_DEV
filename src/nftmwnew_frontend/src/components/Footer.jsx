import React from "react";
import Dfinity from "../../assets/dfinity.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div id="footer">
      <footer>
        <div>
          <p>
            <img className="footer-logo" src={Dfinity} /> 
            PLETHORA
            &copy; {year}. All Rights reserved &reg; Bazinga&trade;
            </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

import React from "react";
import logo from "../../assets/rp_logo.png";
const Footer = () => {
  return (
    <>
      <footer
        className="text-center font-smaller mt-5"
        style={{ paddingBottom: "2%" }}
      >
        <img src={logo} />
        <br></br>

        <a href="https://www.instagram.com/recyclingpioneers/?utm_medium=copy_link">
          <i
            style={{ color: "#44CE04", padding: "2%" }}
            class="fa fa-instagram fa-lg"
            aria-hidden="true"
          ></i>
        </a>

        <a href="https://www.linkedin.com/company/recycling-pioneers/about/">
          <i
            style={{ color: "#44CE04", padding: "2%" }}
            class="fa fa-linkedin fa-lg"
            aria-hidden="true"
          ></i>
        </a>

        <p>
          &copy;2021 <strong>Recycling Pioneers</strong>. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;

/*

 <i
          style={{ color: "#44CE04", padding: "2%" }}
          class="fa fa-facebook fa-lg"
          aria-hidden="true"
        ></i>


            <i
          style={{ color: "#44CE04", padding: "2%" }}
          class="fa fa-twitter fa-lg"
          aria-hidden="true"
        ></i>
        */

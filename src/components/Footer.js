import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footer text-white text-center">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
        <div>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import './Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-text">
          <div className="row">
            <div className="col-lg-4">
              <div className="ft-about">
                <div className="logo">
                  <a href="#">
                    <img src="img/footer-logo.png" alt="Footer Logo" />
                  </a>
                </div>
                <p>We inspire and reach millions of travelers<br /> across 90 local websites</p>
                <div className="fa-social">
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-tripadvisor"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="ft-contact">
                <h6>Contact Us</h6>
                <ul>
                  <li>(12) 345 67890</li>
                  <li>info.colorlib@gmail.com</li>
                  <li>856 Cordia Extension Apt. 356, Lake, United State</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="ft-newslatter">
                <h6>New latest</h6>
                <p>Get the latest updates and offers.</p>
                <form action="#" className="fn-form">
                  <input type="text" placeholder="Email" />
                  <button type="submit"><i className="bi bi-send"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Terms of use</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Environmental Policy</a></li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="co-text">
                <p>
                  Copyright &copy;{currentYear} All rights reserved | This template is made with Ibrahim
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

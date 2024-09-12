import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./HeaderSection.css";
import { useState } from "react";

const HeaderSection: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <>
      <div className="offcanvas-menu-overlay"></div>
      <div className="canvas-open">
        <i className="icon_menu"></i>
      </div>
      <div className="offcanvas-menu-wrapper">
        <div className="canvas-close">
          <i className="icon_close"></i>
        </div>
        <div className="search-icon search-switch">
          <i className="icon_search"></i>
        </div>
        <div className="header-configure-area">
          <div className="language">
            <img src="/sona-website/img/flag.jpg" alt="" />
            <span>
              EN <i className="fa fa-angle-down"></i>
            </span>
          </div>
          <Link to="/sona-website/booking" className="bk-btn">
            Booking Now
          </Link>
        </div>
        <nav className="mainmenu mobile-menu">
          <ul>
            <li className="active">
              <Link to="/sona-website/">Home</Link>
            </li>
            <li>
              <Link to="/sona-website/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/sona-website/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/sona-website/pages">Pages</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/sona-website/room-details">Room Details</Link>
                </li>
                <li>
                  <Link to="/sona-website/blog-room">Blog Room</Link>
                </li>
                <li>
                  <Link to="/sona-website/family-room">Family Room</Link>
                </li>
                <li>
                  <Link to="/sona-website/premium-room">Premium Room</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/sona-website/news">News</Link>
            </li>
            <li>
              <Link to="/sona-website/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="top-social">
          <a href="#">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#">
            <i className="bi bi-tripadvisor"></i>
          </a>
          <a href="#">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        <ul className="top-widget">
          <li>
            <FontAwesomeIcon icon={faPhone} /> (12) 345 67890
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> info.colorlib@gmail.com
          </li>
        </ul>
      </div>

      <header className="header-section">
        <div className="top-nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="tn-left">
                  <li>
                    <i className="fa fa-phone"></i> (12) 345 67890
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i> info.colorlib@gmail.com
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="tn-right">
                  <div className="top-social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-tripadvisor"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <Link to="/sona-website/booking" className="bk-btn">
                    Booking Now
                  </Link>
                  <div className="language">
                    <img src="/sona-website/img/flag.jpg" alt="" />
                    <span>
                      EN <i className="fa fa-angle-down"></i>
                    </span>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="logo">
                  <Link to="/sona-website/">
                    <img src="/sona-website/img/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="nav-menu">
                  <nav className="mainmenu">
                    <ul>
                      <li className="active">
                        <Link to="/sona-website/">Home</Link>
                      </li>
                      <li>
                        <Link to="/sona-website/rooms">Rooms</Link>
                      </li>
                      <li>
                        <Link to="/sona-website/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/sona-website/pages">Pages</Link>
                        <ul className="dropdown">
                          <li>
                            <Link to="/sona-website/room-details">Room Details</Link>
                          </li>
                          <li>
                            <Link to="/sona-website/blog-details">Blog Details</Link>
                          </li>
                          <li>
                            <Link to="/sona-website/family-room">Family Room</Link>
                          </li>
                          <li>
                            <Link to="/sona-website/premium-room">Premium Room</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/sona-website/news">News</Link>
                      </li>
                      <li>
                        <Link to="/sona-website/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                  <div
                    className="nav-right search-switch"
                    onClick={toggleSearch}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isSearchOpen && (
        <div className="search-model">
          <div className="search-close-switch" onClick={toggleSearch}>
            &times;
          </div>
          <div className="search-model-form">
            <input type="text" id="search-input" placeholder="Search here..." />
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderSection;

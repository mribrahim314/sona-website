
import './ServicesSection.css'; 

const ServicesSection = () => {
  return (
    <section className="services-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>What We Do</span>
              <h2>Discover Our Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="service-item">
              <i className="bi bi-car-front" style={{fontSize:"4em"}}></i> {/* Bootstrap icon for travel */}
              <h4>Travel Plan</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="service-item">
              <i className="bi bi-egg-fried"style={{fontSize:"4em"}}></i> {/* Bootstrap icon for catering */}
              <h4>Catering Service</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="service-item">
              <i className="bi bi-truck-flatbed" style={{fontSize:"4em"}}></i> {/* Bootstrap icon for babysitting */}
              <h4>Babysitting</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="service-item">
              <i className="bi bi-basket2" style={{fontSize:"4em"}}></i> {/* Bootstrap icon for laundry */}
              <h4>Laundry</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="service-item">
              <i className="bi bi-geo-alt" style={{fontSize:"4em"}}></i> {/* Bootstrap icon for hire driver */}
              <h4>Hire Driver</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="service-item">
              <i className="bi bi-cup-straw" style={{fontSize:"4em"}}></i> {/* Bootstrap icon for bar & drink */}
              <h4>Bar & Drink</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

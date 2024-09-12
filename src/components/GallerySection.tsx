
import './GallerySection.css';
import gallery1 from '/img/gallery/gallery-1.jpg';
import gallery2 from '/img/gallery/gallery-2.jpg';
import gallery3 from '/img/gallery/gallery-3.jpg';
import gallery4 from '/img/gallery/gallery-4.jpg';

const GallerySection = () => {
  return (
    <section className="gallery-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Our Gallery</span>
              <h2>Discover Our Work</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="gallery-item" style={{ backgroundImage: `url(${gallery1})` }}>
              <div className="gi-text">
                <h3>Room Luxury</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="gallery-item" style={{ backgroundImage: `url(${gallery3})` }}>
                  <div className="gi-text">
                    <h3>Room Luxury</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="gallery-item" style={{ backgroundImage: `url(${gallery4})` }}>
                  <div className="gi-text">
                    <h3>Room Luxury</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="gallery-item large-item" style={{ backgroundImage: `url(${gallery2})` }}>
              <div className="gi-text">
                <h3>Room Luxury</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

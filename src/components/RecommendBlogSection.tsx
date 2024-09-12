import './RecommendBlogSection.css'

const RecommendBlogSection = () => {
  return (
    <section className="recommend-blog-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Recommended</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="blog-item set-bg" style={{ backgroundImage: "url('img/blog/blog-1.jpg')" }}>
              <div className="bi-text">
                <span className="b-tag">Travel Trip</span>
                <h4><a href="#">Tremblant In Canada</a></h4>
                <div className="b-time">
                  <i className="bi bi-clock"></i> 15th April, 2019
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog-item set-bg" style={{ backgroundImage: "url('img/blog/blog-2.jpg')" }}>
              <div className="bi-text">
                <span className="b-tag">Camping</span>
                <h4><a href="#">Choosing A Static Caravan</a></h4>
                <div className="b-time">
                  <i className="bi bi-clock"></i> 15th April, 2019
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog-item set-bg" style={{ backgroundImage: "url('img/blog/blog-3.jpg')" }}>
              <div className="bi-text">
                <span className="b-tag">Event</span>
                <h4><a href="#">Copper Canyon</a></h4>
                <div className="b-time">
                  <i className="bi bi-clock"></i> 21st April, 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendBlogSection;

import './BlogDetailsHero.css'

const BlogDetailsHero = () => {
  return (
    <section
      className="blog-details-hero set-bg"
      style={{ backgroundImage: `url(/sona-website/img/blog/blog-details/blog-details-hero.jpg)` }} 
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="bd-hero-text">
              <span>Travel Trip & Camping</span>
              <h2>Cdc Issues Health Alert Notice For Travelers To USA From Hon</h2>
              <ul>
                <li className="b-time">
                  <i className="bi bi-clock"></i> 15th April, 2019
                </li>
                <li>
                  <i className="bi bi-person"></i> Kerry Jones
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsHero;

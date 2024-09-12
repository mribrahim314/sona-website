
import OwlCarousel from 'react-owl-carousel'; 
import './TestimonialSection.css';

const TestimonialSection = () => {

  const testimonials = [
    {
      text: "After a construction project took longer than expected, my husband, my daughter and I needed a place to stay for a few nights. As a Chicago resident, we know a lot about our city, neighborhood and the types of housing options available and absolutely love our vacation at Sona Hotel.",
      author: "Alexander Vasquez",
      image: "/sona-website/img/testimonial-logo.png" 
    },
    {
      text: "After a construction project took longer than expected, my husband, my daughter and I needed a place to stay for a few nights. As a Chicago resident, we know a lot about our city, neighborhood and the types of housing options available and absolutely love our vacation at Sona Hotel.",
      author: "Alexander Vasquez",
      image: "/sona-website/img/testimonial-logo.png" 
    }
  ];

  const options = {
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 500
  };

  return (
    <section className="testimonial-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Testimonials</span>
              <h2>What Customers Say?</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <OwlCarousel className="testimonial-slider owl-carousel" {...options}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="ts-item">
                  <p>{testimonial.text}</p>
                  <div className="ti-author">
                    <div className="rating">
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star-half"></i>
                    </div>
                    <h5>- {testimonial.author}</h5>
                  </div>
                  <img src={testimonial.image} alt="Testimonial Logo" />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

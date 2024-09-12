
import { Col, Row } from 'react-bootstrap'; 
import { FaClock } from 'react-icons/fa';
import './BlogSection.css';

const blogItems = [
  {
    image: 'img/blog/blog-1.jpg',
    tag: 'Travel Trip',
    title: 'Tremblant In Canada',
    date: '15th April, 2019',
    link: '#'
  },
  {
    image: 'img/blog/blog-2.jpg',
    tag: 'Camping',
    title: 'Choosing A Static Caravan',
    date: '15th April, 2019',
    link: '#'
  },
  {
    image: 'img/blog/blog-3.jpg',
    tag: 'Event',
    title: 'Copper Canyon',
    date: '21th April, 2019',
    link: '#'
  },
  {
    image: 'img/blog/blog-wide.jpg',
    tag: 'Event',
    title: 'Trip To Iqaluit In Nunavut A Canadian Arctic City',
    date: '08th April, 2019',
    link: '#',
    large: true
  },
  {
    image: 'img/blog/blog-10.jpg',
    tag: 'Travel',
    title: 'Traveling To Barcelona',
    date: '12th April, 2019',
    link: '#',
    small: true
  }
];

const BlogSection = () => (
    <section className="blog-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span>Hotel News</span>
            <h2>Our Blog & Event</h2>
          </div>
        </div>
      </div>
  <Row>
    {blogItems.map((item, index) => (
      <Col key={index} lg={item.large ? 8 : item.small ? 4 : 4}>
        <div
          className='blog-item set-bg'
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="bi-text">
            <span className="b-tag">{item.tag}</span>
            <h4><a href={item.link}>{item.title}</a></h4>
            <div className="b-time"><FaClock /> {item.date}</div>
          </div>
        </div>
      </Col>
    ))}
  </Row>
  </div>
      
    </section>
);

export default BlogSection;

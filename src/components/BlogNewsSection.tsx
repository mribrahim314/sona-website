

const BlogNewsSection = () => {
  const blogPosts = [
    { id: 1, tag: 'Travel Trip', title: 'Tremblant In Canada', date: '15th April, 2019', img: 'img/blog/blog-1.jpg' },
    { id: 2, tag: 'Camping', title: 'Choosing A Static Caravan', date: '15th April, 2019', img: 'img/blog/blog-2.jpg' },
    { id: 3, tag: 'Event', title: 'Copper Canyon', date: '21st April, 2019', img: 'img/blog/blog-3.jpg' },
    { id: 4, tag: 'Trivago', title: 'A Time Travel Postcard', date: '22nd April, 2019', img: 'img/blog/blog-4.jpg' },
    { id: 5, tag: 'Camping', title: 'A Time Travel Postcard', date: '25th April, 2019', img: 'img/blog/blog-5.jpg' },
    { id: 6, tag: 'Travel Trip', title: 'Virginia Travel For Kids', date: '28th April, 2019', img: 'img/blog/blog-6.jpg' },
    { id: 7, tag: 'Travel Trip', title: 'Bryce Canyon A Stunning', date: '29th April, 2019', img: 'img/blog/blog-7.jpg' },
    { id: 8, tag: 'Event & Travel', title: 'Motorhome Or Trailer', date: '30th April, 2019', img: 'img/blog/blog-8.jpg' },
    { id: 9, tag: 'Camping', title: 'Lost In Lagos Portugal', date: '30th April, 2019', img: 'img/blog/blog-9.jpg' },
  ];

  return (
    <section className="blog-section blog-page spad">
      <div className="container">
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div className="blog-item set-bg" style={{ backgroundImage: `url(${post.img})` }}>
                <div className="bi-text">
                  <span className="b-tag">{post.tag}</span>
                  <h4><a href="./blog-details.html">{post.title}</a></h4>
                  <div className="b-time"><i className="bi bi-clock"></i> {post.date}</div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-12">
            <div className="load-more">
              <a href="#" className="primary-btn" style={{color: "#19191a"}}>Load More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsSection;

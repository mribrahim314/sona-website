import './BlogDetailsSection.css'

const BlogDetailsSection = () => {
  return (
    <section className="blog-details-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="blog-details-text">
              <div className="bd-title">
                <p>
                  Thinking about overseas adventure travel? Have you put any thought into the best places to go when it
                  comes to overseas adventure travel? Nepal is one of the most popular places of all, when you visit
                  this magical country you will have the best adventures right there at your doorstep. Only overseas
                  adventure travel in Nepal will give you these kinds of opportunities so if this is not on your list of
                  possible places to visit yet then now is the time to put it on there!
                </p>
                <p>
                  In Nepal your overseas adventure travel is going to be fascinating. You will get to see the Himalayan
                  Mountains and experience all that the rich Nepalese culture has to offer. They are an amazing people
                  who have managed to hang on to their own culture and beliefs longer than most other countries. When
                  overseas adventure travel takes you to Nepal you will have the chance to see all of the fantastic and
                  one of a kind lakes and forests and you can even spend days or weeks camping out in their forests with
                  a specialized guide. And the waterfalls in Nepal are to die for, you will never see anything more
                  gorgeous in your life as their waterfalls! This should be at the top of your overseas adventure travel
                  destination list for sure!
                </p>
              </div>
              <div className="bd-pic">
                <div className="bp-item">
                  <img src="img/blog/blog-details/blog-details-1.jpg" alt="Nepal Adventure" />
                </div>
                <div className="bp-item">
                  <img src="img/blog/blog-details/blog-details-2.jpg" alt="Himalayas" />
                </div>
                <div className="bp-item">
                  <img src="img/blog/blog-details/blog-details-3.jpg" alt="Camping in Nepal" />
                </div>
              </div>
              <div className="bd-more-text">
                <div className="bm-item">
                  <h4>If you live in New York City</h4>
                  <p>
                    You know all about the traffic there. Getting places is often next to impossible, even with the
                    gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with
                    their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more
                    affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport
                    transportation, or to drive wherever you wish to go.
                  </p>
                </div>
                <div className="bm-item">
                  <h4>Every time I hail a cab in New York City</h4>
                  <p>
                    I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks
                    English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d
                    get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that
                    were very pleasant. And given how much they cost by now, going with a limo makes even more sense.
                  </p>
                </div>
              </div>
              <div className="tag-share">
                <div className="tags">
                  <a href="#">Travel Trip</a>
                  <a href="#">Camping</a>
                  <a href="#">Event</a>
                </div>
                <div className="social-share">
                  <span>Share:</span>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="comment-option">
                <h4>2 Comments</h4>
                <div className="single-comment-item first-comment">
                  <div className="sc-author">
                    <img src="img/blog/blog-details/avatar/avatar-1.jpg" alt="Comment Author" />
                  </div>
                  <div className="sc-text">
                    <span>27 Aug 2019</span>
                    <h5>Brandon Kelley</h5>
                    <p>
                      Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                      quia non numquam eius modi tempora. incidunt ut labore et dolore magnam.
                    </p>
                    <a href="#" className="comment-btn">
                      Like
                    </a>
                    <a href="#" className="comment-btn">
                      Reply
                    </a>
                  </div>
                </div>
                <div className="single-comment-item reply-comment">
                  <div className="sc-author">
                    <img src="img/blog/blog-details/avatar/avatar-2.jpg" alt="Comment Author" />
                  </div>
                  <div className="sc-text">
                    <span>27 Aug 2019</span>
                    <h5>Brandon Kelley</h5>
                    <p>
                      Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                      quia non numquam eius modi tempora. incidunt ut labore et dolore magnam.
                    </p>
                    <a href="#" className="comment-btn">
                      Like
                    </a>
                    <a href="#" className="comment-btn">
                      Reply
                    </a>
                  </div>
                </div>
                <div className="single-comment-item second-comment">
                  <div className="sc-author">
                    <img src="img/blog/blog-details/avatar/avatar-3.jpg" alt="Comment Author" />
                  </div>
                  <div className="sc-text">
                    <span>27 Aug 2019</span>
                    <h5>Brandon Kelley</h5>
                    <p>
                      Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                      quia non numquam eius modi tempora. incidunt ut labore et dolore magnam.
                    </p>
                    <a href="#" className="comment-btn">
                      Like
                    </a>
                    <a href="#" className="comment-btn">
                      Reply
                    </a>
                  </div>
                </div>
              </div>
              <div className="leave-comment">
                <h4>Leave A Comment</h4>
                <form action="#" className="comment-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="col-lg-12 text-center">
                      <input type="text" placeholder="Website" />
                      <textarea placeholder="Messages"></textarea>
                      <button type="submit" className="site-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsSection;

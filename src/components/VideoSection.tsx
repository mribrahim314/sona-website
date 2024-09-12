
import './VideoSection.css';

 

const VideoSection = () => {
  return (
    <section className="video-section" style={{ backgroundImage: `url('/sona-website/img/video-bg.jpg')` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="video-text">
              <h2>Discover Our Hotel & Services.</h2>
              <p>It’s Hurricane Season But We Are Visiting Hilton Head Island</p>

                <img src={"/sona-website/img/play.png"} alt="Play button" className='play-btn' />
 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

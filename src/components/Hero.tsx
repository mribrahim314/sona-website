import OwlCarousel from "react-owl-carousel";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./Hero.css";
import { forwardRef, useState } from "react";

const CustomInput = forwardRef<HTMLDivElement, { value: string; onClick: () => void }>(
  ({ value, onClick }, ref) => (
    <div className="custom-date-input" onClick={onClick} ref={ref} style={{ position: 'relative', width: '100%' }}>
      <input
        type="text"
        value={value}
        readOnly
        className="date-input"
        style={{ paddingRight: '30px' }} 
      />
      <i className="bi bi-calendar"
        style={{ position: 'absolute', right: '10px', top: '40%', transform: 'translateY(-50%)', cursor: 'pointer' }}
      />
    </div>
  )
);

export default function Hero() {


    const options = {
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        smartSpeed: 500,
        animateIn: 'fadeIn'
      };
      const [checkInDate, setCheckInDate] = useState<Date | null>(null);
const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero-text">
                <h1>Sona A Luxury Hotel</h1>
                <p>
                  Here are the best hotel booking sites, including
                  recommendations for international travel and for finding
                  low-priced hotel rooms.
                </p>
                <a href="#" className="primary-btn">
                  Discover Now
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
              <div className="booking-form">
                <h3>Booking Your Hotel</h3>
                <form action="#">
                  <div className="check-date">
                    <label htmlFor="date-in">Check In:</label>
                    <DatePicker
        
        selected={checkInDate}
        onChange={(date: Date | null) => setCheckInDate(date)}
        customInput={<CustomInput value={checkInDate ? checkInDate.toDateString() : ''}
        onClick={() => {}} />} 
        id="date-in"
      />
                  </div>
                  <div className="check-date">
      <label htmlFor="date-out">Check Out:</label>

      <DatePicker
        
        selected={checkOutDate}
        onChange={(date: Date | null) => setCheckOutDate(date)}
        customInput={<CustomInput value={checkOutDate ? checkOutDate.toDateString() : ''}
        onClick={() => {}} />} 
        id="date-out"
      />
    </div>

    <div className="select-option">
                                <label htmlFor="guest" >Guests:</label>
                                <select id="guest" className="nice-select">
                                    <option value="">2 Adults</option>
                                    <option value="">3 Adults</option>
                                </select>
                            </div>
    <div className="select-option">
      
                    <label htmlFor="room">Room:</label>
                    <select id="room" className="nice-select">
                      <option value="">1 Room</option>
                      <option value="">2 Room</option>
                    </select>
                  </div>
                  <button type="submit">Check Availability</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <OwlCarousel className="hero-slider" {...options}>
    <div className="hs-item" style={{ backgroundImage: 'url(/sona-website/img/hero/hero-1.jpg)' }}></div>
    <div className="hs-item" style={{ backgroundImage: 'url(/sona-website/img/hero/hero-2.jpg)' }}></div>
    <div className="hs-item" style={{ backgroundImage: 'url(/sona-website/img/hero/hero-3.jpg)' }}></div>
  </OwlCarousel>
      </section>
    </>
  );
}

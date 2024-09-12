import { forwardRef, useState } from 'react';
import './RoomDetailsSection.css'
import DatePicker from 'react-datepicker';


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

const RoomDetailsSection = () => {

    const [checkInDate, setCheckInDate] = useState<Date | null>(null);
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  return (
    <section className="room-details-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="room-details-item">
              <img src="img/room/room-details.jpg" alt="Room Details" style={{marginTop:"0",marginLeft:0,marginRight:0,width:"100%"}}/>
              <div className="rd-text">
                <div className="rd-title">
                  <h3>Premium King Room</h3>
                  <div className="rdt-right">
                    <div className="rating">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-half"></i>
                    </div>
                    <a href="#">Booking Now</a>
                  </div>
                </div>
                <h2>159$<span>/Pernight</span></h2>
                <table>
                  <tbody>
                    <tr>
                      <td className="r-o">Size:</td>
                      <td>30 ft</td>
                    </tr>
                    <tr>
                      <td className="r-o">Capacity:</td>
                      <td>Max person 5</td>
                    </tr>
                    <tr>
                      <td className="r-o">Bed:</td>
                      <td>King Beds</td>
                    </tr>
                    <tr>
                      <td className="r-o">Services:</td>
                      <td>Wifi, Television, Bathroom, ...</td>
                    </tr>
                  </tbody>
                </table>
                <p className="f-para">
                  Motorhome or Trailer that is the question for you. Here are some of the advantages and disadvantages
                  of both, so you will be confident when purchasing an RV. When comparing RVs, a motorhome or a travel
                  trailer, should you buy a motorhome or fifth wheeler? The advantages and disadvantages of both are
                  studied so that you can make your choice wisely when purchasing an RV. Possessing a motorhome or fifth
                  wheel is an achievement of a lifetime. It can be similar to sojourning with your residence as you
                  search the various sites of our great land, America.
                </p>
                <p>
                  The two commonly known recreational vehicle classes are the motorized and towable. Towable RVs are the
                  travel trailers and the fifth wheel. The RV travel trailer or fifth wheel has the attraction of being
                  towed by a pickup or a car, thus giving the adaptability of possessing transportation for you when you
                  are parked at your campsite.
                </p>
              </div>
            </div>
            <div className="rd-reviews">
              <h4>Reviews</h4>
              <div className="review-item">
                <div className="ri-pic">
                  <img src="img/room/avatar/avatar-1.jpg" alt="Avatar" />
                </div>
                <div className="ri-text">
                  <span>27 Aug 2019</span>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                  <h5>Brandon Kelley</h5>
                  <p>
                    Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                    quia non numquam eius modi tempora. incidunt ut labore et dolore magnam.
                  </p>
                </div>
              </div>
              <div className="review-item">
                <div className="ri-pic">
                  <img src="img/room/avatar/avatar-2.jpg" alt="Avatar" />
                </div>
                <div className="ri-text">
                  <span>27 Aug 2019</span>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                  <h5>Brandon Kelley</h5>
                  <p>
                    Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                    quia non numquam eius modi tempora. incidunt ut labore et dolore magnam.
                  </p>
                </div>
              </div>
            </div>
            <div className="review-add">
              <h4>Add Review</h4>
              <form action="#" className="ra-form">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" placeholder="Name*" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" placeholder="Email*" />
                  </div>
                  <div className="col-lg-12">
                    <div>
                      <h5>Your Rating:</h5>
                      <div className="rating">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </div>
                    </div>
                    <textarea placeholder="Your Review"></textarea>
                    <button type="submit">Submit Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="room-booking">
              <h3>Your Reservation</h3>
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
    </section>
  );
};

export default RoomDetailsSection;

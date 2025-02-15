
import './Rooms.css';


interface Room {
    img: string;
    title: string;
    price: string;
    size: string;
    capacity: string;
    bed: string;
    services: string;
  }

const roomsData:Room[] = [
  { img: '/sona-website/img/room/room-1.jpg', title: 'Premium King Room', price: '159$', size: '30 ft', capacity: 'Max person 3', bed: 'King Beds', services: 'Wifi, Television, Bathroom,...' },
  { img: '/sona-website/img/room/room-2.jpg', title: 'Deluxe Room', price: '159$', size: '30 ft', capacity: 'Max person 5', bed: 'King Beds', services: 'Wifi, Television, Bathroom,...' },
  { img: '/sona-website/img/room/room-3.jpg', title: 'Double Room', price: '159$', size: '30 ft', capacity: 'Max person 2', bed: 'King Beds', services: 'Wifi, Television, Bathroom,...' },
  { img: '/sona-website/img/room/room-4.jpg', title: 'Luxury Room', price: '159$', size: '30 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Television, Bathroom,...' },
  { img: '/sona-website/img/room/room-5.jpg', title: 'Room With View', price: '159$', size: '30 ft', capacity: 'Max person 1', bed: 'King Beds', services: 'Wifi, Television, Bathroom,...' },
  { img: '/sona-website/img/room/room-6.jpg', title: 'Small View', price: '159$', size: '30 ft', capacity: 'Max person 2', bed: 'King Beds', services: 'Wifi, Television, Bathroom,...' },
];


const RoomItem: React.FC<{ room: Room }> = ({ room }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="room-item">
        <img src={room.img} alt={room.title} />
        <div className="ri-text">
          <h4>{room.title}</h4>
          <h3 className='pricing'>{room.price}<span>/Pernight</span></h3>
          <table>
            <tbody>
              <tr>
                <td className="r-o">Size:</td>
                <td>{room.size}</td>
              </tr>
              <tr>
                <td className="r-o">Capacity:</td>
                <td>{room.capacity}</td>
              </tr>
              <tr>
                <td className="r-o">Bed:</td>
                <td>{room.bed}</td>
              </tr>
              <tr>
                <td className="r-o">Services:</td>
                <td>{room.services}</td>
              </tr>
            </tbody>
          </table>
          <a href="#" className="primary-btn">More Details</a>
        </div>
      </div>
    </div>
  );
};

const RoomsSection = () => {
  return (
    <section className="rooms-section spad">
      <div className="container">
        <div className="row">
          {roomsData.map((room, index) => (
            <RoomItem key={index} room={room} />
          ))}
        </div>
        <div className="col-lg-12">
          <div className="room-pagination">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">
              Next <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;

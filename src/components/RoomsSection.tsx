
import './RoomsSection.css'; 

const RoomSection = () => {

  const rooms = [
    {
      title: 'Double Room',
      price: 199,
      image: '/sona-website/img/room/room-b1.jpg',
      size: '30 ft',
      capacity: 'Max person 5',
      bed: 'King Beds',
      services: 'Wifi, Television, Bathroom,...'
    },
    {
      title: 'Premium King Room',
      price: 159,
      image: '/sona-website/img/room/room-b2.jpg',
      size: '30 ft',
      capacity: 'Max person 5',
      bed: 'King Beds',
      services: 'Wifi, Television, Bathroom,...'
    },
    {
      title: 'Deluxe Room',
      price: 198,
      image: '/sona-website/img/room/room-b3.jpg',
      size: '30 ft',
      capacity: 'Max person 5',
      bed: 'King Beds',
      services: 'Wifi, Television, Bathroom,...'
    },
    {
      title: 'Family Room',
      price: 299,
      image: '/sona-website/img/room/room-b4.jpg',
      size: '30 ft',
      capacity: 'Max person 5',
      bed: 'King Beds',
      services: 'Wifi, Television, Bathroom,...'
    }
  ];

  return (
    <section className="hp-room-section">
      <div className="container-fluid">
        <div className="hp-room-items">
          <div className="row">
            {rooms.map((room, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div
                  className="hp-room-item set-bg"
                  style={{ backgroundImage: `url(${room.image})` }}
                >
                  <div className="hr-text">
                    <h3>{room.title}</h3>
                    <h2>{room.price}$<span>/Pernight</span></h2>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomSection;

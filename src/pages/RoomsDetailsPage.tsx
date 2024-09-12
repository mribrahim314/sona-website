
import Breadcrumb from '../components/Breadcrumb'
import RoomDetailsSection from '../components/RoomDetailsSection'
import Footer from '../components/Footer'

export default function RoomsDetailsPage() {
  return (
    <>
    <Breadcrumb title={'Our Rooms'} links={[{name:"Home",url:"/home"},{name:"Rooms"}]}/>
    <RoomDetailsSection/>
    <Footer/>
    </>
  )
}

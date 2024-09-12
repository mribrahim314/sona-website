import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Rooms from "../components/Rooms";


export default function RoomsPage() {
  return (
    <>
    <Breadcrumb title={"Rooms"} links={[{name:"Home",url:"/home"},{name:"Rooms"}]}/>
    <Rooms/>
    <Footer/>
    </>
  )
}

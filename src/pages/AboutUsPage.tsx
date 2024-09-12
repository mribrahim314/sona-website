import AboutUsPageSection from "../components/AboutUsPageSection";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import GallerySection from "../components/GallerySection";
import VideoSection from "../components/VideoSection";



export default function AboutUspage() {
  return (
    <>
    <Breadcrumb title={"About Us"} links={[{name:"Home",url:"/home"},{name:"About Us"}]}/>
    <AboutUsPageSection/>
    <VideoSection/>
    <GallerySection/>
    <Footer/>
    </>
  )
}

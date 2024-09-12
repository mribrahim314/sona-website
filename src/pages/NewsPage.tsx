import BlogNewsSection from "../components/BlogNewsSection";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";


export default function NewsPage() {
  return (
    <>
    <Breadcrumb title={'Blog'} links={[{name:"Home",url:"/home"},{name:"Blog Grid"}]}/>
    <BlogNewsSection/>
    <Footer/>
    </>
  )
}

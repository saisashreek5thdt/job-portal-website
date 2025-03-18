import MakesUs from "@/Components/MakesUs";
import AboutUs from "../../Components/AboutUs";
import OurStory from "@/Components/OurStory";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

const AboutPage=()=>{
    return(
        <>
           <div className="">
               <Header/>
               <AboutUs/>
               <OurStory/>
               <MakesUs/>
               <Footer/>
           </div>
        </>
    );
}

export default AboutPage;
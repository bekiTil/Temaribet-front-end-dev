import React from "react";
import Cover from "../components/HomePageComponents/Cover";
import Description from "../components/HomePageComponents/Description";
import Header from "../components/HomePageComponents/Header";
import Service from "../components/HomePageComponents/Service";
import WhyUs from "../components/HomePageComponents/WhyUs";
import Work from "../components/HomePageComponents/Work";
import Achievement from "../components/HomePageComponents/Achievement";
import Feedback from "../components/HomePageComponents/Feedback";
import Another from "../components/HomePageComponents/Another";
import Footer from "../components/HomePageComponents/Footer";



export default function Home() {
  return (
    <div className="overflow-x-hidden">
   <Header />
   <Cover />
   <Description />
   <Service/>
   <WhyUs />
   <Work />
   <Achievement />
   <Feedback />
   <Another />
   <Footer />
   </div>
    
  )
}
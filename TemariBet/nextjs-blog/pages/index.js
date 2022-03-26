import Cover from "../components/Cover";
import Description from "../components/Description";
import Header from "../components/Header";
import Service from "../components/Service";
import WhyUs from "../components/WhyUs";
import Work from "../components/Work";
import Achievement from "../components/Achievement";
import Feedback from "../components/Feedback";
import Another from "../components/Another";



export default function Home() {
  return (
    <>
   <Header />
   <Cover />
   <Description />
   <Service/>
   <WhyUs />
   <Work />
   <Achievement />
   <Feedback />
   <Another />
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}
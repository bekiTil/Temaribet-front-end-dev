import Footer from "./Footer";
import Header from "./Header";
import ParentLogin from "./ParentLogin";

export default function Container() {
  return <div className=" px-10 sm:px-20 md:px-44 lg:px-1 xl:px-20 2xl:px-64 h-screen  ">
      <Header />
      <ParentLogin />
      <Footer />
    </div>;
  
}


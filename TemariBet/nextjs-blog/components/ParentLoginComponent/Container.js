import Footer from "./Footer";
import Header from "./Header";
import ParentLogin from "./ParentLogin";

export default function Container() {
  return (
    <div className="px-8 md:px-28 h-screen ">
      <Header />
      <ParentLogin />
      <Footer />
    </div>
  );
}


import { Button, Row, Col } from "antd";
import Image from "next/image";
import "antd/dist/antd.css";
const Cover = () => {
  return (
    // <div class="bg-yellow-400/75 pt-9 h-screen ">
    //     <div class="items-center lg:flex">
    //         <div class="w-full sm:items-center lg:w-1/2 font-serif ml-20 mt-40 ">
    //             <div class="lg:w-full">
    //                 <h1 class=" text-blue-900 text-6xl font-bold mt-20 dark:text-white  ">We Prepare For Life.</h1>
    //                 <h1 class=" text-white text-6xl font-bold  dark:text-white ">Not just exam!</h1>
    //                 <p class="mt-2 text-2xl font-semibold text-blue-900 dark:text-gray-400">Top tutors from all over Addis Abeba
    //                     <br />
    //                     managed by Temaribet</p>
    //                 <button class=" px-12 py-3 rounded-full mt-20 text-3xl font-bold text-white  transition-colors duration-200 transform bg-blue-900 lg:w-auto hover:bg-blue-700  focus:outline-none focus:bg-blue-600">Get tutor</button>
    //             </div>
    //         </div>

    //         <div class="flex items-center justify-center w-full mt-20 lg:mt-20 lg:w-1/2">

    //             <img className = " lg:max-w-2xl" src="https://as1.ftcdn.net/v2/jpg/02/86/30/06/1000_F_286300644_M0x8rMQY5qUvfCzNebKGXuCpn2Q50lKD.jpg" alt="Catalogue-pana.svg" />

    //         </div>

    //     </div>
    // </div>

    <header className="bg-yellow-400/75 dark:bg-gray-800 h-screen">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="">
              <h1 className="text-3xl font-bold text-blue-900 dark:text-white md:text-5xl">
                We prepare for life
              </h1>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio.
              </p>
              <button class="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Shop Now
              </button>
            </div>
          </div>

          <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              class="w-full h-full lg:max-w-2xl"
              src="https://as1.ftcdn.net/v2/jpg/02/86/30/06/1000_F_286300644_M0x8rMQY5qUvfCzNebKGXuCpn2Q50lKD.jpg"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Cover;

import { Button, Col, Row } from "antd";
import "antd/dist/antd.css";
import Image from 'next/image'

const Another = () => {
  
  return (

    <section className="bg-white font-serif">
      <div className="container px-12 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-2/5 lg:mr-8 lg:border-r border-gray-500 ">
            <Image
              className="w-full rounded-full"
              src="/another.jpg"
              alt="young girl image"
              width="450"
              height = {"450"}
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg mt-20 lg:mt-0">
              <h3 className="text-5xl text-center lg:text-left font-bold text-[#1A3765]">
                Get the perfect tutor
              </h3>

              <h3 className="text-yellow-400 text-center lg:text-left text-5xl font-bold -mt-3">
                for your child
              </h3>

              <p className="text-2xl text-center lg:text-left text-[#1A3765]">
                Top tutors from all over Addis Ababa managed by Temaribet.
              </p>
              <div className = "text-center lg:text-left">
                <button className=" px-12 py-3 rounded-full mt-20 text-4xl font-bold text-white  transition-colors duration-200 transform bg-[#1A3765] lg:w-auto hover:bg-blue-700  focus:outline-none focus:bg-blue-600">
                  Get tutor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Another;
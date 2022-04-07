import { Button, Row, Col } from 'antd';
import Image from "next/image"
import 'antd/dist/antd.css';

const Cover = () => {
    return (
        
            <div className="bg-[#FED607] flex flex-col justify-end min-h-screen">
                <div className="lg:flex">
                    <div className="w-full sm:items-center  md:mb-20">
                        <div className="lg:w-full mx-5 md:mx-16 mt-5 md:mt-20 pt-40">
                            <h1 className=" text-[#1A3765] text-4xl lg:text-7xl 3xl:text-8xl  font-serif">We prepare for life.</h1>
                            <h1 className=" text-white text-4xl lg:text-7xl 3xl:text-8xl font-medium font-serif ">Not just exam!</h1>
                            <p className="mt-2 md:mb-20 text-2xl 3xl:text-4xl font-serif text-[#1A3765]">Top tutors from all over Addis Abeba
                                <br />
                                managed by Temaribet</p>
                            <button className="w-full  px-14 py-5 mb-6 lg:rounded-full font-serif mt-6 text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-medium text-white transition-colors duration-200 transform bg-[#1A3765] lg:w-auto hover:bg-blue-700  focus:outline-none focus:bg-blue-600">Get tutor</button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-end w-full ">
                    <Image
                        className="w-full"
                        src="/temaribet.png.png"
                        alt="young girl image"
                        width={"600"}
                        height = {"700"}
                    />

                    </div>
                </div>
            </div>
    )
}
export default Cover;
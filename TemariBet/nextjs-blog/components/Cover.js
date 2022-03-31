import { Button, Row, Col } from 'antd';
import Image from "next/image"
import 'antd/dist/antd.css';

const Cover = () => {
    return (
        
            <div className="bg-yellow-400 md:pt-10 min-h-screen">
                <div className="items-center lg:flex min-h-screen">
                    <div className="w-full sm:items-center lg:w-1/2 min-h-screen">
                        <div className="lg:w-full mx-5 md:mx-16 mt-5 md:mt-20 pt-40">
                            <h1 className=" text-blue-900 text-4xl lg:text-7xl font-medium font-serif">We prepare for life.</h1>
                            <h1 className=" text-white text-4xl lg:text-7xl font-medium font-serif ">Not just exam!</h1>
                            <p className="mt-2 text-2xl font-serif text-blue-900">Top tutors from all over Addis Abeba
                                <br />
                                managed by Temaribet</p>
                            <button className="w-full px-11 py-3 mb-6 rounded-full font-serif mt-6 text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-white transition-colors duration-200 transform bg-blue-900 lg:w-auto hover:bg-blue-700  focus:outline-none focus:bg-blue-600">Get tutor</button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full md:mt-10 md:pt-28  lg:w-1/2">
                    <Image
                        className="w-full h-full"
                        src="/temaribet.png.png"
                        alt="young girl image"
                        width={"450"}
                        height = {"590"}
                    />

                    </div>
                </div>
            </div>
           
       
    )
}
export default Cover;
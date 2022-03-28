import { Button, Row, Col } from 'antd';
import Image from "next"
import 'antd/dist/antd.css';
const Cover = () => {
    return (
        
            <div className="bg-yellow-300 pt-10 ">
                <div className="items-center lg:flex">
                    <div className="w-full sm:items-center lg:w-1/2 ">
                        <div className="lg:w-full pl-8">
                            <h1 className=" text-blue-900 text-6xl font-medium font-serif  dark:text-white ">We Prepare For Life.</h1>
                            <h1 className=" text-white text-6xl font-medium font-serif dark:text-white ">Not just exam</h1>
                            <p className="mt-2 text-2xl font-serif text-blue-900 dark:text-gray-400">Top tutors from all over Addis Abeba
                                <br />
                                managed by Temaribet</p>
                            <button className=" px-11 py-2 rounded-full font-serif mt-6 text-lg md:text-xl font-medium text-white uppercase transition-colors duration-200 transform bg-blue-900 lg:w-auto hover:bg-blue-700  focus:outline-none focus:bg-blue-600">Get tutor</button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6  lg:mt-0 lg:w-1/2">
                        
                        <img className="object-scale-down" src="https://www.picng.com/upload/children/png_children_36648.png" alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </div>
           
       
    )
}
export default Cover;
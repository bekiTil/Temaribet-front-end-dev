import { Button, Row, Col } from 'antd';
import Image from "next"
import 'antd/dist/antd.css';
const Cover = () => {
    return (
        
            <div class="bg-yellow-300 pt-9 ">
                <div class="items-center lg:flex">
                    <div class="w-full sm:items-center lg:w-1/2 ">
                        <div class="lg:w-full pl-8">
                            <h1 class=" text-blue-900 text-6xl font-bold   dark:text-white ">We Prepare For Life.</h1>
                            <h1 class=" text-white text-6xl font-bold  dark:text-white ">Not just exam</h1>
                            <p class="mt-2 text-2xl font-semibold text-blue-900 dark:text-gray-400">Top tutors from all over Addis Abeba
                                <br />
                                managed by Temaribet</p>
                            <button class=" px-11 py-2 rounded-full mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-900 lg:w-auto hover:bg-blue-700  focus:outline-none focus:bg-blue-600">Get tutor</button>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        
                        <img class=" lg:max-w-2xl" src="https://www.picng.com/upload/children/png_children_36648.png" alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </div>
           
       
    )
}
export default Cover;
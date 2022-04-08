import { Col, Row } from 'antd';
const Feedback = () => {
    return (
        
        <section className="bg-yellow-50 md:bg-[#ECF2FB] font-serif mt-20 min-h-screen">
            <div className="  py-12 mx-5 md:mr-12 md:mx-16 h-full">
                <div className="mt-7 mx-auto">
                    <h2 className="font-semibold text-4xl  md:text-5xl lg:text-6px 2xl:text-7xl text-[#1A3765]">Why parents love <span className="text-yellow-300">temaribet</span></h2>
                </div>

                <div className="w-full mt-20 mb-36">
                    <div className="lg:flex lg:justify-between mt-7 text-blue-900">
                        <div className="w-full  lg:w-1/2">
                            <div className="p-8 lg:p-12">
                                <div>
                                    <p className="font-bold text-2xl lg:text-3xl 2xl:text-5xl">Abinet Legesse</p>
                                    <p className="-mt-6 lg:-mt-4 text-xl lg:text-2xl 2xl:text-4xl text-black opacity-30">Father</p>
                                </div>
                                
                                <p className="mt-10 text-2xl 2xl:text-4xl">
                                    We have found the approach of tutors at Temaribet 
                                    to be student-centered. We had the opportunity to 
                                    observe her tutorial session and it has been a great 
                                    relief for us to see her enjoy learning with active 
                                    participation throughtout her session. This helped 
                                    Hananel to show significant improvement not only in 
                                    her academic achievement but also her change of perspective to 
                                    spend ample time working on her school activities.
                                </p>
                            </div>
                        </div>

                        <div className="mt-1 lg:mt-0 lg:flex-1 lg:border-l border-gray-500">
                            <div className="p-8 lg:p-12 lg:ml-5">
                                <div>
                                    <p className="font-bold text-2xl lg:text-3xl 2xl:text-5xl">Hananel Girma</p>
                                    <p className="-mt-6 lg:-mt-4 text-xl lg:text-2xl 2xl:text-4xl text-black opacity-30">Student</p>
                                </div>
                                
                                <p className="mt-10 text-2xl 2xl:text-4xl">
                                    The tutorial helped me to improve my chemistry 
                                    assessment. It become interesting and made me 
                                    want to study more on my own.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div></div>
            </div>
        </section>

    )
}
export default Feedback;
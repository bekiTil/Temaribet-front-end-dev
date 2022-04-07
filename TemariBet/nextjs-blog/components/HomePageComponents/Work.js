import { Button,List, Col, Row } from 'antd';
import Link from 'next/link';
import WorkTogatherCard from './child_components/WorkTogatherCard';

import 'antd/dist/antd.css';
const Work = () => {
    
    return (
        <div className='mx-5 md:mx-16 mt-20 mb-20'>
            <header className='text-3xl lg:text-5xl 2xl:text-6xl font-semibold font-serif text-[#1A3765]'>How we will work together?</header>
            <Row gutter={[10, 24]} justify="space-around" >
                <Col xs={16} xl={6} 
                  > 
                    <WorkTogatherCard 
                        title = "Register"
                        description = "Fill all the necessary info about your kid."
                        image = "/sheet1.png"
                    />
                </Col>

                <Col xs={16} xl={6}   >
                
                    <WorkTogatherCard 
                        title = "Find a match"
                        description = "We select the perfect tutor in 48 hours."
                        image = "/findamatch.jpg"
                    />
                </Col>

                <Col xs={16} xl={6}  >
                    <WorkTogatherCard 
                        title = "Academic success"
                        description = "You will witness your kid performing excellent."
                        image = "/surge1.png"
                    />
                </Col>
            </Row>
            <p className='text-xl xl:text-3xl text-center text-black-900 font-medium font-serif mt-10'>Ready to excel your child? <Link href = {"#"}><a className='text-2xl xl:text-4xl xl:font-bold text-blue-700 font-serif'>Get tutor</a></Link></p>
        </div>
    )
}
export default Work;
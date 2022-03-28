import { Button,List, Col, Row } from 'antd';
import Link from 'next/link';
import WorkTogatherCard from './child_components/WorkTogatherCard';

import 'antd/dist/antd.css';
const Work = () => {
    
    return (
        <div className='ml-20 mt-20 mb-20'>
            <header className='text-3xl lg:text-5xl font-serif text-blue-900'>How we will work togather?</header>
            <Row gutter={[10, 24]} justify="space-around" >
                <Col xs={16} xl={6} 
                  > 
                    <WorkTogatherCard 
                        title = "Register"
                        description = "Fill all the necessary info about your kid."
                        image = "/identified.png"
                    />
                </Col>

                <Col xs={16} xl={6}   >
                
                    <WorkTogatherCard 
                        title = "Find a match"
                        description = "We select the perfect tutor in 48 hours."
                        image = "/findamatch.png"
                    />
                </Col>

                <Col xs={16} xl={6}  >
                    <WorkTogatherCard 
                        title = "Academic success"
                        description = "You will witness your kid performing excellent."
                        image = "/surgeons.png"
                    />
                </Col>
            </Row>
            <p className='text-xl text-center text-black-900 font-medium font-serif mt-10'>Ready to excel your child? <Link href = {"#"}><a className='text-2xl text-blue-700 font-serif'>Get tutor</a></Link></p>
        </div>
    )
}
export default Work;
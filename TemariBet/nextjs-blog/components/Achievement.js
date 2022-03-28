import { Button,List, Col, Row } from 'antd';
import Stats from "./Statistics.js";
const Achievement=()=>{
    return (
        <div className="p-10 pb-20 bg-gradient-to-r font-serif from-indigo-900 via-black-900 to-black ">
            <Col   xs={24}  sm={20} md={10}  xl={6} style={{justifyContent:"center"}}>
            <div className="p-7">
            <h1 className="text-7xl text-bold text-white p-8 pt-4 pb-1 pr-44 "> We are the little angel of your kids but we can
            only help if you let us </h1>
            <p className="text-4xl text-gray-400 p-8 pt-0 pr-96">loremAdipisicing incididunt labore cillum sit sunt ullamco anim ea co
            nsequat laboris proident consectetur. Id eiusmod sint ut dolor deserunt. Ullam
            magna anim pariatur duis incididunt  elit Lorem excepteur.a.</p>
            </div>
            </Col>
        
        
            <Row gutter={[16,16]}>
                <Stats text = "FAMILIES"  numbers = "350+"></Stats>
                <Stats text = "SCHOOLS"  numbers = "50+"></Stats>
                <Stats text = "TUTORS"  numbers = "10,000+"></Stats>
                <Stats text = "VISION"  numbers = "1"></Stats>
            </Row>
        </div>
    )
}
export default Achievement;
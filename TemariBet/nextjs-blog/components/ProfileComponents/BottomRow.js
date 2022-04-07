import React from 'react'
import {Row ,Col} from "antd";
import BottomCard from './childComponents/BottomCard';
import "antd/dist/antd.css";

const BottomRow = (props) => {
  return (
    <div className='w-full mt-10'>
        <Row gutter={[0,8]} justify={"space-between"} >
            <Col xs={24} sm={11} xl={4} md={7}  >
                <BottomCard 
                    title = "Available in"
                />
            </Col>
                
            <Col xs={24} sm={11} xl={4} md={7}  >
                <BottomCard 
                    title = "Available in"
                />
            </Col> 

            <Col xs={24} sm={11} xl={4} md={7}>
                <BottomCard 
                    title = "Available in"
                />
            </Col>

            <Col xs={24} sm={11} xl={4}  md={7} >
                <BottomCard 
                    title = "Available in"
                />
            </Col>
            <Col xs={24} sm={11} xl={4}  md={7} >
                <BottomCard 
                    title = "Available in"
                />
            </Col>
        </Row>
    </div>
  )
}

export default BottomRow
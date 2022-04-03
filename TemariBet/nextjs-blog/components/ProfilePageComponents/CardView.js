import React from 'react'
import { Row, Col } from 'antd';
import ProfileCard from './childComponents/ProfileCard'

const CardView = () => {
  return (
    <div className='mt-6'>
        <Row gutter={[8,20]} justify={"space-between"} >

            <Col xs={24} xl={8} md={12}  >
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </Col>
                
            <Col xs={24} xl={8} md={12}  >
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </Col> 

            <Col xs={24} xl={8} md={12}  >
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </Col>

        </Row>
    </div>
  )
}

export default CardView
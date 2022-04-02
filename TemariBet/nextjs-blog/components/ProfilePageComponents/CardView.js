import React from 'react'
import { Row, Col } from 'antd';
import ProfileCard from './childComponents/ProfileCard'

const CardView = () => {
  return (
    <div>
        <Row gutter={[8,20]} justify={"space-between"} >

            <Col xs={24} xl={8} md={7}  >
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </Col>
                
            <Col xs={24} xl={8} md={7}  >
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </Col> 

            <Col xs={24} xl={8} md={7}  >
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </Col>

        </Row>
    </div>
  )
}

export default CardView
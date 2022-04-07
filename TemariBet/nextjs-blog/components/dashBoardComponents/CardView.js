import React from 'react'
import { Row, Col } from 'antd';
import ProfileCard from './childComponents/ProfileCard';
import places from '../../files/places';

const CardView = () => {
  return (
    <div className='mt-6'>
        <Row gutter={[8,20]} justify={"space-between"}>
            {places.map( (item, idx) => (
                <Col key = {idx} xs={24} xl={8} md={12}>
                    <ProfileCard 
                        place = {item.name}
                        description = {item.description}
                    />
                </Col>))}
        </Row>
    </div>
  )
}

export default CardView
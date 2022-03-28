import React from 'react'
import { Button,List, Col, Row } from 'antd';

function Stats({text, numbers}) {
  return (
<Col xs={24}  sm={20} md={10}  xl={6} style={{justifyContent:"center"}}>
    <div className="text-6xl text-center text-bold text-white"> {numbers}</div>
    <div className="text-4xl text-center  text-white"> {text}</div>
</Col>
  )
}

export default Stats
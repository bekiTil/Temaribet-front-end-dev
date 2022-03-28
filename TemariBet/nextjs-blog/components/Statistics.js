import React from 'react'
import { Button,List, Col, Row } from 'antd';

function Stats({text, numbers}) {
  return (
<Col   xs={24}  sm={20} md={10}  xl={6} style={{justifyContent:"center"}}>
  <div className='mb-40'>
  <div className="text-8xl text-center text-bold text-white "> {numbers}</div>
    <div className="text-4xl text-center pt-10 text-left  text-gray-400  text-white"> <span>{text}</span> </div>
  </div>

</Col>
  )
}

export default Stats
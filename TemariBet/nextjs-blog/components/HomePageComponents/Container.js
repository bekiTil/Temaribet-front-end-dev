import React from 'react'

const Container = (props) => {
  return (
    <div className='mx-5 md:mx-16'>
        {props.children}
    </div>
  )
}

export default Container

import React from 'react'
import TopLeftInfo from './childComponents/TopLeftInfo'
import TopRightInfo from './childComponents/TopRightInfo'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between'>
        <TopLeftInfo 
            name = "Selam Getu"
            status = "Active"
        />

        <TopRightInfo 
            phone1 = "+251956353612"
            phone2 = "+251956353612"
            email = "selamgetu@gmail.com"
            address = "Ayat Condominium"
        />
    </div>
  )
}

export default Header
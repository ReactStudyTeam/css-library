import React from 'react'
import ImageLayout from './components/ImageLayout'
import Description from './components/Description'
import Option from './components/Option'
import './DetailPage.css'

const DetailPage = () => {
  return (
    <>
      <div>
        <ImageLayout />
      </div>
      <div className="desc-option">
        <Description />
        <Option />
      </div>
    </>
  )
}

export default DetailPage

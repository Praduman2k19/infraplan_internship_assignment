import React from 'react'
import Loader from 'react-js-loader'
import './Loader.css'
const LoaderComp = () => {
  return (
    <div className='loaderComp'>
        <div className='loader'><Loader type="spinner-default" bgColor={"#ffffff"} color={'#FFFFFF'} size={100} /></div>
    </div>
  )
}

export default LoaderComp
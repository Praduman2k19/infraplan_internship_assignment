import React from 'react'
import './Card.css';
const Card = ({data}) => {
  // console.log(data)
  return (
    <div>
        <div className='card'>
            <div className='imgDiv'>
              <img src={data.picture.large} alt="" />
            </div>
            <div className='information'>
              <div className='nameBox'>
                <div className='name'>{data.name.title+" "+data.name.first+" "+data.name.last+" | "+data.dob.age }</div>
                <div className='nat'>{data.nat}</div>
              </div>
              <div className='email'>{data.email}</div>
              <div className='address'>{data.location.street.number+" "+data.location.street.name+", "+data.location.city+", "+data.location.state+", "+data.location.country+", "+data.location.postcode}</div>
            </div>
        </div>
    </div>
  )
}

export default Card

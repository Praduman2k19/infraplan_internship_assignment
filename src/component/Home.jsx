/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from 'react'
import Card from './Card'
import './home.css'
import Loader from 'react-js-loader'
import { useSelector } from "react-redux";

// import {connect} from 'react-redux'

// const buyCake=()=>{ //
//   return{
//       type:'SEARCH_DATA'
//   }
// }
// const mapStateToProps=state=>{
//   return{
//     searchData:state.searchData
//   }
// }
// const mapDispatchToProps=dispatch=>{
//   return{
//     buyCake:()=>dispatch(buyCake())
//   }
// }

const Home = (props) => {
 // console.log(props)
  
  const aState = useSelector((state) => state.cake.searchData);

  const [data, setdata] = useState([])
  const [searchData, setsearchData] = useState(aState);
  const [loader, setLoader] = useState('false')

  useEffect(() => {
    setsearchData(aState);
  }, [aState]);

  useEffect(() => {
    getData();
  }, [])

  const getData=async ()=>{
    setLoader(true)
    let BASE_URL='https://randomuser.me/api/?results=23'
   
    fetch(BASE_URL).then(r=>r.json()).then(res=>{
      let response=res
      setdata(response);
      console.log(data)
      //console.log("data")
      setLoader(false)
    })
  }


  
  return (
    <div className='home'>{props.searchData}
      {loader&&<div className='loader'><Loader type="spinner-default" bgColor={"#ffffff"} color={'#FFFFFF'} size={100} /></div>}
      <div className='content'>
        <div className='box'>
          {data.results&& data.results.filter(item => item.name.first.includes(searchData)).map((item)=>(<Card key={item.email} data={item} />))}
        </div>
    </div>
    </div>
  )
}
// export default connect(mapStateToProps, mapDispatchToProps)(Home)

export default Home

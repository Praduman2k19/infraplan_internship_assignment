import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Logo from '../logo.svg'
import './Nav.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {searchdataitem} from "../redux/action/action"
import LoaderComp from './Loader';

//const Nav = (state=initialState,action) => {
   const Nav = () => {
    const dispatch = useDispatch();
    const aState = useSelector((state) => state.cake.searchData);
    const [searchData, setsearchData] = useState(aState);
    const [loader, setloader] = useState(false)
  
  const handleChange=(ev)=>{
    setloader(true)
    setsearchData(ev.target.value)
    dispatch(searchdataitem(ev.target.value))
    console.log(aState) 
    setTimeout();
  }
  const stopLoader=()=>{
    setloader(false)
  }
  setTimeout(function() {
    stopLoader()
  }, 300);
  return (
    <div className="nav">
        {loader && <LoaderComp /> }
        <div className="imgDiv">
            <img src={Logo} alt="" />
        </div>
        <div className="searchDiv">
          <TextField id="outlined-search" label="Search..." type="search" value={searchData} onChange={handleChange}/>
        </div>
        
    </div>
  );
};
export default Nav;
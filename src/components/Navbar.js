import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addLocation, searchword } from '../Redux/DisplaySlice';



const Navbar = () => {

  
  
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [location,setLocationData]=useState({})

  const getLocation = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch location data');
        }
        const data = await response.json();
        setLocationData(data);
        dispatch(addLocation(data.address.county));


    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(()=>{
    getLocation();},[])
  
  
  
  
  let wrd="";
  let dispatch=useDispatch()
  return (
    <div>
     <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark bg-body-tertiary">
     <div className="container-fluid">
    <Link className="navbar-brand" to="#">Kuhl Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link active" to="/PopItems">Popular Items</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link active" to="#">Electronics</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link active" to="#">Fashion and Apparels</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" to="#">Grocery Items</Link>
        </li>
        <li className="nav-item mx-6">
          <Link className="nav-link active" to="/Cart">Your Cart</Link>
        </li>
        <li className="nav-item mx-2 nav-link active">
           <img src="https://cdn.pixabay.com/photo/2020/06/30/10/22/icon-5355889_1280.png" style={{height:"25px",width:"25px"}} alt="location"/>{`${location.name} ${location.address!==undefined?location.address.county:""}`} 
        </li>
        
         
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{wrd=e.target.value}}/>
        <button className="btn btn-outline-success" type="submit" onClick={()=>{dispatch(searchword(wrd))}}>Search</button>
      </form>
    </div>
  </div>
</nav>  
 

    </div>
  )
}

export default Navbar

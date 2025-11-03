import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [name, setname] = useState();
  const [address, setaddress] = useState();
  const [email, setemail] = useState();
  const [openningHours, setopenningHours] = useState();
  const [contactNumber, setcontactNumber] = useState();
  const [Latitude, setLatitude] = useState();
  const [Longitude, setLongitude] = useState();


  const register_pharmacy =  async () =>{

    try {
      const response = await axios.post("http://localhost:8000/pharmacy/add_pharmacy", {
          'name' : name,
          'address' : address,
          'email' : email,
          'openning_hours' : openningHours,
          'contact_number' : contactNumber,
          'latitude' : Latitude,
          'longitude' : Longitude
      })
  
      console.log(response)
      if(response.status == 200){
        alert("Successfully Registered Pharmacy!")
      }
    } catch (error) {
        console.log(error)
    }
  }



  return (
    <>
      <div className='header'>
        <h1>Pharma Admin Pannel</h1>
      </div>
      <div className='container'>
        <div className='form'>
          <h4>Register Pharmacy</h4>
          <input value={name} onChange={e => setname(e.target.value) } type="text" placeholder='Pharmacy Name' />
          <input value={address} onChange={e => setaddress(e.target.value) } type="text" placeholder='Pharmacy Address' />
          <input value={email} onChange={e => setemail(e.target.value) } type="text" placeholder='Email' />
          <input value={openningHours} onChange={e => setopenningHours(e.target.value) } type="text" placeholder='Opening Hours' />
          <input value={contactNumber} onChange={e => setcontactNumber(e.target.value) } type="text" placeholder='Contact Number'/>
          <input value={Latitude} onChange={e => setLatitude(e.target.value) } step={"any"} type="number" placeholder='Latitude'/>
          <input value={Longitude} onChange={e => setLongitude(e.target.value) } step={"any"} type="number" placeholder='Longitude'/>
          <button onClick={()=> register_pharmacy()} >Submit</button>
        </div>
      </div>
    </>
  )
}

export default App

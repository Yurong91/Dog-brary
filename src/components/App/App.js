// import stateHooks,components,css and axios
import './App.css';
import axios from 'axios';
import DogInfo from '../DogInfo/DogInfo';
import {useState} from 'react'
function App() {
// setup states variables
  const [dogBreed,setDogBreed] =useState('')
  const [dogInfo,setDogInfo] =useState([])

//Created handles for search bar and submit button
  const handleChange=(e)=>{
    console.log(e.target.value)
    setDogBreed(e.target.value)
  }
 // Connecting to third-party API with axios
 //We thought we'll need an API Key
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const baseUrl='https://api.thedogapi.com/'
    const query = 'v1/breeds/search?q='
    // console.log('url',baseUrl+query+dogBreed)
    try{
      const response= await axios.get(baseUrl+query+dogBreed)
      setDogInfo(response.data)
      console.log('Response',response.data)
    }
    catch(e){
      console.log(e)
    }
  }

  //return form and dogInfo and Harry will talk about that part
  return (
    <div className=" form-group App" >
      <h1>Dog-brary</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="breed">Breed:</label>
        <input type="text" required value={dogBreed} onChange={handleChange} class="form-control" id="exampleInputName2" placeholder="Type Breed Name Here" />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <DogInfo dogInfo={dogInfo}/>
    </div>
  );
}
export default App;
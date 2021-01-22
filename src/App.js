import './App.css';
import React,{useState} from 'react'
import Form from './components/form'
import Output from './components/output'
import back from './components/bg.jpg'

function App() {
  const [data, setData] = useState('')
  const API = 'http://api.openweathermap.org/data/2.5/weather?q='
const APIKEY = '&appid=ad3ffd3cda243452e12198103235f9a6'

const getCityName = async(name)=>{
    const response = await fetch(API+name+APIKEY)
    const request = await response.json()
    let main = request.main
    console.log(request)
    setData(request)
  }
  
  return (
    <div className="App">
    <img className='background' src={back} alt=""/>
      <h1>Название города</h1>
      <Form search={getCityName} />
      <Output data={data} />
    </div>
  );
}

export default App;

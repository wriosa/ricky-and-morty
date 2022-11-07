import { useEffect, useState } from 'react'
import Location from './assets/components/Location';
import './App.css'
import axios from 'axios';
import Input from './assets/components/Input';
import Residents from './assets/components/Residents';
import wallper from './assets/img/wallpapersden.com_rick-and-morty-2019-art_3840x2160.jpg';
import wallpertwo from './assets/img/Rick_and_Morty.svg'
function App() {
  const [location, setLocation] = useState([]);
//${randomId}
  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setLocation(res.data));
  }, []);
  console.log(location)
  return (
    <div className="App">
      <div className='images'>
      <img src={wallper} alt="" className="img-one" />
      <img src={wallpertwo} alt="" className="img-two" />
      </div>     
      <Input setLocation={setLocation} />
      <Location location={location} />
      <h2>Residents</h2>
      <ul>
        {location.residents?.map(residents => (
          <Residents residents={residents} key={residents} />
        ))}
      </ul>

    </div>
  )
}

export default App

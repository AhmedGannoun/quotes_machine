import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MCard from './components/Card'
import axios from 'axios';
import { Button } from '@mui/material'
import Divider from '@mui/material/Divider';

function App() {

  const [quotee, setQuotee] = useState("");
  const [image, setImage]= useState("");
  const [current,setCurrent]= useState(0);

  const ApiCall = async() => {
    const q= await axios.get('https://dummyjson.com/quotes/random')
    const i=await axios.get("https://api.unsplash.com/photos/random?client_id=XfAGp7bw1wwFjutp07D2IvpvZw_TfIOIMATpR2JFD8M")
    setQuotee(q.data);
    setImage(i.data.urls.full);
    console.log(i.data.urls);

  }
 useEffect(() => {
  
      ApiCall();
    
  },[current])


  return (
    <>
        <MCard quote={quotee.quote} author={quotee.author} image={image}/>
        <Button variant="contained" onClick={() => setCurrent(current + 1)  } style={{marginTop:30}}>other quote</Button>

    </>
  )
}

export default App

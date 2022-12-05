import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  let greeting= `BIENVENIDOS`
  

  return (
    <div className="App">
      <div>

      
        <NavBar/>
        
        <ItemListContainer bienvenida={greeting}/>
         
         

      </div>
    </div>
  )
}

export default App

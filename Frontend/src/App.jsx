

import Navbar from './Components/Navbar'
import PassengerForm from './Components/Passangerform'
import PassengerData from './Components/PasssngerData'

function App() {


  return (
    <>
     <Navbar/>
     <div style={{display:"flex"}}>
     <PassengerForm/>
     <PassengerData/>
     </div>
    
    </>
  )
}

export default App

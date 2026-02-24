
import './App.css'
import Heading from '/componants/page/Heading'
import Button from '/componants/page/Button'
import Navbar from '/componants/page/Navbar'



function App() {
 
  return (
    <>
     <Heading />
     <Navbar/>
      
     <Heading className={"bg-amber-600"}/>
     <Navbar className={"bg-amber-900"}/>
     
     <Heading className={"bg-green-600"}/>
     <Navbar className={"bg-green-900"}/>
     
     <Heading className={"bg-red-500"}/>
     <Navbar className={"bg-red-900"}/>
     
     <Heading className={"bg-blue-400"}/>
     <Navbar className={"bg-blue-600"}/>
     
     <Heading className={"bg-gray-400"}/>
     <Navbar className={"bg-gray-700"}/>
     
    

    </>
  )
}

export default App

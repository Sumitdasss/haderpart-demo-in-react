
import './App.css'


import Navbar from '/componants/page/Navbar'


import Heading from '/componants/layout/Heading'
import Fotter from '/componants/layout/Fotter'

import { Route, Routes } from 'react-router-dom'
import RootLayout from '../componants/layout/RootLayout'
import Iayoutone from '../componants/layout/layoutone'
import Regestar from '../componants/layout/Regestar'
import Error from '../componants/page/Error'
import Shop from '/componants/layout/Shop'
import Cart from '../componants/layout/Cart'





function App() {
 
  return (
    <>
   
     
      
     <Routes>
<Route path="/" element={<RootLayout/>}>
<Route index element={<Iayoutone/>}/>
<Route path="myaccount"element={<Regestar/>}/>
<Route path="shop" element={<Shop/>}/>
<Route path="cart" element={<Cart/>}/>

<Route path="*" element={<Error/>}/>
</Route>


     </Routes>
     
     
     
     
     
     
     
     
    
    

    </>
  )
}

export default App

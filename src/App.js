import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import image1 from './th.jpeg'
import Nav from './Component/Nav';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Create_Account from './Component/Create Account';
import Withdraw from './Component/Withdraw'
import Deposit from './Component/Deposit'


import Account_summary from './Component/Account Summary';
import Fund_Transfer from './Component/Fund Transfer';
import Pin_Change from './Component/Pin Change';
import Balance_Enquiry from './Component/Balance Enquiry';





function App() {
  return (
  <div>
    <div className='row' >
      <div className='col-md-1' style={{"background":"red" }}><br/><img src={image1} height={"120"} width={"120"} style={{"borderRadius":"50%"}}></img></div>
      <div className='col-md-11' style={{"background":"wheat" }}>
      
      
      <center style={{"background":"orange"}} ><h1 className="display-4" >The Bank App</h1></center>
      <center style={{"background":"green"}}><h1 className="display-5" ><marquee direction="Right">We Provide <s> What you want!</s></marquee></h1></center></div>
    
    </div>
    <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='About' element={<About/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
      <Route path='Create_Account' element={<Create_Account/>}></Route>
      <Route path='Withdraw' element={<Withdraw/>}></Route>
      <Route path='Deposit' element={<Deposit/>}></Route>
      <Route path='Balance_Enquiry' element={<Balance_Enquiry/>}></Route>
      <Route path='Pin_Change' element={<Pin_Change/>}></Route>
      <Route path='Fund_Transfer' element={<Fund_Transfer/>}></Route>
      <Route path='Account_summary' element={<Account_summary/>}></Route>
      
      
        </Routes>
        </BrowserRouter>
     
      </div>
   
 
  )
}

export default App;

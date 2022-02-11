import React from 'react';
//import { BrowserRouter as Router,Link, Routes, Route} from 'react-router-dom';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './screens/Home';
import Earn from './screens/Earn';
import Advertising from './screens/Advertising';
import Contact from './screens/Contact';
import Register from './screens/Register';
import Signin from './screens/Signin';
import Investment from "./screens/Investment";
import PaymentHistory from "./screens/PaymentHistory";
import UserDashboard from "./screens/UserDashboard";


// import Card from './components/Card/';
import ReactDOM from 'react-dom';
import Withdrawal from "./screens/Withdrawal";




// function App() {
//   return (
//     <>
//     <Router>
//         <Navbar />
//     <Switch>
//       <Route path='/' exact component={Home} />
//       </Switch>    
//     </Router>
//     </>
//   );
// }


function App() {
  return (
    <BrowserRouter>
     <Navbar />

     
      <Routes>
      <Route path="/contact" element={<Contact />} />  
      <Route path="/earn" element={<Earn />} />
      <Route path="/advertising" element={<Advertising />} />
      <Route path="/home" element={<Home />} />
      {/*<Route path="/" element={<Home />} />*/}
      <Route path="/withdrawal" element={<Withdrawal />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/investment-plan" element={<Investment />} />
      <Route path="/payment-history" element={<PaymentHistory />} />
      <Route path="/UserDashboard" element={<UserDashboard />} />

        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;


// function Users() {
//   return (
//     <div>
      
//     </div>
//   );
// }

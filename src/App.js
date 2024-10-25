import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/auth/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import User from './pages/user/User';
import Franchisee from './pages/franchise/Franchisee';
import Franchisee_Details from './pages/franchise/Franchisee_Deatils';
import User_Details from './pages/user/User_Details';
import Employee from "./pages/employee/Employee";
import Employee_Details from "./pages/employee/Employee_Details";
import Demo from "./Demo";
import Module from "./pages/module/Module";
import Category from "./pages/category/Category";
import Subcategory from "./pages/subcategory/Subcategory";

import Selleronboarding from "./Selleronboarding";
import Merchantonboarding from "./Merchantonboarding";

function App() {
  
  return (
   
    <Router>
      <Routes> 
        <Route path='/' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/user-detail/:id' element={<User_Details />}></Route>
        <Route path='/franchisee' element={<Franchisee />}></Route>
        <Route path='/franchisee_detail/:id' element={<Franchisee_Details />}></Route>
        <Route path="/employee" element={<Employee />}></Route>
        <Route path="/employee_detail/:id" element={<Employee_Details />}></Route>
        <Route path="/demo" element={<Demo />}></Route>
        <Route path="/selleronboarding" element={<Selleronboarding />}></Route>
        <Route path="/merchantonboarding" element={<Merchantonboarding />}></Route>
        <Route path="/congratulations" element={<Merchantonboarding />}></Route>
        <Route path="/module" element={<Module />}></Route>
        <Route path="/module_detail/:id" element={<Employee_Details />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/subcategory" element={<Subcategory />}></Route>
        
        
      </Routes>
    </Router>
   

  );
}

export default App;

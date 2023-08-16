import { Routes, Route } from "react-router-dom";
// import { lazy } from "react"
import Layout from "./Layout/Layout";
import HomePage from "pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ContactsPage from "../pages/ContactsPage";
import NotFoundPage from "pages/NotFoundPage";

const App = () => {

  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        
        <Route path="*" element={<NotFoundPage/>} />
    </Routes>  
    
   
    </div>
  );
};

export default App
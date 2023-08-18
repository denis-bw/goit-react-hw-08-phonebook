import { Routes, Route } from "react-router-dom";
import { lazy } from "react"
import { RestrictedRoute } from "./RestrictedRoute";
import Layout from "./Layout/Layout";
import HomePage from "pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/operations";
import { PrivateRoute } from "./PrivateRoute";

const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));



const App = () => {
  const dispatch = useDispatch();
  dispatch(refreshUser())
  
  return  (<div>
            <Routes>
              <Route path="/" element={<Layout />} >
                <Route index element={<HomePage />} />
        
                <Route path="register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />       
                <Route path="login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
                <Route path="contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}  />
              </Route>
                
                <Route path="*" element={<NotFoundPage/>} />
          </Routes>  
          </div>)
};

export default App